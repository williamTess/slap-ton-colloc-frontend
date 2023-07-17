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
    name = "home";
  } else if (route.name === "account") {
    name = "person-circle";
  } else if (route.name === "groups") {
    name = "list";
  }

  if (icon.focused) name += "-outline";

  return <Ionicons name={name} size={icon.size} color={icon.color} />;
};

export default tabIcon;
