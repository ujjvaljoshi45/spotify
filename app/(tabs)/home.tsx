import { View, Text } from "react-native";
import React from "react";
import Scaffold from "@/components/Scaffold";
import "react-native-safe-area-context";
import MainScreenPage from "@/components/MainScreenPage";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeView = () => {
  return (
    <MainScreenPage>
      <View className="justify-center items-center flex-1">
        <Text className="text-white">Home</Text>
      </View>
    </MainScreenPage>
  );
};

export default HomeView;
