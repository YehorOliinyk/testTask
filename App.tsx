import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const App = () => {
  const [activeColor, setActiveColor] = useState('white');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    setActiveColor(color);
  }

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: activeColor }]}
      onPress={() => getRandomColor()}
      activeOpacity={0.9}
    >
      <Text>Hello there</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
