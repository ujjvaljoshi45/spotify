import { View, Text, TouchableOpacity, Keyboard } from "react-native";
import React from "react";
import { SafeAreaView, useSafeAreaFrame } from "react-native-safe-area-context";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";

const Scaffold = ({
  appBar,
  children,
  overrideClass,
}: {
  appBar: any;
  children: any;
  overrideClass: string | null;
}) => {
  return (
    <TouchableOpacity
      className="flex-1"
      activeOpacity={1}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View className={overrideClass === null ? `flex-1` : overrideClass}>
        <StatusBar
          networkActivityIndicatorVisible={true}
          backgroundColor="#121212"
          style="inverted"
        />

        {appBar}
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Scaffold;
