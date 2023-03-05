import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Image } from "react-native";
import { Card } from "@rneui/themed";

export default function Order({ route, navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={{ width: "auto", height: 80 }}
        resizeMethod="resize"
        resizeMode="center"
        // source={{uri: '../loadingGif.gif'}}
        source={require("../logo2.png")}
        backgroundColor="#16a34a"
      />
      <View style={{ backgroundColor: "#fef08a", flex: 1 }}>
        <View style={styles.cardContainer}>
          <Card.Title style={styles.cardTitle}>How to Order</Card.Title>
          <Card.Divider />
          <Card.Image
            style={styles.cardImage}
            source={require("../order.jpg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 25,

    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
 
  },
  cardImage: {
    width: 300,
    height: 320,
    borderRadius: 10,
    resizeMode: "stretch",
  },
  cardContent: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardTitle: {
    textTransform: "capitalize",
    fontSize: 30,
    fontWeight: "bold",
  },
});
