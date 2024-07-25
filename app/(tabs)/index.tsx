import { Image, ScrollView, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
import { Button, SegmentedButtons } from "react-native-paper";
import { CallInfo } from "@/components/ui/CallInfo";

export default function Dashboard() {
  const [value, setValue] = useState("");
  return (
    <ScrollView>
      <View className="flex p-4 gap-4">
        <View className=" flex-row justify-between py-4">
          <View className="justify-center">
            <Text className="text-4xl font-bold mb-2">Dashboard</Text>
            <Text>HELLO Name!</Text>
          </View>
          <Image source={require("../../assets/images/DeepfakeLogo.png")} />
        </View>
        <View className="bg-[#D9D9D9] p-4 rounded-md">
          <View className="flex-row justify-between items-center ">
            <View className="justify-center gap-2">
              <Text className="text-2xl mb-2">PERSONAL STATISTICS</Text>
              <View className="flex-row justify-between relative">
                <View className="mr-12">
                  <Text>Within the last 7 days</Text>
                  <Text className="text-4xl font-bold">17 Calls</Text>
                </View>
                <Image
                  className="z-0"
                  source={require("../../assets/images/ProgressCircle.png")}
                />
                <View className="absolute   items-center z-10 right-6 top-1/4">
                  <Text className="text-xl text-[#00278A] font-bold">35%</Text>
                  <Text className="text-md text-[#00278A] font-semibold">
                    Deepfake
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View className=" flex gap-y-2 items-center">
          <View className="flex flex-row w-full justify-between items-center">
            <Text className="text-4xl font-bold ">Calls</Text>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>
          <View className="flex flex-row  rounded-md w-1/2 bg-[#D9D9D9] items-center justify-between">
            <Button className="rounded-md bg-[#6D6D6D] w-1/2">
              <Text className="text-black">All</Text>
            </Button>
            <Button className="rounded-md w-1/2" >
              <Text className="text-black">Missed</Text>
            </Button>
            {/* <SegmentedButtons 
            value={value}
            onValueChange={setValue}
            buttons={[
              {value: "all",
              label: "All"
              },
              {value: "missed",
              label: "Missed"
              }
              ]}
              
              /> */}
          </View>
          <Text className="text-2xl w-full">Recent</Text>
          <View className=" bg-[#D9D9D9] w-full p-6 rounded-md max-h-[250px]  ">
            <ScrollView>
              <CallInfo />
              <CallInfo />
              <CallInfo />
              <CallInfo />
              <CallInfo />
              <CallInfo />
              <CallInfo />
              <CallInfo />
              <CallInfo />
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
