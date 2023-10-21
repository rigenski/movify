import { ResizeMode, Video } from "expo-av";
import React, { useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function MovieDetail(props) {
  const detail = props?.route?.params?.detail;
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => props?.navigation.navigate("Movies")}
          >
            <Image
              source={require("./../../assets/images/close-icon.png")}
              style={styles.headerClose}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.contentWrapper}>
            <Image
              source={{ uri: detail?.artworkUrl100 }}
              style={styles.contentImage}
            />
            <Text style={styles.contentTitle}>{detail?.trackName}</Text>
            <Text style={styles.contentGenre}>{detail?.primaryGenreName}</Text>
            <View style={styles.contentOptional}>
              <Text style={styles.contentRating}>
                {detail?.contentAdvisoryRating}
              </Text>
              <Text style={styles.contentCountry}>{detail?.country}</Text>
            </View>
            <Video
              ref={video}
              style={styles.contentVideo}
              source={{
                uri: detail?.previewUrl,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            <TouchableOpacity
              style={styles.contentButton}
              onPress={() =>
                status.isPlaying
                  ? video.current.pauseAsync()
                  : video.current.playAsync()
              }
            >
              <Text style={styles.contentButtonText}>
                {status.isPlaying ? "Pause" : "Play"}
              </Text>
            </TouchableOpacity>
            <Text style={styles.contentDescription}>
              {detail?.longDescription}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
