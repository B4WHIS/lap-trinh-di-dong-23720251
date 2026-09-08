import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";



const BookCard = () => {
  return (
    <View style={styles.BookCard}>
      <Image
        style={styles.Image}
        source={{
          uri: "https://www.nxbtre.com.vn/Images/Book/nxbtre_full_25412024_024109.jpg",
        }}
      ></Image>
      <View style={styles.InfoContainer}>
        <View style={styles.Info}>
          <Text style={styles.BookTitle} numberOfLines={2}>
            Tiệm sách của nàng
          </Text>
          <Text style={styles.BookAuthor}>Nguyễn Nhật Ánh</Text>
        </View>
        <View>
          <Text style={styles.PriceText}>100.000đ</Text>
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
