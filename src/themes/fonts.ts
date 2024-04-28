export interface IFontsType {
  BRANDING: string;
  BOLD: string;
  LIGHT: string;
  MEDIUM: string;
  REGULAR: string;
}

export const Fonts: IFontsType = {
  BRANDING: 'ThuCung-Regular',
  BOLD: 'HelveticaNeue-Bold',
  LIGHT: 'HelveticaNeue-Light',
  MEDIUM: 'HelveticaNeue-Medium',
  REGULAR: 'HelveticaNeue-Regular',
};

export type FontsType = keyof typeof Fonts;
