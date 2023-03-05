import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, Image } from "react-native";
import { Text, Card,  } from "@rneui/themed";

export default function News({ route, navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={{ width: "auto", height: 80 }}
        resizeMethod="resize"
        resizeMode="center"
        source={require("../logo2.png")}
        backgroundColor="#16a34a"
      />
      <View style={{ backgroundColor: "#fef08a", flex: 1 }}>
        <Card.Title style={styles.cardTitle}>
          PROMO , PROMO, PROMO !!! PROMO ALERT !!!
        </Card.Title>
        <Text style={styles.cardContent}>
          So many promos are ready to be grabbed, espesialize for bundling
          couple and for family, we accept all payment method like e-money,
          credit card, e-wallet and cash See You At Our Nearest Otlet !!!{" "}
        </Text>
        <Text style={styles.cardContent}>
          Every day there are bunch of promos that are ready to be grabbed, go
          fast cause our promos will last shortly because of our beloved
          costumer are extremely enjoy it
        </Text>

        <View style={styles.cardContainer}>
          <Card.Image
            style={styles.cardImage}
            source={require("../promo1.jpg")}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardContent}>Family Pack </Text>
            <Text style={styles.cardContent}>
              Every day there are bunch of promos that are ready to be grabbed,
            </Text>
            <Text style={styles.cardContent}>
              go fast cause our promos will last shortly because of our beloved
              costumer are extremely enjoy it
            </Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Card.Image
            style={styles.cardImage}
            source={require("../promo2.jpg")}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardContent}>Bundling Couple </Text>

            <Text style={styles.cardContent}>
              Every day there are bunch of promos that are ready to be grabbed,
            </Text>
            <Text style={styles.cardContent}>
              go fast cause our promos will last shortly because of our beloved
              costumer are extremely enjoy it
            </Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <Card.Image
            style={styles.cardImage}
            source={require("../promo3.jpg")}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardContent}>Bundling Valentine Day</Text>
            <Text style={styles.cardContent}>
              Every day there are bunch of promos that are ready to be grabbed,
            </Text>
            <Text style={styles.cardContent}>
              go fast cause our promos will last shortly because of our beloved
              costumer are extremely enjoy it
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 5,
    flexWrap: "wrap",
    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: "orange",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  cardImage: {
    width: 110,
    height: 120,
    borderRadius: 10,
    resizeMode: "contain",
  },
  cardContent: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardTitle: {
    textTransform: "capitalize",
    fontSize: 25,
    fontWeight: "bold",
  },
});
