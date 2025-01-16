import {
  View,
  Text,
  Modal,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import {
  Feather,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const PlayListOptionsModal = ({
  toggleModal,
  isPlaylistModal,
}: {
  toggleModal: (event: GestureResponderEvent) => void;
  isPlaylistModal: boolean;
}) => {
  return (
    <View className="flex-1  bg-opacity-0">
      <View className="flex-1"></View>
      <View className=" bg-dark1 py-6">
        {(isPlaylistModal ? playlistFields : musicFields).map((item) => (
          <View className="flex-row  items-center mx-5 my-2">
            <View className="mr-4">{item.icon}</View>
            <Text className="text-white font-semibold text-[16px]">
              {item.title}
            </Text>
          </View>
        ))}
        <Pressable onPress={toggleModal} className="items-center">
          <Text className="text-white text-[16px]">Close</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PlayListOptionsModal;
const musicFields = [
  {
    icon: <Feather name="heart" color={Colors.colors.white} size={30} />,
    title: "Like",
  },
  {
    icon: (
      <MaterialIcons
        name="remove-circle-outline"
        color={Colors.colors.white}
        size={30}
      />
    ),
    title: "Hide Song",
  },

  {
    icon: <Feather name="share" color={Colors.colors.white} size={30} />,
    title: "Share",
  },

  {
    icon: <Feather name="music" color={Colors.colors.white} size={30} />,
    title: "Add To Playlist",
  },
  {
    icon: (
      <MaterialIcons name="queue-music" color={Colors.colors.white} size={30} />
    ),
    title: "Add To Queue",
  },
  {
    icon: <Feather name="radio" color={Colors.colors.white} size={30} />,
    title: "Go to Radio",
  },
  {
    icon: <MaterialIcons name="album" color={Colors.colors.white} size={30} />,
    title: "View Album",
  },
  {
    icon: (
      <MaterialIcons
        name="person-outline"
        color={Colors.colors.white}
        size={30}
      />
    ),
    title: "View Artist",
  },
  {
    icon: <Feather name="users" color={Colors.colors.white} size={30} />,
    title: "Song Credits",
  },
  {
    icon: <Ionicons name="moon" color={Colors.colors.white} size={30} />,
    title: "Sleep Timer",
  },
];
const playlistFields = [
  {
    icon: <Feather name="heart" color={Colors.colors.white} size={30} />,
    title: "Like",
  },
  {
    icon: (
      <MaterialIcons
        name="person-outline"
        color={Colors.colors.white}
        size={30}
      />
    ),
    title: "View Artist",
  },
  {
    icon: <Feather name="share" color={Colors.colors.white} size={30} />,
    title: "Share",
  },
  {
    icon: <Feather name="heart" color={Colors.colors.white} size={30} />,
    title: "Like All Songs",
  },
  {
    icon: <Feather name="music" color={Colors.colors.white} size={30} />,
    title: "Add To Playlist",
  },
  {
    icon: (
      <MaterialIcons name="queue-music" color={Colors.colors.white} size={30} />
    ),
    title: "Add To Queue",
  },
  {
    icon: <Feather name="radio" color={Colors.colors.white} size={30} />,
    title: "Go to Radio",
  },
];
