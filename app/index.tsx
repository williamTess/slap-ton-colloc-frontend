import React, { useEffect } from "react";
import { Redirect } from "expo-router";
import i18n from "../i18next";
import { ROUTE_URL } from "../common/enum";
import { SignedIn, SignedOut } from "@clerk/clerk-expo";

const StartPage = () => {
  i18n.init();

  return (
    <>
      <SignedIn>
        <Redirect href={ROUTE_URL.HOME} />
      </SignedIn>
      <SignedOut>
        <Redirect href={ROUTE_URL.CONNEXION} />
      </SignedOut>
    </>
  );
};

export default StartPage;
