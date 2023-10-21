import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import UserItem from "../../components/users/UserItem/UserItem";
import { getUsers } from "../../services/users";
import styles from "./styles";

export default function Users(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    setIsLoading(true);

    const params = {};

    await getUsers(params)
      .then((data) => {
        setUsers(data?.results);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });

    setIsLoading(false);
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>List User</Text>
      </View>

      <View style={styles.list}>
        {isLoading ? (
          <View style={styles.listLoading}>
            <Image
              source={require("./../../assets/images/loading-icon.png")}
              style={styles.iconLoading}
            />
          </View>
        ) : (
          <FlatList
            data={users}
            keyExtractor={(item) => item?.trackId?.toString()}
            horizontal={false}
            style={styles.listUsers}
            renderItem={({ item }) => (
              <UserItem
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
