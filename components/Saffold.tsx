import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Saffold = ({
  appBar,
  children,
  overrideClass,
}: {
  appBar: any;
  children: any;
  overrideClass: string | undefined;
}) => {
  return (
    <View className={overrideClass === undefined ? "flex-1" : overrideClass}>
      {appBar}
      {children}
    </View>
  );
};

export default Saffold;
