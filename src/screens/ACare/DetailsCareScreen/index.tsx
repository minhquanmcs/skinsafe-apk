import isEqual from 'react-fast-compare';
import React, { memo, useState } from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { TabView, TabBar } from 'react-native-tab-view';

import { Block, Text, Touchable, SafeWrapper, HeaderBar, Image } from '@components';
import { Dimensions, ScrollView, View } from 'react-native';
import { Colors } from '@themes';

const { width } = Dimensions.get('window');
const imageHeight = (4 / 6) * width;

interface IProps {
  route: any;
  navigation: any;
}
const meaning = `Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. This leads to the formation of pimples, blackheads, whiteheads, and sometimes deeper cysts. Acne usually appears on the face, neck, chest, back, and shoulders, and can affect people of all ages, although it is most common during puberty.`;
const cause = `The causes of acne are multifactorial and can include hormonal imbalances, genetics, stress, certain medications, and an overproduction of sebum, the oily substance that lubricates the skin. Certain factors such as diet and hygiene practices have also been implicated in the development of acne, although the evidence for these is less clear.`;
const symptom = `The symptoms of acne can vary depending on the severity of the condition. Mild acne may only present with a few blackheads or whiteheads, while moderate acne can involve a combination of pimples, blackheads, and whiteheads. Severe acne may include deep, painful cysts that can lead to scarring. Acne can also have a significant impact on a person's self-esteem and mental health, particularly if it is severe or persistent.`;
const treatment = `Treatment options for acne depend on the severity of the condition. Mild acne can often be managed with over-the-counter topical treatments that contain benzoyl peroxide or salicylic acid. These products work by reducing the amount of oil on the skin and unclogging pores. More severe acne may require prescription medications, such as topical retinoids or oral antibiotics, which can help to reduce inflammation and kill the bacteria that cause acne. In cases of severe, persistent acne, isotretinoin, a powerful oral medication, may be prescribed. Additionally, lifestyle modifications such as maintaining good hygiene practices, avoiding certain foods, and managing stress can also be helpful in managing acne.`;

const DetailsCareComponent: React.FC<IProps> = (props) => {
  const { navigation, route } = props;
  const item = route?.params?.item;
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'meaning', title: 'Meaning' },
    { key: 'causes', title: 'Causes' },
    { key: 'symptoms', title: 'Symptoms' },
    { key: 'treatment', title: 'Treatment' },
  ]);
  const initialLayout = { width: Dimensions.get('window').width };

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.COLOR_1 }}
      style={{ backgroundColor: Colors.COLOR_12 }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: focused ? Colors.COLOR_1 : Colors.COLOR_15, fontSize: 14 }}>{route.title}</Text>
      )}
    />
  );

  const renderScene = ({ route }: any) => {
    switch (route.key) {
      case 'meaning':
        return (
          <Block pd={16}>
            <Text style={{ fontSize: 15 }}>{meaning}</Text>
          </Block>
        );
      case 'causes':
        return (
          <Block pd={16}>
            <Text style={{ fontSize: 15 }}>{cause}</Text>
          </Block>
        );
      case 'symptoms':
        return (
          <Block pd={16}>
            <Text style={{ fontSize: 15 }}>{symptom}</Text>
          </Block>
        );
      case 'treatment':
        return (
          <Block pd={16}>
            <Text style={{ fontSize: 15 }}>{treatment}</Text>
          </Block>
        );
      default:
        return null;
    }
  };
  const Content = (content?: any) => (
    <Block flex bgColor="red">
      <Text>{content}</Text>
    </Block>
  );
  // const ImageSwiper = () => {
  //   return (
  //     <Swiper autoplay paginationStyle={{ bottom: 20 }} dotColor={Colors.TEXT_2} activeDotColor={Colors.COLOR_2}>
  //       {listBanner.map((e: any, i: number) => {
  //         return (
  //           <Block key={i}>
  //             <ImageRemote source={'https://picsum.photos/500'} style={styles.bannerImg} resizeMode={'cover'} />
  //           </Block>
  //         );
  //       })}
  //     </Swiper>
  //   );
  // };
  return (
    <SafeWrapper bgColor="COLOR_2">
      <HeaderBar bgColor="COLOR_2" title={'SKIN SAFE Assistant'} styleTitle={{ fontWeight: '700' }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block flex mgTop={16}>
          {/* progress */}
          <Block pd={12} pdVertical={8} direction="row" align="center">
            <ProgressCircle
              percent={item?.best ? 100 : 0}
              radius={25}
              borderWidth={5}
              color={item?.best ? '#4dff4d' : '#3399FF'}
              shadowColor="#f0f4f0"
              bgColor="#fff">
              <Text style={{ fontSize: 14, color: Colors.COLOR_17, fontWeight: '700' }}>{item?.best ? 'A' : 'N'}</Text>
            </ProgressCircle>
            <Block mgLeft={16} flex>
              <Text style={{ fontSize: 16, color: item?.best ? Colors.COLOR_17 : Colors.BLACK, fontWeight: '700' }}>{item?.title}</Text>
              <Text style={{ fontSize: 14, marginTop: 8, color: Colors.TEXT_2 }}>{item?.des}</Text>
            </Block>
          </Block>
          <Block flex h={0.5} bgColor={Colors.COLOR_9} />
          {/* read more */}
          {/* <Block mgHorizontal={16} mgTop={12}>
            <ReadMoreText text={longText} maxChars={150} />
          </Block> */}
          <Block align="center" mgTop={16} mgBottom={24}>
            <Touchable
              align="center"
              justify="center"
              pdVertical={8}
              direction="row"
              pdHorizontal={12}
              style={{ backgroundColor: Colors.COLOR_6, borderRadius: 20 }}>
              <Text style={{ fontWeight: '700', fontSize: 15, color: '#fff', textAlign: 'center' }}>{`Connect to closed \n Care Providers`}</Text>
              <Image source="icNextDoor" style={{ width: 20, height: 20, tintColor: '#fff', marginLeft: 16 }} />
            </Touchable>
          </Block>
        </Block>
        <Block flex h={800}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
          />
        </Block>
      </ScrollView>
    </SafeWrapper>
  );
};

export const DetailsCareScreen = memo(DetailsCareComponent, isEqual);

const ReadMoreText = ({ text, maxChars = 100 }) => {
  const [showAll, setShowAll] = useState(false);
  const displayText = showAll ? text : text.slice(0, maxChars) + '...';

  return (
    <View>
      <Text>{displayText}</Text>
      {text.length > maxChars && (
        <Touchable onPress={() => setShowAll(!showAll)}>
          <Text style={{ color: 'blue' }}>{showAll ? 'Show less' : 'Read more'}</Text>
        </Touchable>
      )}
    </View>
  );
};
