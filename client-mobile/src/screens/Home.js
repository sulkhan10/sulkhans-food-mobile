
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  View,

  Image,
} from "react-native";
import ItemCard from "../components/ItemCard";
import LoadingScreen from "../components/LoadingScreen";
import { FlatGrid } from "react-native-super-grid";
import { useQuery, gql } from "@apollo/client";

const GET_ITEMS = gql`
  query FindAllItem {
    findAllItem {
      price
      name
      imgUrl
      id
      description
      categoryId
      authorId
      UserMongoId
      User {
        username
        role
        phoneNumber
        id
        email
        address
        _id
      }
      Ingredients {
        id
        itemId
        name
      }
      Category {
        id
        name
      }
    }
  }
`;



export default function Home({ navigation }) {
  let items;
    let { loading, data, error } = useQuery(GET_ITEMS);
    if (loading) return <LoadingScreen />;
    if (error) return <Text>`Error! ${error.message}`;</Text>;
    items = data.findAllItem;
  
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        style={{ width: "auto", height: 80 }}
        resizeMethod="resize"
        resizeMode="center"
        source={require("../logo2.png")}
        backgroundColor="#16a34a"
      />

      <View style={styles.container}>
        <FlatGrid
          itemDimension={120}
          style={styles.gridView}
          data={items}
          renderItem={({ item }) => {
            return <ItemCard item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    paddingVertical: 0,
    paddingHorizontal: 16,
    backgroundColor: "#fef08a",
  },
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  search: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
});
