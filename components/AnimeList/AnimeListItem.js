import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Global_Styles } from "../../constants/colors";

const AnimeListItem = ({ data, onPress }) => {
  //data: id,title, image,rank
  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      >
        <Image source={{ uri: data.img_medium }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.rank}>{data.rank}</Text>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 6,
    marginVertical: 8,
    backgroundColor: Global_Styles.primary300,
    alignItems: "flex-start",
    justifyContent: "center",
    shadowColor: "white",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 150,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Global_Styles.secondary300,
  },
  rank: {
    fontSize: 14,
    color: "white",
  },
});

export default AnimeListItem;
