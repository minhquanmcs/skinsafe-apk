import { StyleSheet } from 'react-native';

import { FontSize } from '@themes';
import { moderateScale, scale } from '@src/utils';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    position: 'relative',
    flexDirection: 'row',
  },
  input: {
    color: '#000000',
    flex: 1,
    margin: 0,
    padding: 0,
    lineHeight: null,
    // textAlignVertical: 'top',
  },
  wrapInput: {
    width: '100%',
    height: scale(48),
    marginTop: scale(16),
    flexDirection: 'row',
    borderRadius: scale(8),
    justifyContent: 'center',
    backgroundColor: '#EBEBEB',
    paddingHorizontal: scale(12),
    borderWidth: moderateScale(1),
  },
  label: {
    color: '#000000',
    marginTop: scale(5),
  },
  wrapLabel: {
    position: 'absolute',
    left: 0,
  },
  errorForm: {
    color: '#FC0B54',
    textAlign: 'right',
    marginLeft: scale(4),
  },
  submitText: {
    color: '#EBEBEB',
    fontSize: FontSize.size16,
  },
});

export default styles;
