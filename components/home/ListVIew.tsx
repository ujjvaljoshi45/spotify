import { View, Text, FlatList, Image } from "react-native";
import React from "react";

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
