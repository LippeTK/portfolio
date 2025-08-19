import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./HomeStyles";
import { Button } from "../components/Button/Button";
import { StatusBar } from "expo-status-bar";
import { Profile } from "../components/ProfilePicture/Profile";

export function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Profile />
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
