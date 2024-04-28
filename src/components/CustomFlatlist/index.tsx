import { Colors } from '@themes';
import React, { memo } from 'react';
import isEqual from 'react-fast-compare';
import { ListEmpty } from '../ListEmpty';
import { FlatList, FlatListProps, RefreshControl } from 'react-native';

interface ICustomFlatlistProps<T> extends FlatListProps<T> {
  refreshing?: boolean;
  onRefresh?: () => void;
}

const CustomFlatlistComponent = React.forwardRef<FlatList, ICustomFlatlistProps<any>>((props, ref) => {
  const { refreshing, onRefresh } = props;

  const keyExtractor = (item: any, index: number) => item?.id || index + '';

  return (
    <FlatList
      ref={ref}
      windowSize={15}
      removeClippedSubviews
      keyExtractor={keyExtractor}
      ListEmptyComponent={ListEmpty}
      refreshControl={
        refreshing && onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[Colors.PRIMARY]}
            tintColor={Colors.PRIMARY}
            progressBackgroundColor={'transparent'}
          />
        ) : undefined
      }
      {...props}
    />
  );
});

export const CustomFlatlist = memo(CustomFlatlistComponent, isEqual);
