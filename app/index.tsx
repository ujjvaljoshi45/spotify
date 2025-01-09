import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Scaffold from "@/components/Scaffold";
import icon from "@/assets/images/adaptive-icon.png";
import google from "@/assets/images/google.png";
import facebook from "@/assets/images/facebook.png";
import apple from "@/assets/images/apple.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import store from "@/redux/store";
import { initialState } from "@/redux/userSlice";
const App = () => {
  const router = useRouter();

  const socialsLogins = [
    {
      name: "Continue with Google",
      icon: google,
    },
    {
      name: "Continue with Facebook",
      icon: facebook,
    },
    {
      name: "Continue with Apple",
      icon: apple,
    },
  ];
  const handelSignUp = () => {
    router.push("/signup");
  };
  return (
    <Scaffold appBar={undefined} overrideClass={null}>
      <View className="flex-1 bg-dark justify-end items-center">
        <SafeAreaView className="flex-1 justify-end items-center">
          <Image className="justify-center h-[53] w-[53]" source={icon} />
          <Text className="text-white font-rmonoBold font-bold text-[26px] text-center pt-2">
            Millions of Songs. {"\n"}Free on Spotify.
          </Text>
          <Pressable onPress={handelSignUp}>
            <View className="w-72 h-11 rounded-full mt-5 justify-center  bg-main mb-1.5">
              <Text className="text-black font-rmonoBold font-bold text-center text-[16px]">
                Sign up free
              </Text>
            </View>
          </Pressable>
          {socialsLogins.map((data, index) => (
            <Pressable key={index} onPress={handelSignUp}>
              <View className="w-72 h-12 flex-row  items-center  rounded-full border-white border-[1px] my-1.5">
                <Image className="w-4 h-4 mx-4" source={data.icon} />
                <Text className="text-white text-[16px] text-rmonoBold font-bold mx-3">
                  {data.name}
                </Text>
              </View>
            </Pressable>
          ))}
          <Pressable
            className="mb-5"
            onPress={() => {
              // router.replace("/(tabs)/home");
              if (store.getState().user === initialState.user) {
                router.push("/signin");
              } else {
                router.replace("/(tabs)/home");
              }
            }}
          >
            <Text className="text-white text-rmonoBold font-bold text-[17px] mt-2">
              Log in
            </Text>
          </Pressable>
        </SafeAreaView>
      </View>
    </Scaffold>
  );
};

export default App;
