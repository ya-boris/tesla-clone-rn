import React from "react";
import { FlatList, View, Dimensions } from "react-native";
import CarItem from "../CarItem";
import styles from "./styles";
import cars from "./cars";

const CarsList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAligment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
    // <CarItem
    //   carName={"Model 3"}
    //   carTagLine={"Order online for"}
    //   carTagLineCTA={"Touchless Delivery"}
    //   carImage={require("./assets/images/Model3.jpeg")}
    //  />
  );
}

export default CarsList;