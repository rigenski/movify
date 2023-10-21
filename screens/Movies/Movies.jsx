import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import MovieItem from "../../components/movies/MovieItem/MovieItem";
import { getMovies } from "../../services/movies";
import { mediaTypes } from "../../utilities/const";
import styles from "./styles";

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginBottom: 16,
    paddingHorizontal: 48,
    width: "100%",
    height: 40,
    fontSize: 14,
    fontWeight: "500",
    color: "#f9fafb",
    backgroundColor: "#4b5563",
    borderRadius: 24,
  },
  inputAndroid: {
    marginBottom: 16,
    paddingHorizontal: 48,
    width: "100%",
    height: 40,
    fontSize: 14,
    fontWeight: "500",
    color: "#f9fafb",
    backgroundColor: "#4b5563",
    borderRadius: 24,
  },
});

export default function Movies(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    mediaType: mediaTypes[1]?.value,
    searchTerm: "Marvel",
  });
  const [movies, setMovies] = useState([]);

  const handleGetMovies = () => {
    if (formValues?.mediaType && formValues?.searchTerm) {
      setIsLoading(true);

      const params = {
        term: formValues?.searchTerm,
        media: formValues?.mediaType,
      };

      getMovies(params)
        .then((data) => {
          setMovies(data?.results);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
        });

      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Movify</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.formWrapper}>
          <RNPickerSelect
            placeholder={{
              label: "Select Media",
              value: null,
            }}
            items={mediaTypes}
            onValueChange={(val) =>
              setFormValues((curr) => ({ ...curr, mediaType: val }))
            }
            value={formValues?.mediaType}
            style={pickerSelectStyles}
          />
          <Image
            source={require("./../../assets/images/select-icon.png")}
            style={styles.formIcon}
          />
        </View>
        <View style={styles.formWrapper}>
          <TextInput
            style={styles.formInput}
            placeholder="Type Keyword"
            placeholderTextColor="#9ca3af"
            value={formValues?.searchTerm}
            onChangeText={(val) =>
              setFormValues((curr) => ({ ...curr, searchTerm: val }))
            }
          />
          <Image
            source={require("./../../assets/images/search-icon.png")}
            style={styles.formIcon}
          />
        </View>
        <TouchableOpacity style={styles.formButton} onPress={handleGetMovies}>
          <Text style={styles.formButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        {isLoading ? (
          <View style={styles.listLoading}>
            <Image
              source={require("./../../assets/images/loading-icon.png")}
              style={styles.formIcon}
            />
          </View>
        ) : (
          <FlatList
            data={movies}
            keyExtractor={(item) => item?.trackId?.toString()}
            horizontal={false}
            style={styles.listMovies}
            renderItem={({ item }) => (
              <MovieItem
                item={item}
                setDetail={(val) => props?.setDetail(val)}
              />
            )}
          />
        )}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
