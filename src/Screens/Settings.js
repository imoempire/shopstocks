import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Switch } from "react-native";
import { AssestContext } from "../Context/AssetContext";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
const statusHeight = getStatusBarHeight();

const Settings = () => {
  const [color, setColor] = useState("white");
  const [darkLight, setDarkLight] = useState(false);
  const {
    assest,
    setAssest,
    setBgColor,
    bgColor = "white",
    setIconColor,
  } = useContext(AssestContext);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const TextColor = bgColor === "white" ? "black" : "white";

  const TurnNotification = () => {
    if (!isEnabled) {
      alert("Notification is now On");
      setIsEnabled(!isEnabled);
    }
    if (isEnabled) {
      alert("Notification is now Off");
      setIsEnabled(!isEnabled);
    }
  };

  const changeColor = () => {
    if (!darkLight) {
      setBgColor("#161618");
      setIconColor("#f5a84b");
      setDarkLight(!darkLight);
    }
    if (darkLight) {
      setBgColor("white");
      setIconColor("#6b5fc5");
      setDarkLight(!darkLight);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", color: TextColor }}>Settings</Text>
        <Switch
              trackColor={{ false: "#767577", true: "#767577" }}
              thumbColor={darkLight ? "#3f4" : "#3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={changeColor}
              value={darkLight}
            />
      </View>
      <View style={styles.settings}>
        <View style={styles.account}>
          <View style={styles.item}>
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={TextColor}
            />
            <Text style={{ fontSize: 20, color: TextColor }}>Account</Text>
          </View>
          <TouchableOpacity style={styles.option}>
            <Text style={{ color: TextColor }}>Edit Profile</Text>
            <Ionicons name="chevron-forward" size={24} color={TextColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={{ color: TextColor }}>Log Out</Text>
            <Ionicons name="chevron-forward" size={24} color={TextColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.set}>
          <View style={[styles.item, { justifyContent: "space-between" }]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="account"
                size={30}
                color={TextColor}
              />
              <Text style={{ fontSize: 20, color: TextColor }}>
                Notification
              </Text>
            </View>
            <View>
              { isEnabled ? <MaterialIcons
                name="notifications-active"
                size={24}
                color="green"
              />: null
              }
            </View>
          </View>
          <TouchableOpacity style={styles.option}>
            <Text style={{ color: TextColor }}>Notification</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#767577" }}
              thumbColor={isEnabled ? "#3f4" : "#3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={TurnNotification}
              value={isEnabled}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// {color === "white" ? (
//   <TouchableOpacity onPress={changeColor}>
//     <View style={styles.Dark}>
//       <Text style={{ color: "white" }}>Dark</Text>
//     </View>
//   </TouchableOpacity>
// ) : (
//   <TouchableOpacity onPress={changeColor}>
//     <View style={styles.Light}>
//       <Text style={{ color: "black" }}>Dark</Text>
//     </View>
//   </TouchableOpacity>
// )}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusHeight,
  },
  Dark: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },
  Light: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  settings: {
    marginHorizontal: 10,
  },
  account: {
    // flex: 1,
    // backgroundColor: 'red'
  },
  set: {
    // flex: 1,
    // backgroundColor: 'blue'
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
});

export default Settings;
