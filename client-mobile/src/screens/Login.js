
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,

  Button,
  ImageBackground,
  Image,TouchableOpacity
} from "react-native";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 ,backgroundColor:'#16a34a'}}>
       
      <ImageBackground
        source={require("../promo1.jpg")}
        resizeMode='stretch'
        style={styles.image}
      >
        <TouchableOpacity onPress={() => {
            navigation.navigate("MainTab");
          }}>

        <Image
        style={{ width: "auto", height: 45 }}
        resizeMethod="resize"
        resizeMode="center"
        source={require("../logo2.png")}
        backgroundColor="#16a34a"
      />
        <Button
        color={'#16a34a'}
          onPress={() => {
            navigation.navigate("MainTab");
          }}
          title="Lets Go"
        />
    </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#16a34a",
  },
});
