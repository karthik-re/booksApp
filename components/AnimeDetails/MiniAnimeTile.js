import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { Global_Styles } from "../../constants/colors";

const MiniAnimeTile = ({ title, id, img, relation }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("AnimeDetails", { id: id, title: title });
  };
  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.relation}>{`(${relation})`}</Text>
        </View>
        <Image source={{ uri: img }} style={styles.img} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    marginHorizontal: 4,
    backgroundColor: Global_Styles.primary300,
    justifyContent: "center",
    shadowColor: "white",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    width: 150,
  },
  pressed: {
    opacity: 0.75,
  },
  textContainer: {
    height: 50,
    justifyContent: "space-between",
    paddingVertical: 3,
  },
  title: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  img: {
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  relation: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "center",
  },
});

export default MiniAnimeTile;
