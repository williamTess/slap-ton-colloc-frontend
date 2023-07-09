import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name={"index"}
        options={{ headerTitle: "Settings screen" }}
      />
    </Stack>
  );
};

export default StackLayout;
