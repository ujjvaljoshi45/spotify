import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import MainScreenPage from "@/components/MainScreenPage";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
const { width } = Dimensions.get("window");
const itemWidth = width / 2 - 16; // Adjust for padding/margin
import SEARCH_DATA from "@/constants/search-data";

const SearchView = () => {
  return (
    <MainScreenPage>
      <SafeAreaView />
      <AppBar />
      <Pressable
        className="flex-row bg-white items-center rounded-[7px] my-5 mx-5 py-2"
        onPress={() => console.log("Search")}
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

function AppBar() {
  return (
    <View className="flex-row px-5 justify-between">
      <Text className="text-white text-[25px] font-bold">Search</Text>

      <MaterialIcons name="camera-alt" size={30} color={Colors.colors.white} />
    </View>
  );
}

const CategoryTile = ({ myCategory }: { myCategory: any }) => {
  return (
    <View className="flex-1 mt-4 mx-4">
      <Text className="text-white mb-3 font-bold text-[16px]">
        {myCategory.name}
      </Text>
      <View className="flex flex-row flex-wrap justify-between">
        {myCategory.items.map((item: any, index: number) => (
          <View
            className="pl-2 pt-2 rounded-[8px] mx-1 mb-[16px] justify-start items-start content-start"
            key={index}
            style={{
              width: itemWidth - 10,
              backgroundColor: item.color,
            }}
          >
            <Text className="text-white font-bold text-[15px] text-start mb-5">
              {item.name}
            </Text>
            <View className="self-end bg-clip-content">
              <Image
                source={require("@/assets/images/albums/album1.png")}
                className="shadow-xl shadow-dark h-[67.33px] w-[67.33px] origin-center rotate-45 bg-clip-content"
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};
