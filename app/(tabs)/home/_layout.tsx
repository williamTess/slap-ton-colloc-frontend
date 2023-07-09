import { Stack } from "expo-router";
import { ROUTE_NAME } from "../../../common/enum";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name={"index"} options={{ headerTitle: "Home Screen" }} />
      <Stack.Screen
        name={ROUTE_NAME.SETTINGS}
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default StackLayout;
