import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Alert,
  // KeyboardAvoidingView,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

// eslint-disable-next-line react/function-component-definition
export default function MemoEditScreen() {
  return (
    <KeyboardSafeView style={styles.container}>
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput
          value="買い物リストの詳細文だよ"
          multiline
          style={styles.input}
        />
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          Alert.alert('ああああ');
        }}
      />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    textAlignVertical: 'top',
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
});