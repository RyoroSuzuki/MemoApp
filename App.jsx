import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/AppBar';
import MemoListItem from './src/components/MemoListItem';
import CircleButton from './src/components/CircleButton';

// eslint-disable-next-line react/function-component-definition
export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoListItem />
      <CircleButton>＋</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
