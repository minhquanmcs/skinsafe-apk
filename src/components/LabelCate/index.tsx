import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { StyleSheet } from 'react-native';

import { Text } from '../Text';
import { Block } from '../Block';
import { Touchable } from '../Touchable';
import { BlockProps } from '../Block/Block.props';
import { IconArrowRight2, translate } from '@assets';

interface ILabelCateProps extends BlockProps {
  label: string;
  labelMore?: string;
  onPressMore?: () => void;
}

const LabelCateComponent: React.FC<ILabelCateProps> = (props) => {
  const { label, labelMore = translate('cm.view_more'), onPressMore, ...rest } = props;

  return (
    <Block direction="row" align="center" flex justify="space-between" {...rest}>
      <Text fFamily="BRANDING" flex>
        {label}
      </Text>
      {onPressMore && (
        <Touchable onPress={onPressMore} direction="row" align="center">
          <Text size={'size11'} color={'COLOR_16'} fWeight={'600'}>
            {labelMore}
          </Text>
          <IconArrowRight2 />
        </Touchable>
      )}
    </Block>
  );
};

export const LabelCate = memo(LabelCateComponent, isEqual);

const styles = StyleSheet.create({});
