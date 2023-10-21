import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetail from "./../screens/MovieDetail/MovieDetail";
import Movies from "./../screens/Movies/Movies";
import UserDetail from "./../screens/UserDetail/UserDetail";
import Users from "./../screens/Users/Users";

const Tab = createBottomTabNavigator();
const MoviesStack = createStackNavigator();
const UserStack = createStackNavigator();

const MoviesStackScreen = () => {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen
        name="Movies"
        component={Movies}
        options={{ headerShown: false }}
      />
      <MoviesStack.Screen
        name="MovieDetail"
        component={MovieDetail}
        options={{ headerShown: false }}
      />
    </MoviesStack.Navigator>
  );
};

const UserStackScreen = () => (
  <UserStack.Navigator>
    <UserStack.Screen
      name="Users"
      component={Users}
      options={{ headerShown: false }}
    />
    <UserStack.Screen
      name="UserDetail"
      component={UserDetail}
      options={{ headerShown: false }}
    />
  </UserStack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Movies"
      component={MoviesStackScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Users"
      component={UserStackScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
