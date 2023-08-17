import { FlatList } from "react-native";
import MainHeader from "../UI/MainHeader";
import MiniAnimeTile from "./MiniAnimeTile";

const Related = ({ data }) => {
  return (
    <>
      <MainHeader title={"Related Anime"}>
        <FlatList
          horizontal={true}
          data={data.related_anime}
          keyExtractor={(item) => item.node.id}
          renderItem={(itemData) => (
            <MiniAnimeTile
              title={itemData.item.node.title}
              img={itemData.item.node.main_picture.medium}
              id={itemData.item.node.id}
              relation={itemData.item.relation_type_formatted}
            />
          )}
        />
      </MainHeader>
    </>
  );
};

export default Related;
