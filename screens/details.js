import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { detailsMenuList } from "../data/info";
import { useState } from "react";

const Details = ({ navigation, route }) => {
  const [count, setCount] = useState(1);

  const handleAddtoCart =  () => {
    const item = {
      count,
      name: route.params.name,
      alias: route.params.alias,
      amount: route.params.amount,
      image: route.params.image,
    };
  }


  const handleSubtraction = () => {
    if (count > 1) {
      setCount(count - 1);
    } else return;
  };

  return (
    <View style={styles.details}>
      <View>
        <Image
          source={route.params.image}
          style={{ width: "100%", height: 200 }}
        />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Entypo name="dot-single" size={24} color="red" />
          <Entypo name="dot-single" size={24} color="#aaa" />
          <Entypo name="dot-single" size={24} color="#aaa" />
        </View>
      </View>

      <ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>
            {route.params.name} ({route.params.alias})
          </Text>
          <Text style={globalStyles.price}>&#163;{route.params.amount}</Text>
        </View>
        <View style={styles.description}>
          <Text>
            {route.params.description.slice(0, 150)}...{" "}
            <Pressable style={styles.read}>
              <Text style={{ color: "red" }}>Read more</Text>
            </Pressable>
          </Text>
        </View>

        <View style={{ borderTopWidth: 1, marginTop: 50, borderColor: "#ccc" }}>
          {detailsMenuList.map((item) => (
            <View style={styles.chevron}>
              <Text>{item.item}</Text>
              <Entypo name="chevron-down" size={24} color="#555" />
            </View>
          ))}
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={styles.number}>
            <TouchableOpacity
              style={styles.numberBox}
              onPress={handleSubtraction}
            >
              <AntDesign
                name="minus"
                size={24}
                color={count > 1 ? "black" : "#eee"}
              />
            </TouchableOpacity>
            <Text>{count}</Text>
            <TouchableOpacity
              style={styles.numberBox}
              onPress={() => setCount(count + 1)}
            >
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20 }}>
            <Pressable
              style={styles.button1}
              onPress={handleAddtoCart}
            >
              <Text style={{ color: "white" }}>Add to cart</Text>
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
    marginTop: 20,
  },
  chevron: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  number: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numberBox: {
    borderWidth: 2,
    borderColor: "#eee",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 6,
  },
  button1: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  subscribe: {
    textAlign: "center",
    color: "red",
    marginTop: 10,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 25,
    padding: 10
  },
});
