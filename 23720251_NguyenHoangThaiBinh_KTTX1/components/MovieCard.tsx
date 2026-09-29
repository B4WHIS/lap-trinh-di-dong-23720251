import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import { Movie } from "../App";

interface MovieCardProps {
  movie: Movie;
  layout?: "row" | "tile";
  onSelect: (id: string) => void;
}

const MovieCard = ({ movie, layout = "row", onSelect }: MovieCardProps) => {
  const isTile = layout === "tile";
  return (
    <TouchableOpacity
      style={[styles.card, isTile && styles.cardTile]}
      onPress={() => onSelect(movie.id)}
    >
      <View style={{ position: "relative" }}>
        <Image
          style={[styles.poster, isTile && styles.posterTile]}
          source={{ uri: movie.poster }}
        />
        {isTile && (
          <Text style={styles.ratingTile}>
            ⭐ {Number(movie.rating).toFixed(1)}
          </Text>
        )}
      </View>
      <View style={{ flex: 1, paddingLeft: 10 }}>
        {!isTile && (
          <Text>
            {movie.genre} - {movie.year}
          </Text>
        )}
        {!isTile && (
          <Text style={styles.rating}>
            ⭐ {Number(movie.rating).toFixed(1)}
          </Text>
        )}
        <Text numberOfLines={1}>{movie.title}</Text>
        <Text>{movie.isShowing ? "✅" : "❌"}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  cardTile: { flexDirection: "column", width: "48%" },
  poster: { width: 70, height: 100, resizeMode: "cover" },
  posterTile: { width: "100%", aspectRatio: 2 / 3 },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#e67e22",
    marginVertical: 2,
  },
  ratingTile: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 3,
    borderRadius: 4,
    color: "#fff",
  },
});

export default React.memo(MovieCard);
