import React, { useState } from "react";
import { Text, View, Pressable, Modal } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import PlayButton from "./PlayButton";
import { router } from "expo-router";
import PlayListOptionsModal from "./PlayListOptionsModal";
const InfoTile = () => {
  const [showPlaylistOptionsModal, setPlaylistOptionsModalStatus] =
    useState<boolean>(false);

  return (
    <View className="flex-row items-center mt-3">
      <Modal
        visible={showPlaylistOptionsModal}
        onRequestClose={() => setPlaylistOptionsModalStatus(false)}
        animationType="slide"
        transparent={true}
      >
        <PlayListOptionsModal
          toggleModal={() => setPlaylistOptionsModalStatus(false)}
          isPlaylistModal={false}
        />
      </Modal>
      <View className="flex-1">
        <Text className="my-1 text-[22px] font-bold text-white">
          1(Remastered)
        </Text>
        <View className="my-1 w-[350px] flex-row items-center flex-wrap gap-1">
          {[
            "Ariana Grande",
            "The Weeknd",
            "Taylor Swift",
            "Charlie Puth",
            "Selena Gomez",
          ].map((item, index) => (
            <Text
              className="text-[13px] font-normal text-[#909090]"
              key={index}
            >
              {item}
            </Text>
          ))}
        </View>
        <View className="flex-row my-1">
          <Pressable className="mr-1 w-[30px] h-[30px] rounded-[30px] justify-center items-center">
            <AntDesign name="hearto" size={20} color="#B3B3B3" />
          </Pressable>
          <Pressable className="mx-1 w-[30px] h-[30px] rounded-[30px] justify-center items-center bg-main">
            <AntDesign name="arrowdown" size={20} color="black" />
          </Pressable>
          <Pressable
            className="ml-1 w-[30px] h-[30px] rounded-[30px] justify-center items-center"
            onPress={() => {
              setPlaylistOptionsModalStatus(true);
              //   router.push("/home/(modal)/playlist-options");
            }}
          >
            <Entypo name="dots-three-horizontal" size={20} color="#B3B3B3" />
          </Pressable>
        </View>
      </View>
      <PlayButton />
    </View>
  );
};

export default InfoTile;
