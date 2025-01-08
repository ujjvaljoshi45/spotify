import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Saffold from "@/components/Saffold";
import icon from "@/assets/images/adaptive-icon.png";
import google from "@/assets/images/google.png";
import facebook from "@/assets/images/facebook.png";
import apple from "@/assets/images/apple.png";
const App = () => {
  const socialsLogins = {
    google: {
      name: "Continue with Google",
      icon: google,
    },
    facebook: {
      name: "Continue with Facebook",
      icon: facebook,
    },
    apple: {
      name: "Continue with Apple",
      icon: apple,
    },
  };
  return (
    <Saffold appBar={undefined} overrideClass={undefined}>
      <View className="flex-1 bg-black justify-center items-center">
        <Image className="justify-center h-[53] w-[53]" source={icon} />
        <Text className="text-white font-rmonoBold font-bold text-[24px] text-center pt-2">
          Millions of Songs. {"\n"}Free on Spotify.
        </Text>
        <Pressable>
          <View className="w-72 h-10 rounded-full mt-5 justify-center  bg-green-500">
            <Text className="text-black font-rmonoBold font-bold text-center text-[16]">
              Sign up free
            </Text>
          </View>
        </Pressable>
      </View>
    </Saffold>
  );
};

export default App;
