import { ScrollView, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

export default function Upload() {
  const [isUploaded, setIsUpload] = useState(false);
  const [isDetected, setIsDetected] = useState(false);
  return (
    <ScrollView>
      <View className="w-full flex p-4 pt-8 gap-4">
        <Text className="text-4xl font-bold">Detect</Text>
        <Text className="text-2xl">Upload audio file</Text>
        <View className="bg-[#CDCDCD] rounded-md items-center gap-y-4 px-3 w-full">
          <View className="border-dashed border-2 border-slate-400 rounded-md items-center justify-center  w-full">
            <View className="mt-4">
              <FontAwesome name="file-sound-o" size={48} color="gray" />
            </View>
            {isUploaded? 
            <Text className="text-lg text-slate-500 p-2 ">Filed uploaded</Text>:
            
            <Text className="text-lg text-slate-500 p-2 ">
              Browse files on device
            </Text>
            }
          </View>
            {isDetected?
            <View className="relative flex w-full items-center">
                <Text className=" absolute left-0 text-2xl font-semibold">Result</Text>
                <View className="border border-red-400 rounded-full w-[100px] h-[100px] items-center justify-center mt-8">
                    <Text className="text-xl font-bold text-red-500">75%</Text>
                    <Text className="text-md font-bold text-red-500">Deepfake</Text>
                </View>
            </View>
            :<></>}
          <View className="flex flex-row gap-x-4  ">
          <Button
            onPress={() => {
                setIsUpload(!isUploaded);
                setIsDetected(false)
            }}
            mode="contained"
            className="bg-[#6D6D6D] rounded-md w-1/3 mb-2"
            >
            Upload
          </Button>
          {isUploaded? 
          <Button 
          onPress={()=>{
            setIsDetected(!isDetected)
            setIsUpload(false)
        }}
          mode="contained" 
          className="rounded-md w-1/3 mb-2">Detect</Button>
          : <></>
        }
              </View>
        </View>
      </View>
    </ScrollView>
  );
}
