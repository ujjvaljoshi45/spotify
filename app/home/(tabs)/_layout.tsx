import { Tabs } from "expo-router";
import { View, Text } from "react-native";
import {
  Bars3BottomLeftIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
// import { LibraryIcon } from "./path/to/LibraryIcon"; // Import your custom Library icon SVG or use another library
import Colors from "@/constants/Colors";
import React from "react";

const Page = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,

        tabBarStyle: {
          backgroundColor: Colors.colors.dark, // Spotify black
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,

          color: Colors.colors.white,
        },
        tabBarIconStyle: {
          marginBottom: -4,
        },
        tabBarActiveTintColor: Colors.colors.white,
        tabBarInactiveTintColor: Colors.colors.dark2,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size || 24} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <MagnifyingGlassIcon color={color} size={size || 24} />
          ),
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          tabBarLabel: "Your Library",
          tabBarIcon: ({ color, size }) => (
            <Bars3BottomLeftIcon color={color} size={size || 24} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Page;
