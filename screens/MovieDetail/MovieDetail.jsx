import { ResizeMode, Video } from "expo-av";
import React, { useRef, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function MovieDetail(props) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <ScrollView>
      <View style={styles.content}>
        <View style={styles.contentWrapper}>
          <Image
            source={{ uri: props?.detail?.artworkUrl100 }}
            style={styles.contentImage}
          />
          <Text style={styles.contentTitle}>{props?.detail?.trackName}</Text>
          <Text style={styles.contentGenre}>
            {props?.detail?.primaryGenreName}
          </Text>
          <View style={styles.contentOptional}>
            <Text style={styles.contentRating}>
              {props?.detail?.contentAdvisoryRating}
            </Text>
            <Text style={styles.contentCountry}>{props?.detail?.country}</Text>
          </View>
          <Video
            ref={video}
            style={styles.contentVideo}
            source={{
              uri: props?.detail?.previewUrl,
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
            {props?.detail?.longDescription}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
