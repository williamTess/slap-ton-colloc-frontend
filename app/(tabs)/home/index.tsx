import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const homePage = () => {
  return (
    <View>
      <Link href={"/home/settings"}>Push settings</Link>
    </View>
  );
};

export default homePage;
