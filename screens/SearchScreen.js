import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Global_Styles } from "../constants/colors";
import Background from "../components/SearchPage/Background";
import SearchBox from "../components/SearchPage/SearchBar";
import AvoidKeyboard from "../components/UI/AvoidKeyboard";
import { useState } from "react";
import { searchAnime } from "../util/data";
import AnimeList from "../components/AnimeList/AnimeList";

const SearchScreen = () => {
  const [listData, setListData] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const onSearchPress = async (str) => {
    try {
      setIsLoading(true);
      const data = await searchAnime(str);
      setListData(data);
      setIsLoading(false);
    } catch (e) {
      console.error("Error fetching anime:", e);
    }
  };

  const LoadingState = () => {
    return (
      <>
        <View style={styles.activityView}>
          <ActivityIndicator
            size={"large"}
            color={Global_Styles.secondary500}
          />
        </View>
      </>
    );
  };

  const SearchResult = () => {
    return <>{listData.length > 0 && <AnimeList list={listData} />}</>;
  };
  return (
    <>
      <Background>
        <AvoidKeyboard>
          <View style={styles.container}>
            <SearchBox onSearch={onSearchPress} />
          </View>
          {loading ? <LoadingState /> : <SearchResult />}
        </AvoidKeyboard>
      </Background>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    marginHorizontal: 15,
  },
  activityView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchScreen;
