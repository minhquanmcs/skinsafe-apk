import isEqual from 'react-fast-compare';
import React, { memo, useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import { images } from '@assets';
import { Block, Text, Touchable, SafeWrapper, Image } from '@components';
import { Colors } from '@themes';
import { ActivityIndicator, Image as RNImage, StatusBar } from 'react-native';
import { SCREENS } from '@navigation';

const user = {
  name: 'Minh Quan',
  class: 'xxxxxx',
  bio: 'Slayer',
  avatar: images.avatar,
};
interface IProps {
  route: any;
  navigation: any;
}

const HomeCareComponent: React.FC<IProps> = (props) => {
  const { navigation, route } = props;
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log('loading 11111', loading);
  const onSearch = () => {
    setLoading(true);
    setTimeout(() => {
      uploadImage();
    }, 1000);
  };

  console.log('image', image);

  const openPicker = async () => {
    try {
      const pickedImage = await ImagePicker.openPicker({
        width: 500, // Chiều rộng mong muốn của ảnh
        height: 500, // Chiều cao mong muốn của ảnh
        cropping: true,
        includeBase64: true,
      });
      setImage(pickedImage);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const openCamera = async () => {
    try {
      const takenImage = await ImagePicker.openCamera({
        width: 500, // Chiều rộng mong muốn của ảnh
        height: 500, // Chiều cao mong muốn của ảnh
        cropping: true,
        includeBase64: true,
      });
      setImage(takenImage);
    } catch (error) {
      console.log('Error:', error);
    }
  };
  const uploadImage = async () => {
    // Viết logic để gửi ảnh dưới dạng base64 lên máy chủ ở đây
    try {
      const formData = new FormData();
      formData.append('image', image?.data);

      const response = await fetch('YOUR_SERVER_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json', // Đảm bảo set Content-Type phù hợp
        },
      });

      const data = await response.json();
      console.log('Upload success:', data);
    } catch (error) {
      console.log('Error:', error);
    } finally {
      navigation.navigate(SCREENS.LIST_CARE);
      setLoading(false);
    }
  };
  if (loading)
    return (
      <Block flex align="center" justify="center" bgColor="#fff">
        <Image source="icHospital" style={{ width: 250, height: 250 }} />
        <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 16, color: Colors.COLOR_2, marginTop: 10 }}>
          SkinSafe AI is processing...
        </Text>
        <Text style={{ textAlign: 'center', fontWeight: '400', fontSize: 14, marginTop: 10, color: Colors.COLOR_2, marginBottom: 16 }}>
          Wait for the image analysis to complete
        </Text>
        <ActivityIndicator size="large" color={Colors.COLOR_16} />
      </Block>
    );
  return (
    <SafeWrapper bgColor={'COLOR_2'}>
      <StatusBar barStyle="dark-content" />
      {/* info */}
      <Touchable
        direction="row"
        align="center"
        pdVertical={4}
        mgLeft={24}
        mgTop={20}
        w={120}
        justify="center"
        style={{ borderRadius: 10, borderWidth: 1, borderColor: Colors.COLOR_5 }}>
        {/* <Image source="avatar" style={{ width: 50, height: 50, borderRadius: 50 }} />
        <Block mgLeft={12}>
          <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 16 }}>Welcome comback</Text>
          <Text style={{ fontWeight: '700', fontSize: 18, color: Colors.COLOR_6 }}> {user.name}</Text>
        </Block> */}
        <Image source="icLang" style={{ width: 30, height: 30 }} />
        <Text style={{ fontWeight: '700', fontSize: 17, color: Colors.COLOR_6, marginLeft: 10 }}>English</Text>
      </Touchable>
      <Block pdHorizontal={16} align="center" flex mgTop={32}>
        <Text style={{ fontWeight: '700', fontSize: 24, color: Colors.HEADER_BG }}>SKIN SAFE</Text>

        {/* img */}
        <Block align="center" mgTop={16}>
          <Image source="doctor" style={{ width: 400, height: 250 }} resizeMode="cover" />
        </Block>
        {/* button mở comment de chay code phan chon file device */}
        <Block>
        
        {/* comment lai doan nay de an chose image*/}
           <Touchable mgTop={24} direction="row" align="center" mgBottom={8} onPress={openPicker}>
            <Image source="imgAddImage" style={{ width: 16, height: 16, tintColor: Colors.COLOR_2 }} />
            <Text style={{ marginLeft: 12, color: Colors.COLOR_17, textDecorationLine: 'underline' }}>Chose your image</Text>
          </Touchable>
          <Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 16 }}>OR</Text> 
        {/* ket thuc comment*/}
        
          <Touchable
            onPress={openCamera}
            mgTop={24}
            direction="row"
            align="center"
            style={{ borderColor: Colors.COLOR_6, borderWidth: 0.5, padding: 10, borderRadius: 20, paddingHorizontal: 16 }}>
            <Image source="imgCamera" style={{ width: 16, height: 16, tintColor: Colors.COLOR_6 }} />
            <Text style={{ marginLeft: 12 }}>Snap your skin</Text>
          </Touchable>
        </Block>
        {/* image chose*/}
        {image ? (
          <Block mgTop={16} justify="center" align="center">
            <Block>
              <RNImage source={{ uri: image?.path }} style={{ width: 150, height: 150, borderRadius: 8 }} />
              <Touchable
                onPress={() => setImage(null)}
                style={{ position: 'absolute', right: 0, top: 0, padding: 4, backgroundColor: Colors.TEXT, borderRadius: 10 }}>
                <Image source="icCancelCircle" style={{ width: 16, height: 16, tintColor: Colors.COLOR_9 }} />
              </Touchable>
            </Block>
            <Touchable
              onPress={onSearch}
              mgTop={12}
              style={{ backgroundColor: Colors.COLOR_2, padding: 12, paddingHorizontal: 32, borderRadius: 20 }}>
              <Text style={{ textAlign: 'center', color: '#fff', fontWeight: '700', fontSize: 16 }}>Detect disease</Text>
            </Touchable>
          </Block>
        ) : (
          <Block />
        )}
      </Block>
    </SafeWrapper>
  );
};

export const HomeCareScreen = memo(HomeCareComponent, isEqual);
