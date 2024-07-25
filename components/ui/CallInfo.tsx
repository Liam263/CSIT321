import { View } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const CallInfo = () => {
  return (
    <View className="w-full flex flex-row items-center justify-center space-x-2  border-b border-slate-400 p-2">
      <MaterialCommunityIcons
        name="account-circle-outline"
        size={36}
        color="gray"
        className="basis-1/10"
      />
      <View className="basis-1/2  justify-center space-y-1">
        <Text className="text-red-500">+61 482 036 181</Text>
        <View className="flex-row space-x-2">
          <Feather name="phone-missed" size={16} color="gray" />
          <Text className="text-slate-700">Missed</Text>
        </View>
      </View>
      <View className="basis-2/5 flex-row items-center justify-center">
        <Text className="text-slate-700">05/08/2024</Text>
        <Feather name="info" size={24} color="gray" />
      </View>
    </View>
  );
};
