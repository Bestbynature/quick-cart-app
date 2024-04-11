import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";
import { foodMenuList } from "../data/info";

import HomeItem from "../components/home-item";
import Footer from "../components/footer";
import { useState } from "react";

const Home = ({ navigation }) => {

  const [cart, setCart] = useState([]);

  
 
  return (
    <View style={globalStyles.container}>
      <Text style={styles.menu}>Menu</Text>

      <View style={styles.body}>
        <TextInput style={styles.search} placeholder="search" />

        <ScrollView>
          <View style={styles.list}>
            {foodMenuList.map((item) => (
              <TouchableOpacity key={item.key} onPress={()=>navigation.navigate("Details", item)}>
                <HomeItem item={item} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* footer start */}
      <Footer />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  menu: {
    fontSize: 15,
    padding: 20,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  body: {
    padding: 20,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  search: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 12,
    borderRadius: 6,
    marginBottom: 20,
  },

  list: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    justifyContent: "space-around",
    flex: 1,
  },
});
