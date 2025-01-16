import { View, Text, Pressable } from "react-native";
import React from "react";
import Scaffold from "@/components/Scaffold";
import AuthAppBar from "@/components/AuthAppBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";
import Colors from "@/constants/Colors";
import { router } from "expo-router";

const SignInView = () => {
  return (
    <Scaffold appBar={undefined} overrideClass={null}>
      <View className="flex-1 bg-dark">
        <SafeAreaView className="flex-1">
          <AuthAppBar handelBack={() => {}} title="Log in" />
          <View className="px-4 pt-2">
            <Text className="text-white text-[20px] font-semibold mt-1">
              Enter Email or Username
            </Text>
            <TextInput
              autoCorrect={false}
              className="text-white bg-dark2 h-12 rounded-[5px]  px-2 my-2 font-bold"
              autoCapitalize="none"
              cursorColor={"#ffffff"}
              onChangeText={() => {}}
              activeOutlineColor={Colors.colors.dark2}
              activeUnderlineColor={Colors.colors.dark2}
            />
          </View>
          <View className="px-4 pt-2">
            <Text className="text-white text-[20px] font-semibold mt-1">
              Password
            </Text>
            <TextInput
              className="text-white bg-dark2 h-12 rounded-[5px]  px-2 my-2 font-bold"
              secureTextEntry
              activeOutlineColor={Colors.colors.dark2}
              activeUnderlineColor={Colors.colors.dark2}
              right={<TextInput.Icon icon="eye" />}
            />
            <View className=" mt-10 mb-5 justify-end flex-wrap align-bottom items-center content-center">
              <Pressable
                className="bg-white flex-wrap rounded-full px-5 py-3"
                onPress={() => {
                  router.dismissAll();
                  router.replace("/home/(tabs)/home");
                }}
              >
                <Text className="text-dark font-bold">Log in</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Scaffold>
  );
};

export default SignInView;
