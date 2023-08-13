import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Global_Styles } from "../constants/colors";
import { getTop5Anime } from "../util/data";
import { useEffect, useState } from "react";
import AnimeList from "../components/AnimeList/AnimeList";

const HomeScreen = () => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTop5Anime();
        setAnimeList(response);
        setIsLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching top 5 anime:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color={Global_Styles.secondary300} />
      ) : (
        <AnimeList list={animeList} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Global_Styles.primary300,
  },
});

export default HomeScreen;
