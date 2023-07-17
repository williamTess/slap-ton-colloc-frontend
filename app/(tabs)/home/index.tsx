import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";
import { useAuth, useUser } from "@clerk/clerk-expo";

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

const homePage = () => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) router.replace("/connexion");
  }, [isSignedIn]);

  return (
    <View>
      <Link href={"/home/settings"}>Push settings</Link>
      <SignOut />
    </View>
  );
};

export default homePage;
