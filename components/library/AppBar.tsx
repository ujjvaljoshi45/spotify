import { View, Text, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
const AppBar = () => {
  return (
    <View className="flex-row px-4 mt-2  items-center justify-center">
      <Image
        source={require("@/assets/images/pf.png")}
        resizeMode="stretch"
        className="w-[37px] h-[37px]"
      />
      <Text className="ml-3 text-white font-bold text-[24px]">
        Your Profile
      </Text>
      <View className="flex-1"></View>
      <MaterialIcons name={"add"} color={Colors.colors.dark2} size={35} />
    </View>
  );
};

export default AppBar;
