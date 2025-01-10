import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { Icon, ProgressBar } from "react-native-paper";
import Colors from "@/constants/Colors";
const MainScreenPage = ({ children }: { children: any }) => {
  const edgeVal = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-dark">
      {children}
      <MusicPlayerC />
    </View>
  );
};

export default MainScreenPage;

const MusicPlayerC = () => {
  return (
    <View className="h-[60px] bg-mainZ justify-center px-3 pt-2 mb-2  shadow-dark1 shadow-inner">
      <View className="flex-1" />
      <View className="flex-row items-center ">
        <Image
          source={require("@/assets/images/albums/barAlbum.png")}
          className="bg-dark h-[37px] w-[37px] rounded-[6.5px]"
        />

        <View className="flex-1 mx-2">
          <View className="flex-1">
            <View className="flex-row">
              <Text className="text-white font-bold text-[14px]">
                From Me to You - Mono
              </Text>
              <Text className="text-white font-bold text-[14px]">· </Text>
              <Text className="text-dark2 font-bold text-[14px]">The B</Text>
            </View>
          </View>
          <View className="flex-row items-center">
            <Icon source="bluetooth" size={15} color={Colors.colors.main} />
            <Text className="ml-1 text-main text-[12px]">BEATSPILL+</Text>
          </View>
        </View>
        <Pressable>
          <Icon source="bluetooth" size={25} color={Colors.colors.main} />
        </Pressable>
        <Pressable>
          <Icon source="pause" size={25} color={Colors.colors.white} />
        </Pressable>
      </View>
      <View className="flex-auto"></View>
      <View className="mt-2 ">
        <ProgressBar color={Colors.colors.dark2} progress={50} />
      </View>
    </View>
  );
};
