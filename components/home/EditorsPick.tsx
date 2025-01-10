import { View, Text } from "react-native";
import React from "react";
import "react-native-safe-area-context";
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
        customTextStyle="text-dark2 font-semibold text-[13px] w-[153px] pt-2"
      />
    </View>
  );
};

export default EditorsPick;
