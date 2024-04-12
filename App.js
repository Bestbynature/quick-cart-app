import Home from "./screens/home";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./screens/details";
import Cart from "./screens/cart";
import { CartProvider } from "./components/cart-context";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={Home} options={{ title: "" }} />

          <Stack.Screen name="Details" component={Details} />

          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ title: "Cart" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.base}>
        <View style={{ borderBottomWidth: 5, width: "30%", borderRadius: 10 }}></View>
      </View>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  base: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    height: 30
  },
});
