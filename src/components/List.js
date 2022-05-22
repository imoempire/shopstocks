import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image, Text, ScrollView} from 'react-native';
import dateFormat from "dateformat";


const width = Dimensions.get("window").width;

const List = ({data, bgColor}) => {

   return (
      <>
         <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => {
                return (
                    <>
                  <Animated.View style={[styles.Tabs]}>
                    <TouchableOpacity
                      style={[
                        styles.Tabs,
                        {
                          backgroundColor:
                            bgColor === "white" ? 'white' : "#4E4D54",
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
                        <Text style={{color: bgColor !== "white" ? 'white' : 'black', fontWeight: '700'}}>{item.name}</Text>
                        <View
                          style={{
                            justifyContent: "space-between",
                            flexDirection: "row",
                            marginVertical: 5,
                            alignItems: "center",
                          }}
                        >
                          <Text style={{color: bgColor !== "white" ? 'white' : 'black', opacity: .8}}>Quantity</Text>
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
                            <Text style={{color: bgColor !== "white" ? 'white' : 'black'}}>
                              {item.quantity}
                            </Text>
                          </View>
                        </View>
                        <Text style={{color: bgColor !== "white" ? 'white' : 'black',opacity: .8}}>{dateFormat(item.date, "default")}</Text>
                      </View>
                    </TouchableOpacity>
                  </Animated.View>
                  </>
                );
              }}
            />
      </>
   );
}

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
})

export default List;
