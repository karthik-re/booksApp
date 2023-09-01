import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Global_Styles } from "../../constants/colors";

const MAX_LINES = 3;

const Synopsis = ({ synopsis }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleSynopsis = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowFull(!showFull);
  };

  return (
    <View>
      <Text
        style={[
          styles.t3,
          showFull ? styles.fullSynopsis : styles.partialSynopsis,
        ]}
      >
        {synopsis.trim()}
      </Text>
      {showFull ? (
        <TouchableOpacity
          onPress={toggleSynopsis}
          style={styles.readMoreContainer}
        >
          <Feather
            name="chevrons-up"
            size={16}
            color={Global_Styles.secondary300}
            style={styles.showLessIcon}
          />
          <Text style={styles.showLess}>Show less</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={toggleSynopsis}
          style={styles.readMoreContainer}
        >
          <Feather
            name="chevrons-down"
            size={16}
            color={Global_Styles.secondary300}
          />
          <Text style={styles.readMore}>Read more</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  t3: {
    color: "white",
  },
  fullSynopsis: {
    maxHeight: "100%",
  },
  partialSynopsis: {
    maxHeight: MAX_LINES * 24,
    overflow: "hidden",
  },
  readMoreContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  readMore: {
    color: Global_Styles.secondary300,
    textDecorationLine: "underline",
  },
  showLess: {
    color: Global_Styles.secondary300,
    textDecorationLine: "underline",
    marginTop: -20,
  },
  showLessIcon: {
    marginTop: -20,
  },
});

export default Synopsis;
