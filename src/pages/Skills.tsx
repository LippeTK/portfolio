import React from "react";
import { ScrollView, View, Text } from "react-native";

import { styles } from "./SkillsStyles";
import { Profile } from "../components/ProfilePicture/Profile";

export function Skills() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <Profile />
      </View>
      <View>
        {/* Linguagens */}
        <Text style={styles.category}>Linguagens:</Text>
        <Text style={styles.item}>JavaScript</Text>
        <Text style={styles.item}>TypeScript</Text>
        <Text style={styles.item}>HTML</Text>
        <Text style={styles.item}>CSS</Text>

        {/* Frontend */}
        <Text style={styles.category}>Frontend:</Text>
        <Text style={styles.item}>React</Text>
        <Text style={styles.item}>React Native</Text>
        <Text style={styles.item}>Uso de hooks</Text>
        <Text style={styles.item}>React Router</Text>
        <Text style={styles.item}>Consumo de APIs</Text>

        {/* Backend */}
        <Text style={styles.category}>Backend:</Text>
        <Text style={styles.item}>Node.js</Text>
        <Text style={styles.item}>Express</Text>
        <Text style={styles.item}>Arquitetura MVC</Text>
        <Text style={styles.item}>Rotas REST</Text>

        {/* Banco de dados */}
        <Text style={styles.category}>Banco de dados:</Text>
        <Text style={styles.item}>MySQL</Text>
        <Text style={styles.item}>Sequelize</Text>
        <Text style={styles.item}>MongoDB</Text>
        <Text style={styles.item}>Mongoose</Text>

        {/* Outros */}
        <Text style={styles.category}>Outros:</Text>
        <Text style={styles.item}>Versionamento com Git</Text>
        <Text style={styles.item}>Familiaridade com sistemas Linux</Text>
        <Text style={styles.item}>Criação de interfaces responsivas</Text>

        <View>
          <Text style={styles.category}>Projetos:</Text>
        </View>
      </View>
    </ScrollView>
  );
}
