import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

import { Global_Styles } from "../../constants/colors";
import InfoPiece from "../UI/InfoPiece";
import { capitalizeString } from "../../util/helpers";

const Information = ({ data }) => {
  const [showFull, setShowFull] = useState(false);

  const toggleSynopsis = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowFull(!showFull);
  };

  const studios_string = data.studios?.map((item) => item.name).join(", ");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleSynopsis}
        style={styles.miniTitleContainer}
      >
        <Text style={styles.text}>Broadcast Information: </Text>
        {showFull ? (
          <Feather
            name="chevrons-up"
            size={16}
            color={Global_Styles.secondary300}
          />
        ) : (
          <Feather
            name="chevrons-down"
            size={16}
            color={Global_Styles.secondary300}
          />
        )}
      </TouchableOpacity>
      {showFull && (
        <View>
          <InfoPiece
            title={"Media Type"}
            content={data.media_type?.toUpperCase() || "--"}
          />
          <InfoPiece
            title={"Ratingd"}
            content={data.rating?.toUpperCase() || "--"}
          />
          <InfoPiece
            title={"Premiered"}
            content={`${capitalizeString(data.start_season?.season) || "--"} ${
              data.start_season?.year || "--"
            }`}
          />
          <InfoPiece
            title={"Number of episodes"}
            content={data.num_episodes || "--"}
          />
          <InfoPiece
            title={"Avg Episode Duration"}
            content={data.ep_duration || "--"}
          />
          <InfoPiece
            title={"Aired"}
            content={`${data.start_date || "--"} - ${data.end_date || "--"}`}
          />
          <InfoPiece
            title={"Broadcast"}
            content={`${
              capitalizeString(data.broadcast?.day_of_the_week) || "--"
            } at ${data.broadcast?.start_time || "--"} (JST)`}
          />
          <InfoPiece title={"Studios"} content={studios_string || "--"} />
          <InfoPiece
            title={"Source"}
            content={capitalizeString(data.source) || "--"}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Global_Styles.primary500,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  miniTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: Global_Styles.secondary500,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default Information;
