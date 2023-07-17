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
        headerShown: false,
      })}
    >
      <Tabs.Screen name={ROUTE_NAME.HOME} />
      <Tabs.Screen name={ROUTE_NAME.GROUP} />
      <Tabs.Screen name={ROUTE_NAME.ACCOUNT} />
    </Tabs>
  );
};
export default StackLayout;
