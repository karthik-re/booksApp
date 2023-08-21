import { View, Text, StyleSheet } from "react-native";
import { Global_Styles } from "../constants/colors";
import Background from "../components/SearchPage/Background";
import SearchBox from "../components/SearchPage/SearchBar";
import AvoidKeyboard from "../components/UI/AvoidKeyboard";
import { useState } from "react";
import { searchAnime } from "../util/data";
import AnimeList from "../components/AnimeList/AnimeList";

const SearchScreen = () => {
  const [listData, setListData] = useState([]);

  const onSearchPress = async (str) => {
    try {
      const data = await searchAnime(str);
      setListData(data);
    } catch (e) {
      console.error("Error fetching anime:", e);
    }
  };
  return (
    <>
      <Background>
        <AvoidKeyboard>
          <View style={styles.container}>
            <SearchBox onSearch={onSearchPress} />
          </View>
          {listData.length > 0 && <AnimeList list={listData} />}
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
});

export default SearchScreen;
