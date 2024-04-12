import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { globalStyles } from '../styles/global';
import { AntDesign } from "@expo/vector-icons";

const Counter = ({ handleSubtraction, count, setCount }) => {
  return (
    <View style={{...globalStyles.counter, flexDirection: "row" }}>
            <TouchableOpacity
              style={globalStyles.numberBox}
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
              style={globalStyles.numberBox}
              onPress={() => setCount(count + 1)}
            >
              <AntDesign name="plus" size={24} color="black" />
            </TouchableOpacity>
          </View>
  )
}

export default Counter