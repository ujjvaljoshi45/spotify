import { View, Text } from "react-native";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
const AppBar = () => {
  return (
    <View className="flex-row items-center">
      <Text className="text-white font-bold text-[16px] ">Recently played</Text>
      <View className="flex-1" />
      <View className="mx-1">
        <Ionicons
          name="notifications-outline"
          color={Colors.colors.white}
          size={24}
        />
      </View>
      <View className="mx-2">
        <FontAwesome6
          name="clock-rotate-left"
          color={Colors.colors.white}
          size={22}
        />
      </View>
      <View className="mx-2">
        <Ionicons
          name="settings-outline"
          color={Colors.colors.white}
          size={24}
        />
      </View>
    </View>
  );
};

export default AppBar;
