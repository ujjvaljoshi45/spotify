import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
const { width } = Dimensions.get("window");
const itemWidth = width / 2 - 16; // Adjust for padding/margin

const allImages = [
  require("@/assets/images/albums/a1.png"),
  require("@/assets/images/albums/a2.png"),
  require("@/assets/images/albums/a3.png"),
  require("@/assets/images/albums/a4.png"),
  require("@/assets/images/albums/a5.png"),
  require("@/assets/images/albums/a6.png"),
  require("@/assets/images/albums/barAlbum.png"),
];

const CategoryTile = ({ myCategory }: { myCategory: any }) => {
  return (
    <View className="mt-4 mx-4">
      <Text className="text-white mb-3 font-bold text-[16px]">
        {myCategory.name}
      </Text>
      <View className="flex-row flex-wrap justify-between">
        {myCategory.items.map((item: any, index: number) => (
          <View
            key={index}
            className="pl-2 pt-2 rounded-lg mx-1 mb-4 justify-start items-start content-start"
            style={{
              width: itemWidth - 10,
              backgroundColor: item.color,
            }}
          >
            <Text className="text-white font-bold text-[15px] text-start">
              {item.name}
            </Text>
            <View className="w-[67.33px] self-end overflow-hidden pt-2 rounded-lg shadow-md pl-5 ">
              <Image
                source={
                  allImages[
                    Math.floor(Math.random() * (allImages.length - 1 - 0)) + 0
                  ]
                }
                className=" h-[67.33px] w-[67.33px] origin-center rotate-[20deg]"
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default CategoryTile;
