import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import SearchScreen from "./screens/SearchScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/Profile";
import IconButton from "./components/UI/IconButton";
import { Global_Styles } from "./constants/colors";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import AnimeDetaiScreen from "./screens/AnimeDetailScreen";

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AnimeOverview = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: Global_Styles.primary800 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Global_Styles.primary800 },
        tabBarActiveTintColor: Global_Styles.secondary500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon={"person"}
            color={tintColor}
            size={24}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          />
        ),
      })}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-search" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Saved",
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Global_Styles.primary800 },
            headerTintColor: "white",
            contentStyle: { backgroundColor: Global_Styles.primary500 },
          }}
        >
          <Stack.Screen
            name="AnimeOverview"
            component={AnimeOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              presentation: "modal",
            }}
          />
          <Stack.Screen
            name="Authentication"
            component={AuthenticationScreen}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen name="AnimeDetails" component={AnimeDetaiScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
