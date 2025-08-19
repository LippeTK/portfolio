import React from "react";
import { ScrollView, View, Text } from "react-native";

import { styles } from "./SkillsStyles";
import { Profile } from "../components/ProfilePicture/Profile";
import { skillsData } from "../data/skillsData";

export function Skills() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Profile />
      </View>

      <View>
        {skillsData.map(({ category, items }) => (
          <View key={category}>
            <Text style={styles.category}>{category}:</Text>
            {items.map((item) => (
              <Text key={item} style={styles.item}>
                {item}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
