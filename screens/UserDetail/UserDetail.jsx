import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

export default function UserDetail(props) {
  const coordinate = {
    latitude: props?.detail?.location?.coordinates?.latitude,
    longitude: props?.detail?.location?.coordinates?.longitude,
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props?.onClose()}>
          <Image
            source={require("./../../assets/images/close-icon.png")}
            style={styles.headerClose}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.contentWrapper}>
          <Image
            source={{ uri: props?.detail?.picture?.large }}
            style={styles.contentImage}
          />
          <Text style={styles.contentTitle}>
            {props?.detail?.name?.title} {props?.detail?.name?.first}{" "}
            {props?.detail?.name?.last}
          </Text>
          <Text style={styles.contentEmail}>{props?.detail?.email}</Text>
          <View style={styles.contentOptional}>
            <Text style={styles.contentPhone}>
              Phone: {props?.detail?.phone}
            </Text>
            <Text style={styles.contentAddress}>
              Address: {props?.detail?.location?.name}{" "}
              {props?.detail?.location?.number} {props?.detail?.location?.city}{" "}
              {props?.detail?.location?.state} {props?.detail?.location?.county}{" "}
              {props?.detail?.location?.postcode}
            </Text>
          </View>
          <MapView region={coordinate} style={styles.contentMaps}>
            <Marker coordinate={coordinate} title="Location" />
          </MapView>
        </View>
      </View>
    </ScrollView>
  );
}
