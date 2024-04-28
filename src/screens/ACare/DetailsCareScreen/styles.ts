import { StyleSheet } from 'react-native';
import { Colors, FontSize } from '@themes';
import { moderateScale, scale, vScale } from '@utils';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.COLOR_4,
  },
  container: {
    flex: 1,
    marginTop: vScale(58),
    paddingTop: vScale(32),
    paddingHorizontal: scale(16),
    backgroundColor: Colors.COLOR_4,
    borderTopLeftRadius: moderateScale(25),
    borderTopRightRadius: moderateScale(25),
  },
  title: {
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.COLOR_1,
    fontSize: FontSize.size18,
    lineHeight: moderateScale(18),
  },
  des: {
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.TEXT,
    fontSize: FontSize.size14,
    marginTop: scale(20),
    paddingHorizontal: scale(43),
  },
  suggest: {},
  register: { textDecorationLine: 'underline', color: Colors.COLOR_7 },
  forgot: { textDecorationLine: 'underline', color: Colors.PRIMARY, textAlign: 'right' },
  dot: {
    bottom: vScale(2),
  },
  bannerImg: {
    height: vScale(230),
    marginHorizontal: scale(15),
    borderRadius: moderateScale(8),
  },
});

export default styles;
