import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import { foodMenuList } from "../data/info";
import HomeItem from "../components/home-item";
import Footer from "../components/footer";
import { useState } from "react";
import Search from "../components/search";

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFoodMenuList = foodMenuList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.alias.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <Text style={{...styles.menu, ...globalStyles.regp1}}>Menu</Text>

        <View style={styles.body}>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          <ScrollView>
            <View style={styles.list}>
              {filteredFoodMenuList.map((item) => (
                <TouchableOpacity
                  key={item.key}
                  onPress={() => navigation.navigate("Details", item)}
                >
                  <HomeItem item={item} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
        <Footer navigation={navigation} cart={false} home={true} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;

const styles = StyleSheet.create({
  menu: {
    fontSize: 15,
    padding: 10,
    textAlign: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    color: "#151515"

  },
  body: {
    padding: 10,
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    flex: 1,
    columnGap: 10,
  },
});
