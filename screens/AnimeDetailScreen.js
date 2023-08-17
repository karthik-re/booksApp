import { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  Text,
} from "react-native";
import { getAnimeDetails } from "../util/data";
import AnimeDetails from "../components/AnimeDetails/AnimeDetails";
import { Global_Styles } from "../constants/colors";

const windowWidth = Dimensions.get("window").width;

const AnimeDetailsScreen = ({ route, navigation }) => {
  const animeId = route.params?.id;
  const title = route.params?.title;
  const [anime, setAnime] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={styles.headerTitle}>
          <Text
            style={styles.headerText}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
        </View>
      ),
    });
  }, [navigation, title]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAnimeDetails(animeId);
        setAnime(response);
        setIsLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetchinnime:", error);
      }
    };

    fetchData();
  }, [animeId]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={Global_Styles.secondary300}
          style={styles.activity}
        />
      ) : (
        <AnimeDetails data={anime} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activity: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: windowWidth - 60,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default AnimeDetailsScreen;
