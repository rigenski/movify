import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

export default function UserDetail(props) {
  const detail = props?.route?.params?.detail;
  const coordinate = {
    latitude: detail?.location?.coordinates?.latitude,
    longitude: detail?.location?.coordinates?.longitude,
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props?.navigation.navigate("Users")}>
            <Image
              source={require("./../../assets/images/close-icon.png")}
              style={styles.headerClose}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.contentWrapper}>
            <Image
              source={{ uri: detail?.picture?.large }}
              style={styles.contentImage}
            />
            <Text style={styles.contentTitle}>
              {detail?.name?.title} {detail?.name?.first} {detail?.name?.last}
            </Text>
            <Text style={styles.contentEmail}>{detail?.email}</Text>
            <View style={styles.contentOptional}>
              <Text style={styles.contentPhone}>Phone: {detail?.phone}</Text>
              <Text style={styles.contentAddress}>
                Address: {detail?.location?.name} {detail?.location?.number}{" "}
                {detail?.location?.city} {detail?.location?.state}{" "}
                {detail?.location?.county} {detail?.location?.postcode}
              </Text>
            </View>
            <MapView region={coordinate} style={styles.contentMaps}>
              <Marker coordinate={coordinate} title="Location" />
            </MapView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
