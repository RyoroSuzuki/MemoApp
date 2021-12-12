import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';

export default function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

Button.prototype = {
  label: string.isRequired,
  onPress: func,
};

Button.defaultProptype = {
  onPress: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    marginBottom: 24,
    alignSelf: 'flex-start',
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
});
