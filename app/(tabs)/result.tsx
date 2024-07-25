import { ScrollView, View } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
export default function Result() {
  const [isUploaded, setIsUpload] = useState(false);
  const [isDetected, setIsDetected] = useState(true);
  return (
    <ScrollView>
      <View className="p-4 pt-8 gap-y-4 flex">
        <View className="relative  flex-row  items-center justify-center">
          <View className="absolute left-0  ">
            <AntDesign name="left" size={24} color="black" />
          </View>
          <Text className="text-2xl">Audio info</Text>
        </View>
        <View className="flex items-center justify-center  gap-y-4">
          <FontAwesome name="file-sound-o" size={94} color="gray" />
          <Text className="text-2xl font-semibold">Recording Memo 23/4</Text>
        </View>
        <View className="flex flex-row justify-between items-center bg-[#D9D9D9] p-2 rounded-md">
          <Ionicons name="play-outline" size={36} color="black" />
          <FontAwesome name="trash-o" size={36} color="black" />
        </View>
        <View className="bg-[#D9D9D9] p-2 rounded-md">
          <Text className="text-lg">9 May 2024</Text>
          <View className="flex flex-row gap-x-2">
            <Text className="text-lg text-slate-500">13:50</Text>
            <Text className="text-lg text-slate-500">Audio file: 46 KB</Text>
          </View>
          <Text className="text-lg ">Detection result</Text>
          <Text className="text-lg text-red-500">75% Deepfake</Text>
        </View>
        <View className="bg-[#D9D9D9] rounded-md p-2 gap-y-2">
          <View className="border-b border-slate-500">
            <Text className="text-lg">Share file</Text>
          </View>
          <Text className="text-lg">Share result</Text>
        </View>
      </View>
    </ScrollView>
  );
}
