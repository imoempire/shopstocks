<View style={styles.circle}>
            {
              <FlatList
                // horizontal
                data={Assest}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <View style={{ marginVertical: 10, alignItems: "center" }}>
                      <View
                        style={[
                          styles.bar,
                          {
                            borderRadius: 10,
                            borderWidth: 1,
                            height: 40,
                            marginHorizontal: 0,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal: 2,
                            borderColor: TextColor
                          }
                        ]}
                      >
                          {/* One */}
                        <View
                          style={{
                            width: getWidth(item.quantity),
                            height: 35,
                            backgroundColor: item.color,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 10,
                          }}
                        >
                        </View>
                        {/* Two */}
                        <View
                          style={{
                            width: getHeight(item.quantity),
                            height: 30,
                            backgroundColor: bgColor,
                            justifyContent: "center",
                            alignItems: "center",
                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                          }}
                        >
                          <Text style={{color: TextColor}} >
                            {item.name} ({item.quantity})
                          </Text>
                        </View>
                        
                      </View>
                    </View>
                  );
                }}
              />
            }
          </View>

circle= {
    backgroundColor: "pink",
   width: width - 30,
   height: 400,
   marginHorizontal: 5,
   borderRadius: 20,
 }