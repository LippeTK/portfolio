import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./ButtonStyles";
interface ButtonProps {
  label: string;
}

export function Button({ label }: ButtonProps) {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </View>
  );
}
