import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const AuthAppBar = ({
  handelBack,
  title,
}: {
  handelBack: (event: GestureResponderEvent) => void;
  title: string;
}) => {
  return (
    <Pressable onPress={handelBack}>
      <View className="flex-row justify-between items-center mx-5 my-2">
        <AntDesign name="left" color={"#ffffff"} size={24} />
        <Text className="text-white font-bold text-[18px] font-rmonoBold">
          {title}
        </Text>
        <AntDesign name="left" color={"#000000"} size={24} />
      </View>
    </Pressable>
  );
};
export default AuthAppBar;
