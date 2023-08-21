import { StyleSheet, TextInput, View } from "react-native";
import { Global_Styles } from "../../constants/colors";
import IconButton from "../UI/IconButton";
import { useState } from "react";

const SearchBox = ({ onSearch }) => {
  const [str, setStr] = useState("");

  const textChangeHandler = (val) => {
    setStr(val);
  };

  const pressHandler = () => {
    onSearch(str);
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          autoCapitalize={"none"}
          autoCorrect={false}
          onChangeText={textChangeHandler}
          value={str}
        />
        <IconButton
          icon="search"
          onPress={pressHandler}
          color={Global_Styles.primary800}
          size={16}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 30,
    borderRadius: 6,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    flex: 9,
    paddingVertical: 8,
    paddingHorizontal: 6,
    fontSize: 16,
  },
});

export default SearchBox;
