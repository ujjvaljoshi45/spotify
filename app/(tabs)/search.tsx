import { View, Text, SafeAreaView, FlatList, Pressable } from "react-native";
import React from "react";
import MainScreenPage from "@/components/MainScreenPage";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import SEARCH_DATA from "@/constants/search-data";
import CategoryTile from "@/components/search/CategoryTile";
import AppBar from "@/components/search/AppBar";
import { useRouter } from "expo-router";

const SearchView = () => {
  const router = useRouter();
  return (
    <MainScreenPage>
      <AppBar />
      <Pressable
        className="flex-row bg-white items-center rounded-[7px] my-5 mx-5 py-2"
        onPress={() => {
          router.push("/search/view");
        }}
      >
        <View className="mx-2">
          <MaterialIcons name="search" size={23} color={Colors.colors.dark1} />
        </View>
        <Text className="text-[13px] font-semibold text-dark1">
          Artists, songs, or podcasts
        </Text>
      </Pressable>
      <View className="flex-1">
        <FlatList
          data={SEARCH_DATA}
          renderItem={(item) => (
            <CategoryTile myCategory={item.item.category} />
          )}
          keyExtractor={(item) => item.category.name}
        />
      </View>
    </MainScreenPage>
  );
};

export default SearchView;
