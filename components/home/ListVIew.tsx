import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";

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
          <Pressable
            className="mr-3"
            onPress={() => {
              router.push("/home/playlist-info");
            }}
          >
            <Image source={item.item.image} className="h-[153px] w-[153px]" />
            <Text
              className={
                customTextStyle ??
                "mt-1.5 text-white font-semibold text-[13.5px] w-[153px] "
              }
            >
              {item.item.name}
            </Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.index}
      />
    </>
  );
};

export default ListView;
