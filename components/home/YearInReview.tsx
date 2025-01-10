import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import "react-native-safe-area-context";
import MainScreenPage from "@/components/MainScreenPage";
import Colors from "@/constants/Colors";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import YEAR_IN_REVIEW from "@/constants/year-in-review";
import EDITROS_PICK from "@/constants/home-data";
import ListView from "./ListVIew";

const YearInReview = () => {
  return (
    <View className="flex-nonepy-4">
      <ListView
        data={YEAR_IN_REVIEW}
        titleComponent={
          <View className="flex-row items-center mb-4">
            <Image
              source={require("@/assets/images/albums/cover.png")}
              className="w-[58px] h-[58px] mr-4"
            />
            <View className="justify-evenly items-start">
              <Text className="text-white text-[12px] font-light">
                #SPOTIFYWRAPPED
              </Text>
              <Text className="text-white font-bold text-[24px]">
                Your 2021 in review
              </Text>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default YearInReview;
