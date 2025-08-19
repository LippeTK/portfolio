import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./HomeStyles";
import { Button } from "../components/Button/Button";
import { StatusBar } from "expo-status-bar";
import { Profile } from "../components/ProfilePicture/Profile";

import * as Linking from "expo-linking";

const openLink = (url: string) => {
  Linking.openURL(url).catch((err) => {
    console.error("Erro ao abrir link:", err);
  });
};
export function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Profile />
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          label="LinkedIn"
          onPress={() =>
            openLink("https://www.linkedin.com/in/felipe-avila-carvalho/")
          }
        />
        <Button
          label="GitHub"
          onPress={() => openLink("https://github.com/LippeTK")}
        />
        <Button
          label="Whatsapp"
          onPress={() => openLink("https://wa.me/5551991900860?text=Oi!")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
