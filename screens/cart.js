import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { globalStyles } from "../styles/global";
import { useCart } from "../components/cart-context";
import { AntDesign } from "@expo/vector-icons";
import Footer from "../components/footer";

const Cart = ({ navigation }) => {
  const { cart, incrementItemCount, decrementItemCount, deleteCartItem } =
    useCart();

  const TotalAmount = cart.reduce(
    (acc, item) => acc + item.amount * item.count,
    0
  );

  return (
    <View style={globalStyles.container}>
      {cart && cart.length > 0 ? (
        <>
          <ScrollView style={{ padding: 10 }}>
            {cart.map((item) => (
              <View key={item.alias} style={styles.cartItem}>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    width: 90,
                    alignItems: "center",
                  }}
                >
                  <Image source={item.image} />
                </View>
                <View style={{ gap: 8, flex: 1, paddingHorizontal: 10 }}>
                  <Text style={{ color: "#555" }}>{item.name}</Text>
                  <Text style={globalStyles.price}>&#163;{item.amount}</Text>
                  <Pressable onPress={() => deleteCartItem(item.alias)}>
                    <AntDesign name="delete" size={24} color="#555" />
                  </Pressable>
                </View>
                <View
                  style={{
                    ...globalStyles.counter,
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <TouchableOpacity
                    style={styles.numberBox}
                    onPress={() => decrementItemCount(item.alias)}
                  >
                    <AntDesign
                      name="minus"
                      size={15}
                      color={item.count > 1 ? "black" : "#eee"}
                    />
                  </TouchableOpacity>
                  <Text>{item.count}</Text>
                  <TouchableOpacity
                    style={styles.numberBox}
                    onPress={() => incrementItemCount(item.alias)}
                  >
                    <AntDesign name="plus" size={15} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.checkinfo}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>
                Total {cart.length} {cart.length === 1 ? "item" : "items"}
              </Text>
              <Text>
                &#163;
                {TotalAmount}
              </Text>
            </View>
            <Pressable style={{ ...globalStyles.button1, marginBottom: 20 }}>
              <Text style={{ color: "white" }}>
                Checkout - &#163;{TotalAmount}
              </Text>
            </Pressable>
          </View>
          <Footer navigation={navigation} cart={true} home={false} />
        </>
      ) : (
        <View style={styles.empty}>
          <AntDesign name="shoppingcart" size={72} color="#db3c25" />
          <Text style={styles.emptyText}>Your cart is empty. Please add some items to the cart.</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderColor: "#ccc",
  },
  numberBox: {
    borderWidth: 2,
    borderColor: "#eee",
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 6,
  },
  checkinfo: {
    padding: 10,
  },
  empty: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 15,
    
  },
  emptyText: {
    marginTop: 20,
    fontFamily: "poppins-regular",
    fontSize: 25,
    color: "#db3c25",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 40
  }
});
