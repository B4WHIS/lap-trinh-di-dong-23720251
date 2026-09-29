import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Alert,
  Switch,
  RefreshControl,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "./components/MovieCard";

export interface Movie {
  id: string;
  title: string;
  genre: string;
  year: number;
  rating: number;
  poster: string;
  isShowing: boolean;
}

export default function App() {
  const [movies, setMoive] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [isTile, setIsTile] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const getMoives = async () => {
    try {
      const res = await fetch(
        "https://698316669c3efeb892a45947.mockapi.io/movies",
      );
      const data = await res.json();
      setMoive(data);
    } catch (error) {
      console.log("Lỗi mạng:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMoives();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  const onRefresh = async () => {
    setRefreshing(true);
    await getMoives();
    setRefreshing(false);
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>Movie App</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text>Dạng lưới</Text>
            <Switch value={isTile} onValueChange={setIsTile} />
          </View>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            columnWrapperStyle={
              isTile
                ? { justifyContent: "space-between", paddingHorizontal: 10 }
                : undefined
            }
            numColumns={isTile ? 2 : 1}
            key={isTile ? "2" : "1"}
            data={movies}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MovieCard
                movie={item}
                onSelect={(id) => Alert.alert(item.title)}
                layout={isTile ? "tile" : "row"}
              />
            )}
          />
        </View>
      </SafeAreaView>
      {/* <StatusBar style="auto" /> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
