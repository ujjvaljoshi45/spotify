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

const ListView = ({
  titleComponent,
  data,
  customTextStyle,
}: {
  titleComponent: any;
  data: any;
  customTextStyle?: string | undefined;
}) => {
  return (
    <>
      {titleComponent}
      <FlatList
        className="flex-none"
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={(item) => (
          <View className="mr-3">
            <Image source={item.item.image} className="h-[153px] w-[153px]" />
            <Text
              className={
                customTextStyle ??
                "mt-1.5 text-white font-semibold text-[13.5px] w-[153px] "
              }
            >
              {item.item.name}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.index}
      />
    </>
  );
};

export default ListView;
