import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { formatDate } from "../../../utilities/func";

export default function UserItem(props) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => props?.setDetail(props?.item)}
    >
      <Image
        source={{ uri: props?.item?.picture?.thumbnail }}
        style={styles.listImage}
      />
      <View>
        <Text style={styles.listName}>
          {props?.item?.name?.title} {props?.item?.name?.first}{" "}
          {props?.item?.name?.last}
        </Text>
        <Text style={styles.listEmail}>{props?.item?.email}</Text>
        <Text style={styles.listDate}>
          Birthday: {formatDate(props?.item?.dob?.date)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
