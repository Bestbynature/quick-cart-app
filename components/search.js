import { TextInput, StyleSheet, View,  } from 'react-native'
import { AntDesign } from "@expo/vector-icons";


const Search = ({searchQuery, setSearchQuery}) => {
  return (
    <View style={styles.searchbox}>
            <View
              style={{
                width: 60,
                height: "100%",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <AntDesign name="search1" size={18} color="#777" />
            </View>

            <TextInput
              style={styles.search}
              placeholder="search"
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
          </View>
  )
}

export default Search

const styles = StyleSheet.create({
  search: {
    fontSize: 16,
    flex: 1,
    height: "100%",
  },
  searchbox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 20,
    height: 50,
    gap: 10,
    marginHorizontal: 10,
  },
})