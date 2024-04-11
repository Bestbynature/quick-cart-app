import Home from "./screens/home";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./screens/details";
import Cart from "./screens/cart";

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ title: "Cart" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
