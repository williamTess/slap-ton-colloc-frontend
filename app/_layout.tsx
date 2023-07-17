import { Stack } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "../common/tokenCache";
import { EXPO_PUBLIC_CLERK_KEY } from "@env";

const StackLayout = () => {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={EXPO_PUBLIC_CLERK_KEY}
    >
      <Stack>
        <Stack.Screen name={"index"} />
        <Stack.Screen name={"(tabs)"} options={{ headerShown: false }} />
        <Stack.Screen name={"connexion"} options={{ headerShown: false }} />
      </Stack>
    </ClerkProvider>
  );
};

export default StackLayout;
