import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name={"index"} options={{ headerTitle: "Group Screen" }} />
    </Stack>
  );
};

export default StackLayout;
