import Colors from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const AppBar = () => {
  return (
    <View className="flex-row px-5 justify-between">
      <Text className="text-white text-[25px] font-bold">Search</Text>

      <MaterialIcons name="camera-alt" size={30} color={Colors.colors.white} />
    </View>
  );
};

export default AppBar;
