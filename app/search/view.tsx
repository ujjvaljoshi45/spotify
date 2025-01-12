import { View, Text, FlatList } from "react-native";
import React from "react";
import MainScreenPage from "@/components/MainScreenPage";

import SearchListTile from "@/components/search/SearchTile";
import SearchViewAppBar from "@/components/search/SearchViewAppBar";
import SEARCH_VIEW_DATA from "@/constants/search-view-data";

const SearchScreen = () => {
  return (
    <MainScreenPage>
      <View className="flex-1 px-3.5 pt-2">
        <SearchViewAppBar />
        <Text className="text-white my-4 ml-2 font-semibold text-[15px]">
          Recent searches
        </Text>
        <FlatList
          data={SEARCH_VIEW_DATA}
          renderItem={(item) => <SearchListTile item={item} />}
          keyExtractor={(item) => item.index.toString()}
        />
      </View>
    </MainScreenPage>
  );
};

export default SearchScreen;
