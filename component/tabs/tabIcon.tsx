import React, { ReactNode } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  route: { name: string };
  icon: {
    focused: boolean;
    color: string;
    size: number;
  };
}

const tabIcon = ({ route, icon }: Props): ReactNode => {
  let name: any;

  if (route.name === "home") {
    name = icon.focused ? "home" : "home-outline";
  } else if (route.name === "account") {
    name = icon.focused ? "person-circle" : "person-circle-outline";
  } else if (route.name === "group") {
    name = icon.focused ? "list" : "list-outline";
  }
  return <Ionicons name={name} size={icon.size} color={icon.color} />;
};

export default tabIcon;
