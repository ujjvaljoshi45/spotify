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
const EditorsPick = () => {
  return (
    <View className="flex-none py-4">
      <ListView
        data={EDITROS_PICK}
        titleComponent={
          <Text className="text-white font-bold text-[22px] mb-3">
            Editor's Pick
          </Text>
        }
        customTextStyle="text-dark2 font-semibold text-[13px] w-[153px]"
      />
    </View>
  );
};

export default EditorsPick;
