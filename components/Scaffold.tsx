import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <View className={overrideClass === null ? "flex-1" : overrideClass}>
      <StatusBar
        networkActivityIndicatorVisible={true}
        backgroundColor="#121212"
        style="inverted"
      />
      {appBar}
      {children}
    </View>
  );
};

export default Scaffold;
