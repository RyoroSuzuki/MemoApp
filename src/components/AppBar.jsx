import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: 32,
  },
  appbarRight: {
    position: 'absolute',
    bottom: 16,
    right: 19,
    color: 'rgba(255,255,255,0.8)',
  },
});
