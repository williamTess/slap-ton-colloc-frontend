import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { ROUTE_URL } from "../../../common/enum";

const groupsPage = () => {
  const { t } = useTranslation("pages");
  return (
    <View>
      <Link href={`${ROUTE_URL.GROUP}/1`}>{t("home.title")}</Link>
      <Link href={`${ROUTE_URL.GROUP}/2`}>group2</Link>
    </View>
  );
};

export default groupsPage;
