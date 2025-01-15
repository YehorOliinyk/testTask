import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useColor } from "../hooks/useColor";

export const MainScreen = () => {
  const { activeColor, getRandomColor } = useColor();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={getRandomColor}
      style={[styles.container, { backgroundColor: activeColor }]}
    >
      <Text>Hello there</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
