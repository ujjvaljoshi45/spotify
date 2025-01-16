import { View, Text, Image, FlatList, Pressable } from "react-native";
import React from "react";

import LIBRARY_DATA from "@/constants/library-data";
import { router } from "expo-router";
const PlaylistView = ({ isHorizontal }: { isHorizontal: boolean }) => {
  return (
    <FlatList
      horizontal={isHorizontal}
      data={LIBRARY_DATA}
      renderItem={(item) => (
        <Pressable
          className="flex-row items-center my-2 mr-5"
          onPress={() => {
            router.push("/home/playlist-info");
          }}
        >
          <Image
            source={item.item.image}
            className="h-[67px] w-[67px] rounded-[1px]"
          />
          <View className="ml-4">
            <Text className="text-white font-bold text-[15px]">
              {item.item.title}
            </Text>
            <View className="flex-row items-center mt-2">
              {item.item.isPinned ? (
                <Image
                  source={require("@/assets/images/generic/pin.png")}
                  className="h-[13px] w-[8px] mr-2"
                />
              ) : (
                <View />
              )}

              <Text className="text-dark2 text-[13px] font-semibold">
                {item.item.subTitle}
              </Text>
            </View>
          </View>
        </Pressable>
      )}
      keyExtractor={(item) => item.index.toString()}
    />
  );
};

export default PlaylistView;
