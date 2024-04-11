import { View, StyleSheet, Image, Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const HomeItem = ({ item }) => {
  const addtoCart = () => {
    const item = {
      name: item.name,
      alias: item.alias,
      amount: item.amount,
      image: item.image,
    }
  };
  return (
    <View style={styles.listitem} >
      <View style={{ alignItems: "flex-end" }}>
        <AntDesign name="hearto" size={24} color="#ccc" />
      </View>
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Image source={item.image} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ marginVertical: 10, fontSize: 12 }}>
          {item.name.length > 11 ? `${item.name.slice(0, 11)}...` : item.name}
        </Text>
        <Text style={{ color: "red" }}>&#163;{item.amount}</Text>
      </View>
      <Pressable onPress={addtoCart} style={styles.btn}>
        <FontAwesome name="shopping-bag" size={15} color="#fff" />
        <Text style={{ color: "white" }}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

export default HomeItem;

const styles = StyleSheet.create({
  listitem: {
    backgroundColor: "white",
    borderRadius: 6,
    padding: 15,
    flexBasis: "48%",
  },
  btn: {
    borderRadius: 20,
    backgroundColor: "coral",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
});
