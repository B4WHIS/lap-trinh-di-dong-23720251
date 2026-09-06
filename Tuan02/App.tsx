import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NewsFeed from "./components/NewsFeed";
import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <NewsFeed /> */}
      <UserProfile />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
