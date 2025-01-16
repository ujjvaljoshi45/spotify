import React, { useState } from "react";
import { ScrollView, View, Image, SafeAreaView, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import MusicPlayer from "@/components/MusicPlayer";
import { PLAYLIST_DATA } from "@/constants/playlist-data";
import { LinearGradient } from "expo-linear-gradient";
import SongTile from "@/components/playlist-info/SongTile";
import InfoTile from "@/components/playlist-info/InfoTile";
import PlayListOptionsModal from "@/components/playlist-info/PlayListOptionsModal";

const PlaylistInfo = () => {
  const [showMusicOptionsModal, setMusicOptionsModalStatus] =
    useState<boolean>(false);
  return (
    <LinearGradient
      className="flex-1"
      colors={["#C63224", "#641D17", "#271513", "#121212"]}
    >
      <SafeAreaView />

      <ScrollView className="mx-4" showsVerticalScrollIndicator={false}>
        <MaterialIcons
          onPress={() => router.back()}
          name="arrow-back-ios-new"
          size={24}
          color="white"
        />

        <View className="justify-center items-center">
          <Image
            className="h-[230px] w-[230px]"
            source={require("@/assets/images/barAlbum.png")}
          />
        </View>
        <InfoTile />
        <View>
          <Modal
            visible={showMusicOptionsModal}
            onRequestClose={() => setMusicOptionsModalStatus(false)}
            animationType="slide"
            transparent={true}
          >
            <PlayListOptionsModal
              toggleModal={() => setMusicOptionsModalStatus(false)}
              isPlaylistModal={false}
            />
          </Modal>
          {PLAYLIST_DATA.map((track, index) => (
            <SongTile
              index={index}
              track={track}
              onTapMore={() => setMusicOptionsModalStatus(true)}
            />
          ))}
        </View>
      </ScrollView>

      <MusicPlayer />
      <SafeAreaView />
    </LinearGradient>
  );
};

export default PlaylistInfo;
