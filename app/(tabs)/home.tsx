import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import "react-native-safe-area-context";
import MainScreenPage from "@/components/MainScreenPage";
import Colors from "@/constants/Colors";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import EditorsPick from "@/components/home/EditorsPick";
import YearInReview from "@/components/home/YearInReview";
import PlaylistView from "@/components/PlaylistView";

const HomeView = () => {
  return (
    <MainScreenPage>
      <View className="flex-1 px-4">
        <SafeAreaView className="mb-2" />

        <ScrollView>
          <AppBar />
          <View className="mt-1 mb-2">
            <PlaylistView isHorizontal={true} />
          </View>
          <YearInReview />
          <EditorsPick />
          <EditorsPick />
          <YearInReview />
          <EditorsPick />
          <EditorsPick />
          <YearInReview />
          <EditorsPick />
          <EditorsPick />
        </ScrollView>
      </View>
    </MainScreenPage>
  );
};

export default HomeView;
const AppBar = () => {
  return (
    <View className="flex-row items-center">
      <Text className="text-white font-bold text-[16px] ">Recently played</Text>
      <View className="flex-1" />
      <View className="mx-1">
        <Ionicons
          name="notifications-outline"
          color={Colors.colors.white}
          size={24}
        />
      </View>
      <View className="mx-2">
        <FontAwesome6
          name="clock-rotate-left"
          color={Colors.colors.white}
          size={22}
        />
      </View>
      <View className="mx-2">
        <Ionicons
          name="settings-outline"
          color={Colors.colors.white}
          size={24}
        />
      </View>
    </View>
  );
};
