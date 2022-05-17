import React, { useState, useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import { getStatusBarHeight } from "react-native-status-bar-height";
const statusHeight = getStatusBarHeight();
const width = Dimensions.get("window").width;
import { AssestContext } from "../Context/AssetContext";

const AddAssest = ({ navigation }) => {
  const {
    assest,
    setAssest,
    bgColor = "white",
    iconColor = "#6b5fc5",
  } = useContext(AssestContext);
  const [busy, setBusy] = useState(false);
  //   Form State
  const [assestInfo, setAssestInfo] = useState({
    name: "",
    quantity: "",
  });

  //   TextChange
  const textChange = (value, fieldName) => {
    setAssestInfo({ ...assestInfo, [fieldName]: value });
  };

  const { name, quantity } = assestInfo;
  const [image, setImage] = useState(null);

  const AddAssest = () => {
   
      const id = Math.random().toString();
      const newAssest = { id, name, quantity, image };
      setAssest([newAssest, ...assest]);
    navigation.replace("Tabs");
  };

  //  Image Picker

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const TextColor = bgColor === "white" ? "black" : "white";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: bgColor === "white" ? "white" : bgColor },
      ]}
    >
      <View style={{ marginVertical: 20, flexDirection: "row", marginHorizontal: 20 }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="ios-arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <View style={{ alignItems: "center", justifyContent: "center", left: 90 }}>
          <Text style={{ color: TextColor, fontWeight: "bold", fontSize: 20 }}>
            Add Assest
          </Text>
        </View>
      </View>

      <ScrollView style={styles.Box}>
        <View style={styles.form}>
          <TouchableOpacity
            style={{ marginHorizontal: 20, marginVertical: 10 }}
            onPress={pickImage}
          >
            <View>
              {image ? (
                <View>
                  <Image
                    imageStyle={{ borderRadius: 10 }}
                    style={{ width: "100%", height: 200, borderRadius: 10 }}
                    source={{ uri: image }}
                  />
                </View>
              ) : (
                <View
                  style={{
                    alignItems: "center",
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: iconColor,
                  }}
                >
                  <Ionicons
                    name="person-outline"
                    size={100}
                    color={iconColor}
                  />
                  <Text style={{ color: TextColor }}>Add a Profile Image</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>

          <View style={styles.formItem}>
            <Text style={[styles.formLabel, { color: TextColor }]}>
              Assest Name
            </Text>
            <TextInput
              style={[styles.formInput, { borderColor: iconColor }]}
              placeholder="Assest Name"
              placeholderTextColor={TextColor}
              value={name}
              onChangeText={(value) => textChange(value, "name")}
            />
          </View>

          <View style={styles.formItem}>
            <Text style={[styles.formLabel, { color: TextColor }]}>
              Quantity
            </Text>
            <TextInput
              keyboardType="numeric"
              style={[styles.formInput, { borderColor: iconColor }]}
              placeholder="Quantity in number"
              placeholderTextColor={TextColor}
              value={quantity}
              onChangeText={(value) => textChange(value, "quantity")}
            />
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <View
            style={[
              styles.btn,
              { backgroundColor: iconColor, marginVertical: 20 },
            ]}
          >
            <TouchableOpacity onPress={AddAssest}>
              <Text style={styles.btnText}>Add Assest</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusHeight,
  },
  Box: {
    // marginVertical: 100,
  },
  formItem: {
    marginHorizontal: 20,
  },
  formInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    paddingLeft: 10,
    color: "black",
  },
  opacity: {
    width: "100%",
    height: 50,
    borderColor: "blue",
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    paddingLeft: 10,
  },
  texts: {},
  edit: {
    alignItems: "center",
    padding: 9,
    left: 100,
    bottom: 100,
    borderWidth: 2,
    borderColor: "white",
    width: 160,
    backgroundColor: "grey",
    opacity: 0.5,
  },
  btn: {
    backgroundColor: "blue",
    width: (width * 30) / 100,
    height: (width * 10) / 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});

export default AddAssest;
