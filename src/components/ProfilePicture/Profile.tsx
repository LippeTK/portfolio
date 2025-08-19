import React from "react";
import { View, Image, Text } from "react-native";

import { styles } from "./ProfileStyles";
import ProfilePicture from "../../../assets/profile-picture.jpg";

export function Profile() {
  return (
    <View style={styles.imageContainer}>
      <Image source={ProfilePicture} style={styles.image} />
      <Text style={styles.title}>Felipe Carvalho</Text>
    </View>
  );
}
