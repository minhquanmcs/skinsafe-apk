export type IFontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'bold' | 'normal';
export type IAppTheme = 'dark' | 'light';
export type IAppLanguage = 'vi' | 'en';
export type ISortType = null | 'id,desc' | 'id,asc' | string;
export type IStatusOrder = 'confirmed' | 'processing' | 'canceled' | 'receive_order' | 'completed';
export type IFlexContent = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
export type IFlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export interface RenderItemProps {
  item: any;
  index: number;
}
