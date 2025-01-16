import { SafeAreaView } from "react-native";
import React from "react";

import MusicPlayer from "./MusicPlayer";
const MainScreenPage = ({ children }: { children: any }) => {
  return (
    <SafeAreaView className="flex-1 bg-dark">
      {children}
      <MusicPlayer />
    </SafeAreaView>
  );
};

export default MainScreenPage;
