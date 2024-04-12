import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Entypo } from "@expo/vector-icons";
import { detailsMenuList } from "../data/info";
import { useState } from "react";
import { useCart } from "../components/cart-context";
import Counter from "../components/counter";

const Details = ({ route }) => {
  const [count, setCount] = useState(1);

  const { addToCart, cart } = useCart();

  const handleAddToCart = () => {
    const itemToAdd = {
      count,
      name: route.params.name,
      alias: route.params.alias,
      amount: route.params.amount,
      image: route.params.image,
    };
    const existingItemIndex = cart.findIndex(
      (item) => item.alias === itemToAdd.alias
    );
    if (existingItemIndex !== -1) {
      Alert.alert("Item already in cart");
      return;
    }

    addToCart(itemToAdd);

    Alert.alert(
      `${count} counts of ${itemToAdd.name} added to cart successfully`
    );
  };

  const handleSubtraction = () => {
    if (count > 1) {
      setCount(count - 1);
    } else return;
  };

  const { description } = route.params;

  return (
    <View style={styles.details}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.imagebox}>
          <Image
            source={route.params.image}
            style={{ width: "90%", height: "90%" }}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Entypo name="dot-single" size={24} color="#db3c25" />
          <Entypo name="dot-single" size={24} color="#d9d9d9" />
          <Entypo name="dot-single" size={24} color="#d9d9d9" />
        </View>
      </View>

      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{...globalStyles.regp1, fontSize: 16, fontWeight: "bold"}}>
            {route.params.name} ({route.params.alias})
          </Text>
          <Text style={globalStyles.price}>&#163;{route.params.amount}</Text>
        </View>
        <View style={{...styles.description, ...globalStyles.regP2}}>
          <Text>
            {description.length > 150 ? `${description.slice(0, 150)} ...` : description }
              <Text style={{ color: "#db3c25" }}>Read more</Text>
          </Text>
        </View>

        <View style={{ borderTopWidth: 1, marginTop: 50, borderColor: "#ccc" }}>
          {detailsMenuList.map((item) => (
            <View style={styles.chevron} key={item.key}>
              <Text style={{fontSize: 14, fontWeight: "bold", ...globalStyles.regp1}}>{item.item}</Text>
              <Entypo name="chevron-down" size={24} color="#000" />
            </View>
          ))}
        </View>
        <View style={{ marginTop: 40 }}>
          <Counter
            handleSubtraction={handleSubtraction}
            count={count}
            setCount={setCount}
          />
          <View style={{ marginTop: 20 }}>
            <Pressable style={globalStyles.button1} onPress={handleAddToCart}>
              <Text style={{ color: "white", fontFamily: "poppins-regular" }}>Add to cart</Text>
            </Pressable>

            <TouchableOpacity>
              <Text style={styles.subscribe}>Subscribe to a plan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  details: {
    flex: 1,
    padding: 20,
  },
  description: {
    marginTop: 10,
  },
  chevron: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },

  subscribe: {
    textAlign: "center",
    color: "#db3c25",
    marginTop: 10,
    borderColor: "#db3c25",
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    fontFamily: "poppins-regular"
  },
  imagebox: {
    backgroundColor: "white",
    height: 250,
    width: 170,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }
});
