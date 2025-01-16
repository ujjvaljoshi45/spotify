import { Entypo } from "@expo/vector-icons";
import { View, Pressable } from "react-native";

const PlayButton = () => {
  return (
    <View className="flex-row items-center gap-10">
      <Pressable className="w-[60px] h-[60px] rounded-[30px] justify-center items-center bg-main">
        <Entypo name="controller-play" size={30} />
      </Pressable>
    </View>
  );
};

export default PlayButton;
