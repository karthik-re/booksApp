import { FlatList } from "react-native";
import MainHeader from "../UI/MainHeader";
import MiniAnimeTile from "./MiniAnimeTile";

const Recommendations = ({ data }) => {
  return (
    <>
      <MainHeader title={"Recommendations"}>
        <FlatList
          horizontal={true}
          data={data.recommendations}
          keyExtractor={(item) => item.node.id}
          renderItem={(itemData) => (
            <MiniAnimeTile
              title={itemData.item.node.title}
              img={itemData.item.node.main_picture.medium}
              id={itemData.item.node.id}
              relation={`#recommendations: ${itemData.item.num_recommendations}`}
            />
          )}
        />
      </MainHeader>
    </>
  );
};

export default Recommendations;
