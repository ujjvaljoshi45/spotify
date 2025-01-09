import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainScreenPage from "@/components/MainScreenPage";
import { MaterialIcons } from "@expo/vector-icons";
import { Divider, TextInput } from "react-native-paper";
import Colors from "@/constants/Colors";

const searchData = [
  {
    category: {
      name: "You top genres",
      items: [
        {
          name: "Pop",
          color: "#9854B2",
        },
        {
          name: "Indie",
          color: "#678026",
        },
      ],
    },
  },
  {
    category: {
      name: "Popular podcast categories",
      items: [
        {
          name: "News & Politics",
          color: "#3371E4",
        },
        {
          name: "Comedy",
          color: "#CF4321",
        },
      ],
    },
  },
  {
    category: {
      name: "Browse all",
      items: [
        {
          name: "2024 Wrapped",
          color: "#ABBB6D",
        },
        {
          name: "Podcasts",
          color: "#223160",
        },
        {
          name: "Made for you",
          color: "#75A768",
        },
        {
          name: "Charts",
          color: "#8768A7",
        },
      ],
    },
  },
];

const SearchView = () => {
  return (
    <MainScreenPage>
      <SafeAreaView />
      <AppBar />
      <TextInput
        className="rounded-[7px] mt-5 mx-5 font-semibold"
        placeholder="Artists, songs, or podcasts"
        left={
          <MaterialIcons
            name="search"
            color={Colors.colors.dark1}
            className="text-dark"
          />
        }
      />
      <View className="flex-1" />
    </MainScreenPage>
  );
};

export default SearchView;

function AppBar() {
  return (
    <View className="flex-row px-5 justify-between">
      <Text className="text-white text-[25px] font-bold">Search</Text>

      <MaterialIcons name="camera-alt" size={30} color={Colors.colors.white} />
    </View>
  );
}
