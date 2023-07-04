import { Tabs } from "expo-router";

const StackLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name={"home"} options={{ headerShown: false }} />
      <Tabs.Screen name={"list"} options={{ headerShown: false }} />
    </Tabs>
  );
};
export default StackLayout;
