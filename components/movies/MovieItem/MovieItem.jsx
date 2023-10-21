import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function MovieItem(props) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => props?.setDetail(props?.item)}
    >
      <Image
        source={{ uri: props?.item?.artworkUrl100 }}
        style={styles.listImage}
      />
      <View>
        <Text style={styles.listName}>{props?.item?.trackName}</Text>
        <Text style={styles.listCountry}>Country: {props?.item?.country}</Text>
        <Text style={styles.listDate}>
          Release: {new Date(props?.item?.releaseDate).getFullYear()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
