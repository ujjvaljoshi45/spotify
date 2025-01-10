import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import MainScreenPage from "@/components/MainScreenPage";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import PlaylistView from "@/components/PlaylistView";
const ShortButtons = () => {
  return (
    <View className="flex-row my-4 mx-2 items-center justify-evenly">
      {["Playlist", "Artists", "Albums", "Podcasts & Shows"].map((item) => (
        <View
          key={item}
          className=" mx-1 px-3 rounded-full py-2 border-white border-[1px] justify-center"
        >
          <Text className="text-white font-semibold text-[12px]">{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default ShortButtons;
