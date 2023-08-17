import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AnimeListItem from "./AnimeListItem";
import { Global_Styles } from "../../constants/colors";

const AnimeList = ({ list }) => {
  const navigation = useNavigation();

  if (!list || list.length === 0) {
    return (
      <>
        <View style={styles.fallbackContainer}>
          <Text style={styles.fallbackText}>Anime list empty</Text>
        </View>
      </>
    );
  }

  const pressHandler = (item) => {
    navigation.navigate("AnimeDetails", { id: item.id, title: item.title });
  };

  return (
    <>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <AnimeListItem
            data={itemData.item}
            onPress={pressHandler.bind(this, itemData.item)}
          />
        )}
        style={styles.list}
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Global_Styles.primary300,
  },
  fallbackText: {
    fontSize: 24,
    color: Global_Styles.secondary300,
  },
});

export default AnimeList;
