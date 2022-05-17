import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, {useContext} from "react";
import {
  Feather,
  FontAwesome,
  Entypo,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { View, Text } from "react-native";

import Home from "../Screens/Home";
import  Settings  from "../Screens/Settings";
import Sales from "../Screens/Sales";
import { AssestContext } from "../Context/AssetContext";

const Tabs = createBottomTabNavigator();
const Bottomtabs = () => {
  const { bgColor='white', iconColor } = useContext(AssestContext);

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 16,
          marginHorizontal: 20,
          borderRadius: 10,
          backgroundColor: "#4E4D54",
          opacity: 0.95,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            (color = bgColor === 'white' ? "#6b5fc5" : "#f5a84b"),
           
            (
              <View>
                <View>
                  <Feather
                    name="home"
                    size={24}
                    color={focused ? color : "white"}
                  />
                </View>
              </View>
            )
          ),
          tabBarLabel: ({ focused, color, size }) => (
            (color = bgColor === 'white' ? "#6b5fc5" : "#f5a84b"),
            (size = 13),
            (
              <Text
                style={{ color: focused ? color : "white", fontSize: size }}
              >
                Home
              </Text>
            )
          ),
        }}
      />
      <Tabs.Screen
        name="Sales"
        component={Sales}
        options={{
          tabBarIcon: ({ color, focused }) => (
            (color = bgColor === 'white' ? "#6b5fc5" : "#f5a84b"),
            (
              <View>
                <View>
                  <MaterialIcons
                    name="point-of-sale"
                    size={24}
                    color={focused ? color : "white"}
                  />
                </View>
              </View>
            )
          ),
          tabBarLabel: ({ focused, color, size }) => (
            (color = bgColor === 'white' ? "#6b5fc5" : "#f5a84b"),
            (size = 13),
            (
              <Text
                style={{ color: focused ? color : "white", fontSize: size }}
              >
                Sales Chart
              </Text>
            )
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, focused }) => (
            (color = bgColor === 'white' ? "#6b5fc5" : "#f5a84b"),
            // bgColor === 'white' ? null : "#4E4D54"
            (
              <View>
                <View>
                  <AntDesign
                    name="setting"
                    size={24}
                    color={focused ? color : "white"}
                  />
                </View>
              </View>
            )
          ),
          tabBarLabel: ({ focused, color, size }) => (
            (color = bgColor === 'white' ? "#6b5fc5" : "#f5a84b"),
            (size = 13),
            (
              <Text
                style={{ color: focused ? color : "white", fontSize: size }}
              >
                Settings
              </Text>
            )
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Bottomtabs;
