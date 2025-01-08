import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Scaffold from "@/components/Scaffold";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

const SignUpView = () => {
  const [currentIndex, setIndex] = useState<number>(0);

  const signupFields = [
    {
      index: 0,
      title: "What’s your email?",
      value: "",
      subtitle: "You’ll need to confirm this email later.",
    },
    {
      index: 1,
      title: "Create a password",
      value: "",
      subtitle: "Use atleast 8 characters.",
    },
    {
      index: 2,
      title: "What’s your gender?",
      value: "",
      subtitle: "",
    },
    {
      index: 3,
      title: "What’s your name?",
      value: "",
      subtitle: "This appears on your spotify profile",
    },
  ];

  const handelBack = () => {
    if (currentIndex === 0) {
      router.back();
    } else {
      setIndex(currentIndex - 1);
    }
  };
  const handelNext = () => {
    setIndex(currentIndex + 1);
  };

  return (
    <Scaffold appBar={undefined} overrideClass={null}>
      <View className="flex-1 bg-dark">
        <SafeAreaView className="flex-1">
          <CustomAppBar handelBack={handelBack} />

          <View className="p-5">
            <Text className="text-white text-[24px] font-bold">
              {signupFields[currentIndex].title}
            </Text>
            <TextInput
              className="text-white bg-dark2 h-12 rounded-[5px] py-2 my-2"
              value={signupFields[currentIndex].value}
              onChangeText={(text: string) =>
                (signupFields[currentIndex].value = text)
              }
            />
            <Text className="text-white text-[12px] font-bold">
              {signupFields[currentIndex].subtitle}
            </Text>
          </View>
          {/* <View className="bg-main flex-wrap justify-center items-center">
            <Pressable className="">
              <Text className="text-white">Next</Text>
            </Pressable>
          </View> */}
        </SafeAreaView>
      </View>
    </Scaffold>
  );
};

export default SignUpView;

const CustomAppBar = ({
  handelBack,
}: {
  handelBack: (event: GestureResponderEvent) => void;
}) => {
  return (
    <Pressable onPress={handelBack}>
      <View className="flex-row justify-between items-center mx-5 my-2">
        <AntDesign name="left" color={"#ffffff"} size={24} />
        <Text className="text-white font-bold text-[18px] font-rmonoBold">
          Create Account
        </Text>
        <AntDesign name="left" color={"#000000"} size={24} />
      </View>
    </Pressable>
  );
};
