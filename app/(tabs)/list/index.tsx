import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const list = () => {
  return (
    <View>
      <Link href={"/list/1"}>list1</Link>
      <Link href={"/list/2"}>list2</Link>
    </View>
  );
};

export default list;
