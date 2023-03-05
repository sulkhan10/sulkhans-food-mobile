
import {
Text,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default LoadingScreen = ({ item}) => {
  console.log(item);
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Image
      style={{ width: "auto", height: 80 }}
      resizeMethod="resize"
      resizeMode="center"
      source={require("../logo2.png")}
      backgroundColor="#16a34a"
    />
    <Image
      style={{ width: "100%", flex: 1, backgroundColor: "#fef08a" }}
      source={require("../loadingGif.gif")}
    />
    <Text
      style={{
        width: "100%",
        paddingBottom: 20,
        fontSize: 40,
        color: "#16a34a",
        fontWeight: "900",
        textAlign: "center",
        backgroundColor: "#fef08a",
      }}
    >
      Loading...
    </Text>
  </SafeAreaView>
  );
};

