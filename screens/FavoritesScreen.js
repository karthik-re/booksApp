import { View, Text, StyleSheet } from "react-native";
import { Global_Styles } from "../constants/colors";
import CusButton from "../components/UI/CustomButton";
import { useState } from "react";

const FavoritesScreen = () => {
  //need to setup authentication here, currently dummy auth
  const [isAuth, setIsAuth] = useState(false);

  const loginHandler = () => {
    setIsAuth(true);
  };
  return (
    <>
      <View style={styles.container}>
        {isAuth ? (
          <Text style={styles.text}>Favorites Screen</Text>
        ) : (
          <>
            <Text style={styles.text}>
              You need to be logged in to view your saved anime
            </Text>
            <CusButton onPress={loginHandler}>Login</CusButton>
          </>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Global_Styles.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

export default FavoritesScreen;
