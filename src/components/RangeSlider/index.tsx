import React, { memo, useCallback, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import { PanResponder, StyleSheet } from 'react-native';
import { Block } from '..';
import { scale, vScale, enhance } from '@src/utils';
import { Colors, FontSize } from '@src/themes';
import Slider, { SliderProps } from 'rn-range-slider';
const THUMB_RADIUS = scale(12);
interface RangeSliderProps {
  handleValueChange: (l: number, h: number) => void;
  containerStyle?: any;
  min?: number;
  max?: number;
  step?: number;
  thumb_size?: number;
  initLow?: number;
  initHigh?: number;
}
const RangeSliderComponent = (props: RangeSliderProps) => {
  const {
    handleValueChange,
    min = 0,
    max = 100,
    step = 1,
    thumb_size = THUMB_RADIUS,
    containerStyle = {},
    initLow,
    initHigh,
    ...rest
  } = props;
  const [low, setLow] = useState<any>(initLow);
  const [high, setHigh] = useState<any>(initHigh);
  const onValueChanged = (l: number, h: number) => {
    setLow(l);
    setHigh(h);
    handleValueChange(l, h);
  };
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const container = useMemo(() => enhance([styles.slider, containerStyle]), [containerStyle]);
  return (
    <Slider
      style={container}
      min={min}
      max={max}
      step={step}
      floatingLabel
      renderThumb={renderThumb}
      renderRail={renderRail}
      renderRailSelected={renderRailSelected}
      // renderNotch={renderNotch}
      onValueChanged={onValueChanged}
      low={low}
      high={high}
    />
  );
};

export const RangeSlider = memo(RangeSliderComponent, isEqual);
const Thumb = () => <Block style={styles.thumb} />;
const RailSelected = () => <Block style={styles.railSelected} />;
const Rail = () => <Block style={styles.rail} />;
const Notch = (props: any) => <Block style={styles.notch} {...props} />;
const styles = StyleSheet.create({
  slider: { width: scale(289) },
  thumb: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    backgroundColor: Colors.COLOR_1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
  },
  railSelected: {
    height: 5,
    backgroundColor: Colors.COLOR_1,
    borderRadius: 2,
  },
  rail: {
    flex: 1,
    height: 5,
    borderRadius: 2,
    backgroundColor: '#E4E4E4',
  },
  notch: {
    width: 8,
    height: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FE6600',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
  label: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#FE6600',
    borderRadius: 4,
  },
  txtLabel: {
    fontSize: 16,
    color: '#fff',
  },
});
