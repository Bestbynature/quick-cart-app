import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { footerMenuList } from "../data/info";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Footer = ({ navigation, cart, home }) => {
  const iconFinder = (group, cart) => {
    switch (group) {
      case "AntDesign":
        return <AntDesign name="home" size={24} color="#858585" />;
      case "Fontisto":
        return <Fontisto name="microsoft" size={24} color={home? "#db3c25" : "#858585"} />;
      case "FontAwesome":
        return <FontAwesome name="shopping-bag" size={24} color={cart? "#db3c25" : "#858585"} />;
      case "MaterialIcons":
        return <MaterialIcons name="account-circle" size={24} color="#858585" />;
      default:
        return null;
    }
  };

  return (
    
    <View style={styles.footer}>
      {footerMenuList.map((item) => (
        <TouchableOpacity onPress={()=>navigation.navigate(`${item.name}`)} key={item.key}>
          <View style={{ alignItems: "center" }}>
            {iconFinder(item.group, cart)}
            <Text style={{ fontSize: 12, marginTop: 5, color: "#858585", fontFamily: "poppins-regular" }}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
});
