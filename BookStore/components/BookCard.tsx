import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

interface BookCardProps {
  title: string;
  author: string;
  price: string;
  coverUrl: string;
}

const BookCard = ({ title, author, price, coverUrl }: BookCardProps) => {
  return (
    <View style={styles.BookCard}>
      <Image
        style={styles.Image}
        source={{
          uri: coverUrl,
        }}
      ></Image>
      <View style={styles.InfoContainer}>
        <View style={styles.Info}>
          <Text style={styles.BookTitle} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.BookAuthor}>{author}</Text>
        </View>
        <View>
          <Text style={styles.PriceText}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BookCard: {
    flexDirection: "row",
    borderWidth: 1,
    margin: 16,
    padding: 8,
    borderRadius: 6,
    borderColor: "#531c1c",
  },
  Image: {
    width: 80,
    height: 110,
    backgroundColor: "#5ebd5f",

    borderRadius: 6,
  },
  InfoContainer: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: 12,
    // borderWidth:1
  },
  Info: {},
  BookTitle: { fontSize: 16, fontWeight: "bold", color: "#a35a5a" },
  BookAuthor: { fontSize: 13, color: "#b06262" },
  PriceText: { fontWeight: "bold", color: "#966464" },
  
});

export default BookCard;
