import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NewsFeed from "./components/NewsFeed";
import UserProfile from "./components/UserProfile";
import ProductSearch from "./components/ProductSearch";
import ApiErrorHandling from "./components/ApiErrorHandling";
import FilteredList from "./components/FilteredList";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NewsFeed /> */}
      {/* <UserProfile /> */}
      {/* <ProductSearch />
      <ApiErrorHandling /> */}
      <StatusBar style="auto" />
      <FilteredList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
