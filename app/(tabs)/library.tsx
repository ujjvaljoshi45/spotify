import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import MainScreenPage from "@/components/MainScreenPage";
import PlaylistView from "@/components/PlaylistView";
import AppBar from "@/components/library/AppBar";
import ShortButtons from "@/components/library/ShortButtons";
const LibraryView = () => {
  return (
    <MainScreenPage>
      <AppBar />
      <ShortButtons />
      <View className="flex-row mx-4 items-center ">
        <Image
          source={require("@/assets/images/albums/arrows.png")}
          resizeMode="contain"
          className="h-[24px] w-[24px]"
        />
        <Text className="ml-2 text-white text-[14px] font-bold">
          Recently played
        </Text>
        <View className="flex-1"></View>
        <Image
          source={require("@/assets/images/albums/selection.png")}
          resizeMode="contain"
          className="h-[20px] w-[20px]"
        />
      </View>
      <View className="flex-1 mx-3 mt-4 ">
        <PlaylistView isHorizontal={false} />
      </View>
    </MainScreenPage>
  );
};

export default LibraryView;
