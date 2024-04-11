import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { footerMenuList } from "../data/info";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const Footer = () => {

  const iconFinder = (group) => {
    switch (group) {
      case "AntDesign":
        return <AntDesign name="home" size={24} color="#666" />;
      case "Fontisto":
        return <Fontisto name="microsoft" size={24} color="#666" />;
      case "FontAwesome":
        return <FontAwesome name="shopping-bag" size={24} color="#666" />;
      case "MaterialIcons":
        return <MaterialIcons name="account-circle" size={24} color="#666" />;
      default:
        return null;
    }
  }

  return (
    // onPress={() =>
    //   navigation.navigate("Cart", { ...route.params, count })
    // }
    <View style={styles.footer}>
      {footerMenuList.map((item) => (
        // if(item.key === "cart"){

        // }
        <View key={item.key} style={{alignItems: "center"}}>
          {iconFinder(item.group)}
          <Text style={{fontSize: 12, marginTop: 5}}>{item.name}</Text>
        </View>
      ))}
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  }
})