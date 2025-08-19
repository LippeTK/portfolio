import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Home } from "../pages/Home";
import { Skills } from "../pages/Skills";

const Tab = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color="black" />
          ),
        }}
      />

      <Tab.Screen
        name="skills"
        component={Skills}
        options={{
          headerShown: false,
          title: "Skills",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pencil" size={size} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
