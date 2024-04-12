import { View, StyleSheet, Image, Pressable, Text, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "./cart-context";
import { globalStyles } from "../styles/global";
import { useState } from "react";

const HomeItem = ({ item }) => {
  const [liked, setLiked] = useState(false);
  let result;

  const foodNamer = () => {
    const nameLength = item.name.length;
    result = {};
    if (nameLength > 12) {
      result["a"] = item.name.slice(0, 11);
    } else if (nameLength > 6 && nameLength <= 12) {
      result["a"] = item.name;
    } else if (nameLength < 6) {
      result["a"] = item.name;
      result["b"] = `${item.alias.slice(0, 3)}...`;
    }
    return result;
  };
  foodNamer();
  const { addToCart, cart } = useCart();

  const handleAddToCart = () => {
    const itemToAdd = {
      name: item.name,
      alias: item.alias,
      amount: item.amount,
      image: item.image,
      count: 1,
    };
    const existingItemIndex = cart.findIndex(
      (item) => item.alias === itemToAdd.alias
    );
    if (existingItemIndex !== -1) {
      Alert.alert("Item already in cart");
      return;
    }
    addToCart(itemToAdd);
    Alert.alert(`${itemToAdd.name} added to cart successfully`);
  };

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <View style={styles.listitem}>
      <View style={{ alignItems: "flex-end" }}>
        <Pressable onPress={toggleLiked}>
          {!liked && <AntDesign name="hearto" size={24} color="#4a4a4a" />}
          {liked && <AntDesign name="heart" size={24} color="#db3c25" />}
        </Pressable>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={item.image} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{ marginVertical: 10, fontSize: 10, ...globalStyles.regP2 }}
        >
          {result.a}{" "}
          <Text style={{ ...globalStyles.regP2 }}>
            {result.b ? ` (${result.b}` : ""}
          </Text>
        </Text>
        <Text style={{ color: "#db3c25", fontSize: 10 }}>
          &#163;{item.amount}
        </Text>
      </View>
      <Pressable onPress={handleAddToCart} style={styles.btn}>
        <FontAwesome name="shopping-bag" size={20} color="#fff" />
        <Text
          style={{
            color: "white",
            fontSize: 10,
            fontFamily: "poppins-regular",
            marginLeft: 5
          }}
        >
          Add to cart
        </Text>
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
    width: "100%",
    marginBottom: 10,
    flex: 1,
  },
  btn: {
    borderRadius: 20,
    backgroundColor: "#db3c25",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 10
  },
});
