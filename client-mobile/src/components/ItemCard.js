import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default ItemCard = ({ item }) => {
  console.log(item);
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Detail", {
          itemId: item.id,
        })
      }
    >
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={{ uri: item.imgUrl }} />
        <Text style={styles.cardContent}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  cardImage: {
    width: 120,
    height: 105,
    borderRadius: 10,
    marginBottom: 4,
  },
  cardContent: {
    flex: 1,
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
});
