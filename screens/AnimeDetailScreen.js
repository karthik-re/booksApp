import { View, Text, StyleSheet } from "react-native";

const AnimeDetaiScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>FavoritesScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AnimeDetaiScreen;
