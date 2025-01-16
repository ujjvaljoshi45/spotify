import React from "react";
import { Text, View, Pressable, GestureResponderEvent } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
const SongTile = ({
  track,
  index,
  onTapMore,
}: {
  track: {
    artists: string[];
    name: string;
    isDownloaded: boolean;
  };
  onTapMore: (event: GestureResponderEvent) => void;
  index: any;
}) => {
  return (
    <Pressable className="my-[10px] flex-row justify-between" key={index}>
      <View key={index + 1}>
        <Text className="text-[16px] text-white">{track.name}</Text>
        <View className="flex-row items-center pt-1 gap-1">
          {track.isDownloaded ? (
            <Pressable className="mx-0.5 w-[15px] h-[15px] rounded-[30px] justify-center items-center bg-main">
              <AntDesign name="arrowdown" size={10} color="black" />
            </Pressable>
          ) : (
            <View />
          )}

          {track.artists.map((artist, idx) => (
            <Text key={idx} className="text-[16px] text-[#b5b3b3]">
              {artist}
            </Text>
          ))}
        </View>
      </View>
      <Pressable onPress={onTapMore}>
        <Entypo name="dots-three-horizontal" size={24} color="#B3B3B3" />
      </Pressable>
    </Pressable>
  );
};

export default SongTile;
