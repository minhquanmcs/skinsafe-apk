import { useRequest } from 'ahooks';
import { Animated } from 'react-native';
import { StyleSheet } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';
import { PanGestureHandler } from 'react-native-gesture-handler';
import React, { memo, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { Colors } from '@themes';
import { device, moderateScale, scale, vScale } from '@utils';
import { Block, CustomFlatlist, CustomModalize, Loading, Text, Touchable } from '@components';
import { IconArrowRight, IconCancel, IconRadioUncheck, IconSuccess, translate } from '@assets';
import { handleResponse, RenderItemProps, requestGetDistrict, requestGetProvince, requestGetWard } from '@configs';

interface Props {
  addressInfo: any;
  setAddressInfo: (e: any) => void;
}

const ROUTES = [
  { key: 'first', title: 'province' },
  { key: 'second', title: 'district' },
  { key: 'third', title: 'ward' },
];

export const ModalSelectLocation = React.forwardRef((props: Props, ref) => {
  const { addressInfo, setAddressInfo } = props;

  const refModalize = useRef<any>(null);

  const [indexTab, setIndexTab] = useState<number>(0);
  const [listWards, setListWards] = useState<any[]>([]);
  const [listProvinces, setListProvinces] = useState<any[]>([]);
  const [listDistricts, setListDistricts] = useState<any[]>([]);

  useImperativeHandle(ref, () => ({
    open: () => refModalize.current?.open(),
    close: () => refModalize.current?.close(),
  }));

  useEffect(() => {
    runGetProvince();
  }, []);

  const { run: runGetProvince, loading: loadingGetProvince } = useRequest(requestGetProvince, {
    manual: true,
    onSuccess: (data) => {
      const { res } = handleResponse(data);
      if (Array.isArray(res)) setListProvinces(res);
    },
  });
  const { run: runGetDistrict, loading: loadingGetDistrict } = useRequest(requestGetDistrict, {
    manual: true,
    onSuccess: (data) => {
      const { res } = handleResponse(data);
      if (Array.isArray(res)) setListDistricts(res);
    },
    onBefore: () => setListDistricts([]),
  });
  const { run: runGetWard, loading: loadingGetWard } = useRequest(requestGetWard, {
    manual: true,
    onSuccess: (data) => {
      const { res } = handleResponse(data);
      if (Array.isArray(res)) setListWards(res);
    },
  });

  const renderScene = SceneMap({
    first: () => <RenderContent data={listProvinces} type={'province'} onPress={onSelect} addressInfo={addressInfo} />,
    second: () => <RenderContent data={listDistricts} type={'district'} onPress={onSelect} addressInfo={addressInfo} />,
    third: () => <RenderContent data={listWards} type={'ward'} onPress={onSelect} addressInfo={addressInfo} />,
  });

  const onSelect = (item: any, type: string) => {
    if (type === 'province') {
      if (item?.id !== addressInfo?.province?.id) {
        setAddressInfo({ province: item, district: null, ward: null });
      }
      runGetDistrict({ province_id: item?.id });
      return setIndexTab(1);
    }
    if (type === 'district') {
      if (item?.id !== addressInfo?.district?.id) {
        setAddressInfo((prev: any) => ({ ...prev, district: item, ward: null }));
      }
      runGetWard({ district_id: item?.id });
      return setIndexTab(2);
    }
    setAddressInfo((prev: any) => ({ ...prev, ward: item }));
    refModalize.current?.close();
  };

  const onClosed = () => setIndexTab(0);

  return (
    <CustomModalize
      ref={refModalize}
      onClosed={onClosed}
      modalHeight={(device.height * 3) / 5}
      HeaderComponent={<HeaderComponent onPress={() => refModalize.current?.close()} addressInfo={addressInfo} />}
      customRenderer={
        <PanGestureHandler>
          <Animated.View>
            <Block style={{ display: 'flex', flexShrink: 1 }}>
              <Block style={{ flexShrink: 1 }}>
                <Block style={{ height: '100%' }}>
                  {(loadingGetDistrict || loadingGetProvince || loadingGetWard) && <Loading />}
                  <TabView
                    swipeEnabled={false}
                    renderScene={renderScene}
                    renderTabBar={() => null}
                    onIndexChange={setIndexTab}
                    keyboardDismissMode={'on-drag'}
                    initialLayout={{ width: device.width }}
                    navigationState={{ index: indexTab, routes: ROUTES }}
                  />
                </Block>
              </Block>
            </Block>
          </Animated.View>
        </PanGestureHandler>
      }
    />
  );
});

const styles = StyleSheet.create({
  modalContainer: {
    width: '100%',
    paddingTop: vScale(28),
    paddingBottom: vScale(13),
    marginHorizontal: scale(15),
    paddingHorizontal: scale(15),
    backgroundColor: Colors.WHITE,
    borderTopRightRadius: moderateScale(8),
    borderTopLeftRadius: moderateScale(8),
  },
  list: {
    flex: 1,
    paddingHorizontal: scale(12),
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(4),
    paddingVertical: vScale(12),
    justifyContent: 'space-between',
    borderBottomWidth: moderateScale(0.8),
    borderColor: 'rgba(226, 226, 226, 0.38)',
  },
});

const HeaderComponent = memo(({ onPress, addressInfo }: any) => {
  return (
    <>
      <Block direction="row" pdTop={16} pdHorizontal={16} justify="space-between">
        <Text fWeight="700">{translate(`location.title`)}</Text>
        <Touchable onPress={onPress}>
          <IconCancel />
        </Touchable>
      </Block>

      <Block pdHorizontal={16} direction="row" align="center" style={{ flexWrap: 'wrap' }} pdBottom={16}>
        <Text fFamily="BRANDING" size="size18">
          {addressInfo?.province?.name}
        </Text>
        {addressInfo?.province?.name && (
          <IconArrowRight style={{ marginHorizontal: scale(8) }} color={Colors.COLOR_1} />
        )}
        <Text fFamily="BRANDING" size="size18">
          {addressInfo?.district?.name}
        </Text>
        {addressInfo?.district?.name && (
          <IconArrowRight style={{ marginHorizontal: scale(8) }} color={Colors.COLOR_1} />
        )}
        <Text fFamily="BRANDING" size="size18">
          {addressInfo?.ward?.name}
        </Text>
      </Block>
    </>
  );
});

const ItemList = memo((props: any) => {
  const { data, onPress, isSelected } = props;

  return (
    <Touchable style={styles.itemList} onPress={onPress}>
      <Text fWeight="500">{data?.name}</Text>
      {isSelected ? <IconSuccess color={Colors.COLOR_1} /> : <IconRadioUncheck />}
    </Touchable>
  );
});

const RenderContent = memo((props: any) => {
  const { data, onPress, type, addressInfo } = props;

  const renderItem = ({ item }: RenderItemProps) => {
    const isSelected = addressInfo?.[type]?.id === item.id && addressInfo?.[type]?.name === item.name;
    return <ItemList data={item} onPress={() => onPress(item, type)} isSelected={isSelected} />;
  };

  return <CustomFlatlist style={styles.list} data={data || []} renderItem={renderItem} />;
});
