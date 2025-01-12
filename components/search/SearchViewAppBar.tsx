import { View, Text, Pressable, TextInput } from "react-native";
import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import Colors from "@/constants/Colors";

const SearchViewAppBar = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  return (
    <View className="flex-row items-center">
      <View className="flex-row flex-1 py-1 rounded-[10px] pl-3 ml-1 mr-3 bg-dark1 items-center justify-center content-center">
        <MaterialIcons name="search" color={"#ffffff"} size={26} />
        <TextInput
          style={{
            color: Colors.colors.white,
            textDecorationColor: Colors.colors.white,
          }}
          className="flex-1 text-white ml-4 font-semibold"
          placeholder="Search"
          value={searchVal}
          onChangeText={setSearchVal}
        />
      </View>

      <Pressable
        className="flex-2"
        onPress={() => {
          router.back();
        }}
      >
        <Text className="text-white font-bold text-[15px]">Cancel</Text>
      </Pressable>
    </View>
  );
};

export default SearchViewAppBar;
