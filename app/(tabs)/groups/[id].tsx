import { Stack, useSearchParams } from "expo-router";
import { Text, View } from "react-native";

const DetailPage = () => {
  const { id } = useSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Details #${id}` }} />

      <Text>My detail for: {id}</Text>
    </View>
  );
};

export default DetailPage;
