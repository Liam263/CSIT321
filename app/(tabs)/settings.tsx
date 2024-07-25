import { ScrollView, View } from "react-native";
import { Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { SettingsButton } from "./_components/settingsButton";

export default function Settings() {
  return (
    <ScrollView>
      <View className="w-full flex p-4 pt-8 gap-4">
        <Text className="text-4xl font-bold">Settings</Text>
        <View className="bg-[#D9D9D9] flex-row w-full p-2 rounded-md gap-x-2 ">
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={48}
            color="gray"
            className="basis-1/5"
          />
          <View className="flex  basis-3/5 mr-4">
            <Text className="text-2xl font-semibold">Jimmy</Text>
            <Text className="text-slate-500">Status</Text>
          </View>
          <FontAwesome name="qrcode" size={48} color="black"  className=" basis-1/5"/>
        </View>

        <View className="bg-[#D9D9D9] w-full rounded-md p-4">
          <SettingsButton/>
          <SettingsButton/>
          <SettingsButton/>
          <SettingsButton/>
          <SettingsButton/>

        </View>
        <View className="bg-[#D9D9D9] w-full rounded-md p-4">
          <SettingsButton/>
          <SettingsButton/>
          <SettingsButton/>
          <SettingsButton/>
          <SettingsButton/>

        </View>
      </View>
    </ScrollView>
  );
}
