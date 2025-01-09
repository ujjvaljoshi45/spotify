import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import MainScreenPage from "@/components/MainScreenPage";

import { MaterialIcons } from "@expo/vector-icons";

import Colors from "@/constants/Colors";
import pf from "@/assets/images/pf.png";
import arrows from "@/assets/images/albums/arrows.png";
import selection from "@/assets/images/albums/selection.png";

const LibraryView = () => {
  return (
    <MainScreenPage>
      {/* App Bar */}
      <AppBar />
      <ShortButtons />
      <View className="flex-row mx-4 items-center ">
        <Image
          source={arrows}
          resizeMode="contain"
          className="h-[24px] w-[24px]"
        />
        <Text className="ml-2 text-white text-[14px] font-bold">
          Recently played
        </Text>
        <View className="flex-1"></View>
        <Image
          source={selection}
          resizeMode="contain"
          className="h-[20px] w-[20px]"
        />
      </View>
      <PlaylistView />
    </MainScreenPage>
  );
};

export default LibraryView;

const AppBar = () => {
  return (
    <View className="flex-row px-4 mt-2  items-center justify-center">
      <Image source={pf} resizeMode="stretch" className="w-[37px] h-[37px]" />
      <Text className="ml-3 text-white font-bold text-[24px]">
        Your Profile
      </Text>
      <View className="flex-1"></View>
      <MaterialIcons name={"add"} color={Colors.colors.dark2} size={35} />
    </View>
  );
};

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

function PlaylistView() {
  const data = [
    {
      index: 0,
      image: require("@/assets/images/albums/album1.png"),
      title: "Liked Songs",
      subTitle: "Playlist · 58 songs",
      isPinned: true,
    },
    {
      index: 1,
      image: require("@/assets/images/albums/album2.png"),
      title: "New Episodes",
      subTitle: "Updated 2 days ago",
      isPinned: false,
    },
    {
      index: 2,
      image: require("@/assets/images/albums/album3.png"),
      title: "Lolo Zouaï",
      subTitle: "Artist",
      isPinned: false,
    },
    {
      index: 3,
      image: require("@/assets/images/albums/album4.png"),
      title: "Lana Del Rey",
      subTitle: "Artist",
      isPinned: false,
    },
    {
      index: 4,
      image: require("@/assets/images/albums/album5.png"),
      title: "Front Left",
      subTitle: "Playlist · Spotify",
      isPinned: false,
    },
    {
      index: 5,
      image: require("@/assets/images/albums/album6.png"),
      title: "Marvin Gaye",
      subTitle: "Artist",
      isPinned: false,
    },
    {
      index: 6,
      image: require("@/assets/images/albums/album7.png"),
      title: "Les",
      subTitle: "Song · Childish Gambino",
      isPinned: false,
    },
  ];
  return (
    <View className="flex-1 mx-3 mt-4 ">
      <FlatList
        data={data}
        renderItem={(item) => (
          <View className="flex-row items-center my-2">
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
          </View>
        )}
        keyExtractor={(item) => item.index.toString()}
      />
    </View>
  );
}
