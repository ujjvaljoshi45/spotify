import { View, Text } from "react-native";
import React from "react";
import Scaffold from "@/components/Scaffold";
import { SafeAreaView } from "react-native-safe-area-context";
import MainScreenPage from "@/components/MainScreenPage";

const SearchView = () => {
  return (
    <MainScreenPage>
      <View className="justify-center items-center flex-1">
        <Text className="text-white">Search</Text>
      </View>
    </MainScreenPage>
  );
};

export default SearchView;
