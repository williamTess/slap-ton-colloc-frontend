import React from "react";
import { Redirect } from "expo-router";
import i18n from "../i18next";
import { ROUTE_URL } from "../common/enum";

const StartPage = () => {
  i18n.init();
  return <Redirect href={ROUTE_URL.HOME} />;
};

export default StartPage;
