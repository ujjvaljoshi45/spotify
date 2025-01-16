import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

const SearchListTile = ({ item }: { item: any }) => {
  return (
    <Pressable
      className="flex-row py-2"
      onPress={() => {
        router.push("/home/playlist-info");
      }}
    >
      <Image source={item.item.image} className="h-[60px] w-[60px]" />
      <View className="justify-center ml-3">
        <Text className="text-white font-semibold py-0.5">
          {item.item.title}
        </Text>
        <Text className="text-white font-light py-0.5">
          {item.item.subtitle}
        </Text>
      </View>
    </Pressable>
  );
};

export default SearchListTile;
