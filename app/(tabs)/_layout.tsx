import { Tabs } from "expo-router";
import tabIcon from "../../component/tabs/tabIcon";
import { ROUTE_NAME } from "../../common/enum";

const StackLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: (icon) => tabIcon({ route, icon }),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen name={ROUTE_NAME.HOME} options={{ headerShown: false }} />
      <Tabs.Screen name={ROUTE_NAME.GROUP} options={{ headerShown: false }} />
      <Tabs.Screen name={ROUTE_NAME.ACCOUNT} options={{ headerShown: false }} />
    </Tabs>
  );
};
export default StackLayout;
