import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import dateFormat from "dateformat";

//

// Icons
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { AssestContext } from "../Context/AssetContext";
import { Assest } from "../components/Data";
import List from "../components/List";

const statusHeight = getStatusBarHeight();
const width = Dimensions.get("window").width;

const Home = ({ navigation }) => {
  const {
    assest,
    setAssest,
    bgColor = "white",
    iconColor = "#6b5fc5",
  } = useContext(AssestContext);

  const [index, setIndex] = useState(6);
  const ItemsToRender = Assest.slice(0, index);

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.search}>
        <View style={[styles.searchTab, {backgroundColor: bgColor === "white" ? 'white' : '#4E4D54', borderWidth: bgColor === "white" ? 1 : null}]}>
          <View style={{ marginHorizontal: 20 }}>
            <FontAwesome name="search" size={20} color="black" />
          </View>
          <View>
            <TextInput placeholder="Search..." />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Add")}
          style={{
            backgroundColor: iconColor,
            borderRadius: 20,
            width: 35,
            height: 35,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.Tab}>
        {bgColor === "white" ? (
          <Text style={{ fontWeight: "700", fontSize: 30, color: "black" }}>
            Assest
          </Text>
        ) : (
          <Text style={{ fontWeight: "700", fontSize: 30, color: "white" }}>
            Assest
          </Text>
        )}
        <View>
          {assest.length !== 0 ? (
            <List data={assest} bgColor={bgColor}/>
          ) : (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              {bgColor === "white" ? (
                <Text style={{ color: "black" }}>No Assest</Text>
              ) : (
                <Text style={{ color: "white" }}>No Assest</Text>
              )}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusHeight,
  },
  search: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  searchTab: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "center",
    padding: 5,
    width: width - 100,
  },
  Tab: {
    flex: 1,
    marginHorizontal: 10,
  },
  Tabs: {
    flexDirection: "row",
    marginVertical: 3,
  },
  Info: {
    marginHorizontal: 20,
    width: (width * 50) / 100,
  },
});

export default Home;
