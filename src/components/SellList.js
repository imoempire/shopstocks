import React, { useState } from "react";
import {
  View,
  Animated,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Assest } from "./Data";

const width = Dimensions.get("window").width;

const SellList = ({ data, bgColor }) => {
  // Getting Id
  const renderId = data.map((item) => {
    return item.id;
  });
  // Getting Quantity
  const renderQuantity = data.map((item) => {
    return item.quantity;
  });
  // Getting cart
  const renderCart = data.map((item) => {
    return item.cart;
  });

  const getId = (id) => renderId.filter((item) => item === id);
  const getQuantity = (qun) => renderQuantity.filter((item) => item === qun);
  const getCart = (cart) => renderCart.filter((item) => item === cart);

  const [itemCart, setItemCart] = useState();
  const increaseItem = (quantity, id, cart) => {
    const qun = getQuantity(quantity);
    const ids = getId(id);
    const carts = getCart(cart);
    if (itemCart < quantity) {
      if (id === ids[0] && quantity === qun[0]) {
        console.log(carts[0]);
      }
    }else{
      console.log('error');
    }
  };

  const decreaseItem = (quantity, id) => {
    const qun = getQuantity(quantity);
    const ids = getId(id);
    if (itemCart > 0) {
      if (id === ids[0] && quantity === qun[0]) {
        setItemCart(itemCart - 1);
      }
    }
  };

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <>
              <View style={[styles.Tabs]}>
                <TouchableOpacity
                  style={[
                    styles.Tabs,
                    {
                      backgroundColor:
                        bgColor === "white" ? "white" : "#4E4D54",
                      borderRadius: 10,
                      padding: 10,
                    },
                  ]}
                >
                  <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={item.image}
                  />
                  <View style={styles.Info}>
                    <Text
                      style={{
                        color: bgColor !== "white" ? "white" : "black",
                        fontWeight: "700",
                      }}
                    >
                      {item.name}
                    </Text>
                    <View
                      style={{
                        justifyContent: "space-between",
                        flexDirection: "row",
                        marginVertical: 5,
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color: bgColor !== "white" ? "white" : "black",
                          opacity: 0.8,
                        }}
                      >
                        Quantity
                      </Text>
                      <View
                        style={{
                          backgroundColor:
                            bgColor === "white" ? "#6b5fc5" : "#f5a84b",
                          paddingHorizontal: 10,
                          borderRadius: 10,
                          height: 25,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: bgColor !== "white" ? "white" : "black",
                          }}
                        >
                          {item.quantity}
                        </Text>
                      </View>
                    </View>
                    {/* cart */}
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <TouchableOpacity
                            onPress={() =>
                              decreaseItem(item.quantity, item.id, item.cart)
                            }
                          >
                            <Ionicons
                              name="chevron-back-circle"
                              size={30}
                              color={bgColor === "white" ? "black" : "white"}
                            />
                          </TouchableOpacity>
                          <View style={{ marginHorizontal: 10 }}>
                            <Text
                              style={{
                                color: bgColor === "white" ? "black" : "white",
                                fontSize: 25,
                              }}
                            >
                              {item.cart === 0 ? 0 : getCart(item.cart)}
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() =>
                              increaseItem(item.quantity, item.id, item.cart)
                            }
                          >
                            <Ionicons
                              name="chevron-forward-circle"
                              size={30}
                              color={bgColor === "white" ? "black" : "white"}
                            />
                          </TouchableOpacity>
                        </View>
                        {/*  */}
                        <View style={{ marginHorizontal: 10 }}>
                          <TouchableOpacity
                            style={[
                              styles.add,
                              {
                                backgroundColor:
                                  bgColor === "white" ? "#6b5fc5" : "#f5a84b",
                              },
                            ]}
                          >
                            <Text style={{ color: "white" }}>Add To Chart</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          );
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Tab: {
    // flex: 1,
    // marginHorizontal: 10,
  },
  Tabs: {
    flexDirection: "row",
    marginVertical: 3,
  },
  Info: {
    marginHorizontal: 20,
    width: (width * 50) / 100,
  },
  add: {
    backgroundColor: "red",
    padding: 4,
    borderRadius: 10,
  },
});

export default SellList;
