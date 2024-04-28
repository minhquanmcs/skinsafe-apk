interface IColorType {
  TEXT: string;
  TEXT_2: string;
  BLACK: string;
  WHITE: string;
  PRIMARY: string;
  WARNING: string;
  COLOR_1: string;
  COLOR_2: string;
  COLOR_3: string;
  COLOR_4: string;
  COLOR_5: string;
  COLOR_6: string;
  COLOR_7: string;
  COLOR_8: string;
  COLOR_9: string;
  COLOR_11: string;
  COLOR_12: string;
  COLOR_13: string;
  COLOR_14: string;
  COLOR_15: string;
  COLOR_16: string;
  COLOR_17: string;
  COLOR_18: string;
  HEADER_BG: string;
}

export const Colors: IColorType = {
  TEXT: '#313131',
  TEXT_2: '#AB9E96',
  BLACK: '#000000',
  WHITE: '#ffffff',
  PRIMARY: '#731702',
  WARNING: '#BF7534',
  COLOR_1: '#E30613',
  COLOR_2: '#00C97C',
  COLOR_3: '#FC0B54',
  COLOR_4: '#FFFFFF',
  COLOR_5: '#FF8F76',
  COLOR_6: '#FFA620',
  COLOR_7: '#7763F0',
  COLOR_8: '#FDE8E8',
  COLOR_9: '#A9A9A9',
  COLOR_11: '#338ABF',
  COLOR_12: '#EBEBEB',
  COLOR_13: '#56A5C1',
  COLOR_14: '#FECEFE',
  COLOR_15: '#5B5B5B',
  COLOR_16: '#E30613',
  COLOR_17: '#0F5895',
  COLOR_18: '#0024E3',
  HEADER_BG: '#fe5568',
};

export type ColorsType = keyof typeof Colors;
