import { View, Text, Image } from "react-native";
import React from "react";

const SearchListTile = ({ item }: { item: any }) => {
  return (
    <View className="flex-row py-2">
      <Image source={item.item.image} className="h-[60px] w-[60px]" />
      <View className="justify-center ml-3">
        <Text className="text-white font-semibold py-0.5">
          {item.item.title}
        </Text>
        <Text className="text-white font-light py-0.5">
          {item.item.subtitle}
        </Text>
      </View>
    </View>
  );
};

export default SearchListTile;
