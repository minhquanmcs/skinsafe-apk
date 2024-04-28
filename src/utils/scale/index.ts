import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

//Guideline sizes are based on iPhoneX
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const vScale = (size: number) => (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, vScale, moderateScale };
