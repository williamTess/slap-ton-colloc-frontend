import { View, Text } from "react-native";
import React, { useEffect } from "react";
import SignInScreen from "../../component/connect/SignInScreen";
import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

const ConnexionPage = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) router.replace("/home");
  }, [isSignedIn]);

  return (
    <View>
      <Text>ConnexionPage</Text>
      <SignInScreen />
    </View>
  );
};

export default ConnexionPage;
