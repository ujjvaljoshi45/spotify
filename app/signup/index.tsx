import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  TextInput,
  Keyboard,
} from "react-native";
import React, { ReducerWithoutAction, useReducer, useState } from "react";
import Scaffold from "@/components/Scaffold";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import Colors from "@/constants/Colors";
import { Checkbox, Divider } from "react-native-paper";
import User from "@/constants/user";
import store from "@/redux/store";
import { createUser, initialState } from "@/redux/userSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import AuthAppBar from "@/components/AuthAppBar";

const SignUpView = () => {
  const [currentIndex, setIndex] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [shareMarketing, setShareMarketing] = useState<boolean>(false);
  const [shareData, setShareData] = useState<boolean>(false);

  const signupFields = [
    {
      index: 0,
      title: "What’s your email?",
      value: email,
      subtitle: "You’ll need to confirm this email later.",
      onChangeText: (value: string) => {
        if (value.trim().length >= 0) {
          setEmail(value);
        }
      },
    },
    {
      index: 1,
      title: "Create a password",
      value: password,
      subtitle: "Use atleast 8 characters.",
      onChangeText: (value: string) => {
        if (value.trim().length >= 0) {
          setPassword(value);
        }
      },
    },
    {
      index: 2,
      title: "What’s your gender?",
      value: gender,
      subtitle: "",
      onChangeText: (value: string) => {
        if (value.trim().length >= 0) {
          setGender(value);
        }
      },
    },
    {
      index: 3,
      title: "What’s your name?",
      value: name,
      subtitle: "This appears on your spotify profile",
      onChangeText: (value: string) => {
        if (value.trim().length >= 0) {
          setName(value);
        }
      },
    },
  ];

  const termsFields = [
    {
      index: 0,
      title: "Please send me news and offers from Spotify.",
      value: shareMarketing,
      onChange: () => {
        setShareMarketing(!shareMarketing);
      },
    },
    {
      index: 1,
      title:
        "Share my registration data with Spotify’s content providers for marketing purposes.",
      value: shareData,
      onChange: () => {
        setShareData(!shareData);
      },
    },
  ];

  const handelBack = () => {
    if (currentIndex === 0) {
      setEmail("");
      setGender("");
      setName("");
      setPassword("");
      setIndex(0);
      setShareData(false);
      setShareMarketing(false);
      router.back();
    } else {
      setIndex(currentIndex - 1);
    }
  };
  const handelNext = () => {
    Keyboard.dismiss();
    if (signupFields[currentIndex].value.trim().length > 0) {
      if (currentIndex == signupFields.length - 1) {
        signupFields.map((value) => {
          console.log(`${value.title} : ${value.value}`);
        });
        const newUser: User = {
          email: email,
          password: password,
          gender: gender,
          name: name,
        };

        store.dispatch(createUser(newUser));
        console.log(store.getState().user);
        router.dismissAll();
        router.replace("/(tabs)/home");
      } else {
        setIndex(currentIndex + 1);
      }
    } else {
      console.log("It's Empty");
    }
  };

  return (
    <Scaffold appBar={undefined} overrideClass={null}>
      <View className="flex-1 bg-dark">
        <SafeAreaView className="flex-1">
          <AuthAppBar handelBack={handelBack} title="Create Account" />

          <View className="p-5">
            <Text className="text-white text-[24px] font-bold">
              {signupFields[currentIndex].title}
            </Text>
            <TextInput
              key={signupFields[currentIndex].index}
              autoCorrect={false}
              className="text-white bg-dark2 h-12 rounded-[5px] py-2 px-2 my-2 font-bold"
              autoCapitalize="none"
              cursorColor={"#ffffff"}
              value={signupFields[currentIndex].value}
              onChangeText={signupFields[currentIndex].onChangeText}
            />
            <Text className="text-white text-[12px] font-bold">
              {signupFields[currentIndex].subtitle}
            </Text>
          </View>
          {!(currentIndex >= signupFields.length - 1) ? (
            <View className="flex-wrap  text-center items-center content-center">
              <Pressable
                onPress={handelNext}
                className={`${
                  signupFields[currentIndex].value.trim().length > 0
                    ? "bg-main"
                    : "bg-dark2"
                }  py-3 w-auto justify-center px-5 rounded-full `}
              >
                <Text className=" text-dark font-bold text-[13px]">Next</Text>
              </Pressable>
            </View>
          ) : (
            <View className="mx-4 mt-5">
              <Divider />
              <View className="mt-3 ml-3 mr-12">
                <Text className="py-2 text-white items-center text-start text-[11px] font-bold">
                  By tapping on “Create account”, you agree to the spotify
                </Text>
                <Text className="py-2 text-main items-center text-start text-[11px] font-bold">
                  Terms of Use
                </Text>
                <Text className="py-2 text-white items-center text-start text-[11px] font-bold">
                  To learn more about how Spotify collect, uses, shares and
                  protects your personal data, Please see the Spotify Privacy
                  Policy.
                </Text>
              </View>
              <View className="ml-3 mt-3">
                <Text className="py-2 text-main items-center text-start text-[11px] font-bold">
                  Privacy Policy
                </Text>

                {termsFields.map((element) => (
                  <View key={element.index}>
                    <AgreeFields
                      myKey={element.index}
                      title={element.title}
                      value={element.value}
                      onChange={element.onChange}
                    />
                  </View>
                ))}
              </View>
            </View>
          )}
          <View className="flex-auto"></View>
          {currentIndex >= signupFields.length - 1 ? (
            <View className=" mb-5 justify-end flex-wrap align-bottom items-center content-center">
              <Pressable
                className="bg-white flex-wrap rounded-full p-4"
                onPress={handelNext}
              >
                <Text className="text-dark font-bold">Create an account</Text>
              </Pressable>
            </View>
          ) : (
            <View></View>
          )}
        </SafeAreaView>
      </View>
    </Scaffold>
  );
};

export default SignUpView;

const AgreeFields = ({
  title,
  value,
  myKey,
  onChange,
}: {
  title: string;
  value: boolean;
  myKey: number;
  onChange: (e: GestureResponderEvent) => void;
}) => {
  console.log(myKey);
  return (
    <View key={myKey} className="flex-row py-2 justify-between items-center">
      <Text className="text-white flex-2 items-center text-start text-[11px] font-bold w-[300px]">
        {title}
      </Text>
      <View
        className={`border-2 ${
          value ? "border-main bg-main" : "border-dark2"
        }  rounded-full  h-[24px] w-[24px]`}
      >
        <Checkbox
          status={value ? "checked" : "unchecked"}
          color={Colors.colors.dark}
          // key={myKey}
          theme={{
            roundness: 24,
          }}
          onPress={onChange}
        />
      </View>
    </View>
  );
};
