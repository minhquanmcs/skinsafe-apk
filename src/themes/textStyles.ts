import { FontSize } from './fontsize';
import { moderateScale } from '@utils';
import { StyleSheet, TextStyle } from 'react-native';

export const TEXT_STYLES = StyleSheet.create({
  TEXT_H1: {
    fontWeight: '400',
    fontSize: FontSize.size18,
    lineHeight: moderateScale(18),
  } as TextStyle,
  TEXT_H2: {
    fontWeight: '400',
    fontSize: FontSize.size16,
    lineHeight: moderateScale(18),
  } as TextStyle,
  TEXT_H3: {
    fontWeight: '400',
    fontSize: FontSize.size14,
    lineHeight: moderateScale(16.7),
  } as TextStyle,
  TEXT_H4: {
    fontWeight: '400',
    fontSize: FontSize.size12,
    lineHeight: moderateScale(14.32),
  } as TextStyle,
  TEXT_H5: {
    fontWeight: '400',
    fontSize: FontSize.size10,
    lineHeight: moderateScale(11.93),
  } as TextStyle,
  TEXT_H6: {
    fontWeight: '400',
    fontSize: FontSize.size9,
    lineHeight: moderateScale(10.74),
  } as TextStyle,
  TEXT_H7: {
    fontWeight: '400',
    fontSize: FontSize.size8,
    lineHeight: moderateScale(9.54),
  } as TextStyle,
  TEXT_H8: {
    fontWeight: '400',
    fontSize: FontSize.size6,
    lineHeight: moderateScale(7.16),
  } as TextStyle,
  TEXT_H9: {
    fontWeight: '400',
    fontSize: FontSize.size5,
    lineHeight: moderateScale(5.97),
  } as TextStyle,

  TITLE_H1: {
    fontWeight: '700',
    fontSize: FontSize.size22,
    lineHeight: moderateScale(18),
  } as TextStyle,
  TITLE_H2: {
    fontWeight: '700',
    fontSize: FontSize.size20,
    lineHeight: moderateScale(18),
  } as TextStyle,
  TITLE_H3: {
    fontWeight: '700',
    fontSize: FontSize.size18,
    lineHeight: moderateScale(18),
  } as TextStyle,
  TITLE_H4: {
    fontWeight: '700',
    fontSize: FontSize.size16,
    lineHeight: moderateScale(18),
  } as TextStyle,
  TITLE_H5: {
    fontWeight: '700',
    fontSize: FontSize.size14,
    lineHeight: moderateScale(18),
  } as TextStyle,
  TITLE_H6: {
    fontWeight: '700',
    fontSize: FontSize.size12,
    lineHeight: moderateScale(18),
  } as TextStyle,
});
