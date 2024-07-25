import { View } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
export const SettingsButton = () => {
  return (
    <View className="w-full relative flex flex-row items-center  space-x-2  border-b border-slate-400 p-2">
      <MaterialCommunityIcons
        name="account-outline"
        size={36}
        color="gray"
        className="basis-1/5"
      />
      <Text className="text-lg basis-4/5 ">Edit profile</Text>
      <AntDesign name="right" size={20} color="black" className="basis-1/5"/>
    </View>
  );
};
