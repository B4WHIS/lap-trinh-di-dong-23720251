import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

interface BookCardProps {
  title: string;
  author: string;
  price: string;
  coverUrl: string;
}

const BookGridCard = ({ title, author, price, coverUrl }: BookCardProps) => {
  return (
    <View style={styles.girdItem}>
      <View style={styles.imageContainer}>
        <Image style={styles.img} source={{ uri: coverUrl }}></Image>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>-20%</Text>
        </View>
      </View>
      <Text numberOfLines={2} style={{ fontWeight: "bold", marginTop: 6 }}>
        {title}
      </Text>
      <Text style={{ color: "#c36868", fontWeight: "bold", marginTop: 4 }}>
        {price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  girdItem: {
    width: "48%",
    marginBottom: 16,
    flexDirection: "column",
  },
  img: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 20,
  },
  imageContainer: {
    position: "relative",
  },
  badgeContainer: {
    position: "absolute",
    top: 6,
    left: 6,
  },
  badgeText: {
    borderWidth: 1,
    color: "#fff",
    backgroundColor: "#d44040",
    padding: 2,
    borderRadius: 9,
  },
});

export default BookGridCard;
