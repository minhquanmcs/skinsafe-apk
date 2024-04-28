import { moderateScale } from '@utils';

export interface IFontSize {
  size5: number;
  size6: number;
  size7: number;
  size8: number;
  size9: number;
  size10: number;
  size11: number;
  size12: number;
  size13: number;
  size14: number;
  size15: number;
  size16: number;
  size17: number;
  size18: number;
  size19: number;
  size20: number;
  size21: number;
  size22: number;
  size23: number;
  size24: number;
  size25: number;
  size26: number;
  size27: number;
  size28: number;
  size29: number;
  size30: number;
  size31: number;
  size32: number;
  size34: number;
  size36: number;
  size40: number;
  size48: number;
  size60: number;
  size96: number;
}

export const FontSize: IFontSize = {
  size5: moderateScale(5),
  size6: moderateScale(6),
  size7: moderateScale(7),
  size8: moderateScale(8),
  size9: moderateScale(9),
  size10: moderateScale(10),
  size11: moderateScale(11),
  size12: moderateScale(12),
  size13: moderateScale(13),
  size14: moderateScale(14),
  size15: moderateScale(15),
  size16: moderateScale(16),
  size17: moderateScale(17),
  size18: moderateScale(18),
  size19: moderateScale(19),
  size20: moderateScale(20),
  size21: moderateScale(21),
  size22: moderateScale(22),
  size23: moderateScale(23),
  size24: moderateScale(24),
  size25: moderateScale(25),
  size26: moderateScale(26),
  size27: moderateScale(27),
  size28: moderateScale(28),
  size29: moderateScale(29),
  size30: moderateScale(30),
  size31: moderateScale(31),
  size32: moderateScale(32),
  size34: moderateScale(34),
  size36: moderateScale(36),
  size40: moderateScale(40),
  size48: moderateScale(48),
  size60: moderateScale(60),
  size96: moderateScale(96),
};

export type FontSizeTypes = keyof typeof FontSize;
