
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Text, Card, Button, Icon, Badge } from "@rneui/themed";

export default function About({ route, navigation }) {
  return (
    <SafeAreaView style={{ flex: 1,
  }}>

      <Image
        style={{ width: "auto",height:80}}
        resizeMethod="resize"
        resizeMode="center"
        source={require("../logo2.png")}
        backgroundColor="#16a34a"
      />
      <View style={{ backgroundColor :'#fef08a',flex:1 }} >

        <View style={styles.cardContainer}>
          <Card.Title style={styles.cardTitle}>About Us</Card.Title>
          <Card.Divider />
          <Card.Image
            style={styles.cardImage}
            // source={{
            //   uri: '',
            // }}
            source={require("../aboutimage.jpg")}
          />

          <Badge
            value="We Are More Than Close, We Are You"
            status="primary"
            textStyle={{ color: "#EFE" }}
            containerStyle={{ padding: 2 }}
          />
          <Text style={styles.cardContent}>
            We Commit to Give Best Service To You Cause You Are Special
            Sulkhan's provides best sandwhiches in the world, no worries, no
            waitlist, enjoy meal as if today is the best day in your life !!
          </Text>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 25,
    backgroundColor: "red",
    paddingHorizontal: 36,
    paddingVertical: 36,
    backgroundColor: "orange",
    // flexDirection: "row"
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    // padding: 10,
    // height: 150,
    // display:'flex',
    // alignItems:'center'
    // borderRadius
    flex: 1,
  },
  cardImage: {
    width: 300,
    height: 220,
    borderRadius: 10,
    // resizeMode:'stetch'
  },
  cardContent: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardTitle: {
    // flex: 1,
    textTransform: "capitalize",
    fontSize: 30,
    fontWeight: "bold",
  },
});
