import { View, FlatList, Image, Text, Pressable } from "react-native";
import React from "react";
import "react-native-safe-area-context";
import { router } from "expo-router";

const recentlyPlayed = [
  {
    index: 0,
    image: require("@/assets/images/albums/barAlbum.png"),
    name: "1(Remastered)",
  },
  {
    index: 1,
    image: require("@/assets/images/albums/album4.png"),
    name: "Lana Del Rey",
  },
  {
    index: 2,
    image: require("@/assets/images/albums/album6.png"),
    name: "Marvin Gaye",
  },
  {
    index: 3,
    image: require("@/assets/images/albums/a1.png"),
    name: "Indie Pop",
  },
];
const RecentlyPlayed = () => {
  return (
    <FlatList
      horizontal
      data={recentlyPlayed}
      keyExtractor={(item) => item.name}
      renderItem={(item) => (
        <Pressable
          className="py-3 pr-4"
          onPress={() => {
            router.push("/home/playlist-info");
          }}
        >
          <Image
            source={item.item.image}
            className="h-[105px] w-[105px] py-1 pr-1"
          />
          <Text className="text-white font-semibold text-[13px] pl-1 pt-1">
            {item.item.name}
          </Text>
        </Pressable>
      )}
    />
  );
};

export default RecentlyPlayed;
