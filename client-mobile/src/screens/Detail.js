import LoadingScreen from "../components/LoadingScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";
import { Text, Card, Badge } from "@rneui/themed";
import { useQuery, gql } from "@apollo/client";

const GET_ITEM_DATA = gql`
  query FindItemById($findItemByIdId: ID) {
    findItemById(id: $findItemByIdId) {
      id
      name
      description
      price
      imgUrl
      authorId
      categoryId
      UserMongoId
      Category {
        id
        name
      }
      Ingredients {
        id
        name
        itemId
      }
      User {
        _id
        id
        username
        email
        phoneNumber
        role
        address
      }
    }
  }
`;
export default function Detail({ route, navigation }) {
  let { itemId } = route.params;
  let { loading, data, error } = useQuery(GET_ITEM_DATA, {
    variables: { findItemByIdId: itemId },
  });
  if (loading) return <LoadingScreen />;
  if (error) return <Text>`Error! ${error.message}`;</Text>;
  console.log(data);
  let itemData = data.findItemById;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fef08a" }}>
      <View style={styles.cardContainer}>
        <Card.Title style={styles.cardTitle}>{itemData.name}</Card.Title>
        <Card.Divider />
        <Card.Image
          style={styles.cardImage}
          source={{
            uri: itemData.imgUrl,
          }}
        />
        <Text style={styles.cardDescription}>{itemData.description}</Text>
        <Text style={styles.cardContent}>Price : Rp {itemData.price}</Text>
        <View style={{flexDirection:"row"}}>

        <Text style={styles.cardContent}>
          Category :
        </Text>
        <Badge
          value={itemData.Category.name}
          status="primary"
          textStyle={{ color: "#EFE" }}
          containerStyle={{ padding: 2 }}
        />
        </View>
        <View style={{flexDirection:"row"}}>

        <Text style={styles.cardContent}>
          Recipe By :
        </Text>
        <Badge
          value={itemData.User.username}
          status="primary"
          textStyle={{ color: "#EFE" }}
          containerStyle={{ padding: 2 }}
        />
        </View>
        <Text style={styles.cardContent}>Ingredients : </Text>
        {itemData.Ingredients.map((dataIngredient) => {
          return (
            <Badge
              key={dataIngredient.id}
              value={dataIngredient.name}
              status="success"
              textStyle={{ color: "#EFE" }}
              containerStyle={{ padding: 2 }}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 25,
    paddingHorizontal: 36,
    paddingVertical: 36,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  cardImage: {
    width: 220,
    height: 220,
    borderRadius: 10,
    resizeMode: "contain",
    marginBottom:15
  },
  cardDescription: {
    textTransform: "capitalize",
    fontSize: 18,
    margin :2,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardContent: {
    textTransform: "capitalize",
    fontSize: 13,
    margin :2,
    fontWeight: "bold",
    textAlign: "center",
  },
  cardTitle: {
    textTransform: "capitalize",
    fontSize: 30,
    fontWeight: "bold",
  },
});
