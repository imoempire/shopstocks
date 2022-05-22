import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, Dimensions, FlatList } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { AssestContext } from "../Context/AssetContext";

import { Assest } from "../components/Data";
import SellList from "../components/SellList";
const width = Dimensions.get("window").width;
const statusHeight = getStatusBarHeight();
const Sales = () => {
  const { assest, setAssest, bgColor = "white" } = useContext(AssestContext);
 
  //   const [width, setWidth] = useState();
  const renderAssest = Assest.map((item) => {
    return item.quantity;
  });
  // const lastItem = Assest.slice(-1);
  const ItemsToRender = Assest.slice(0, -1);

  // Total Assest
  const num = renderAssest;
  let numOr0 = (n) => (isNaN(n) ? 0 : n);
  const Total = num.reduce((a, b) => numOr0(a) + numOr0(b));
  const barWidth = Math.floor(width);

  const getWidth = (quantity) => {
    const rest = Total - quantity;
    const bar = Total - rest;
    return bar;
  };

  const TextColor = bgColor === "white" ? "black" : "white";


  const getHeight = (quantity) => {
    const rest = Total - quantity;
    return rest;
  };
    console.log(getHeight(40), Total, getWidth(40));

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={{marginVertical: 10}}>
      <Text style={{color: TextColor, fontSize: 20, fontWeight: 'bold'}}>Sales Chart</Text>
      </View>
      <View style={styles.chart}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <Text style={{ fontSize: 20, color: TextColor }}> All Asset</Text>
        <Text style={{ fontSize: 20, color: TextColor }}>Total: {Total} </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <View style={styles.circle}>
           <SellList data={ItemsToRender} bgColor={bgColor} />
          </View>
          <View style={styles.Colors}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusHeight,
    alignItems: "center",
    backgroundColor: "blue",
  },
  chart: {
    width: width - 20,
    height: 600,
    marginVertical: 5,
    marginHorizontal: 20,
    justifyContent: "center",
    //  flexDirection: 'row'
  },
  circle: {
    width: width - 30,
    height: 400,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  bar: {
    height: 50,
    //  justifyContent: "center",
  },
  Colors: {
    backgroundColor: "yellow",
    width: width - 30,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 20,
    top: 10,
  },
});

export default Sales;
