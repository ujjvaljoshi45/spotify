import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import MainScreenPage from "@/components/MainScreenPage";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const SearchScreen = () => {
  return (
    <MainScreenPage>
      <View className="flex-1 px-3.5 pt-2">
        <AppBar />
      </View>
    </MainScreenPage>
  );
};

export default SearchScreen;

const AppBar = () => {
  return (
    <View className="flex-row items-center">
      <MaterialIcons name="search" color={"#ffffff"} />
      <TextInput className="bg-dark2 flex-1 mx-2 rounded-[10px]" />
      <Pressable>
        <Text className="text-white font-bold text-[15px]">Cancel</Text>
      </Pressable>
    </View>
  );
};
