import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function MemoListItem() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text stye={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/12/4</Text>
        </View>
        <Text>X</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 19,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 32,
    color: '#848484',
  },
});