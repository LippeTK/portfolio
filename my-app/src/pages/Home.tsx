import React from "react";
import { View, Text, Image } from "react-native";
import ProfilePicture from "../../assets/profile-picture.jpg";

import { styles } from "./HomeStyles";
import { Button } from "../components/Button/Button";
import { StatusBar } from "expo-status-bar";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={ProfilePicture} style={styles.image} />
        <Text style={styles.title}>Felipe Carvalho</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button label={"LinkedIn"} />
        <Button label={"GitHub"} />
        <Button label={"E-mail"} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
