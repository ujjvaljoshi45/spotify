import { View, SafeAreaView, ScrollView, FlatList } from "react-native";
import React from "react";
import "react-native-safe-area-context";
import MainScreenPage from "@/components/MainScreenPage";

import EditorsPick from "@/components/home/EditorsPick";
import YearInReview from "@/components/home/YearInReview";
import AppBar from "@/components/home/AppBar";
import RecentlyPlayed from "@/components/home/RecentlyPlayed";

const HomeView = () => {
  return (
    <MainScreenPage>
      <View className="flex-1 px-4">
        <ScrollView>
          <AppBar />
          <RecentlyPlayed />
          <View className="mt-1 mb-2"></View>
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
