import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./ButtonStyles";
interface ButtonProps {
  label: string;
  onPress?: () => void;
}

export function Button({ label, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
