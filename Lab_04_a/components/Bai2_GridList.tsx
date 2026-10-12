import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

interface CableProduct {
  id: string;
  name: string;
  price: string;
  discount: string;
  reviewsCount: number;
  image: string;
}

const CABLE_DATA: CableProduct[] = [
  {
    id: "1",
    name: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: "-39%",
    reviewsCount: 15,
    image:
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=200&q=80",
  },
  {
    id: "2",
    name: "Cáp chuyển từ Cổng USB sang PS2 chính hãng...",
    price: "69.900 đ",
    discount: "-39%",
    reviewsCount: 15,
    image:
      "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=200&q=80",
  },
  {
    id: "3",
    name: "Cáp chuyển đổi tín hiệu USB đa năng...",
    price: "69.900 đ",
    discount: "-39%",
    reviewsCount: 15,
    image:
      "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=200&q=80",
  },
  {
    id: "4",
    name: "Cáp chuyển từ Cổng USB sang PS2 cao cấp...",
    price: "69.900 đ",
    discount: "-39%",
    reviewsCount: 15,
    image:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=200&q=80",
  },
  {
    id: "5",
    name: "Cáp kết nối USB sang đầu chia tín hiệu...",
    price: "69.900 đ",
    discount: "-39%",
    reviewsCount: 15,
    image:
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=200&q=80",
  },
  {
    id: "6",
    name: "Cáp chuyển đổi mini cho thiết bị công nghệ...",
    price: "69.900 đ",
    discount: "-39%",
    reviewsCount: 15,
    image:
      "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?w=200&q=80",
  },
];

export default function Bai2_GridList() {
  const [searchText, setSearchText] = useState("Dây cáp usb");

  const renderProductItem = ({ item }: { item: CableProduct }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => Alert.alert("Chi tiết", item.name)}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />

      <Text style={styles.cardTitle} numberOfLines={2}>
        {item.name}
      </Text>

      <View style={styles.ratingRow}>
        <Text style={styles.stars}>★★★★★</Text>
        <Text style={styles.reviewCount}>({item.reviewsCount})</Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn}>
          <Text style={styles.headerIconText}>‹</Text>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Tìm kiếm sản phẩm..."
            placeholderTextColor="#888"
          />
        </View>

        <TouchableOpacity style={styles.headerBtn}>
          <Text style={styles.headerIconText}>🛒</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerBtn}>
          <Text style={styles.headerDots}>⋯</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={CABLE_DATA}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={renderProductItem}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomItem}>
          <Text style={styles.bottomIcon}>☰</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem}>
          <Text style={styles.bottomIcon}>⌂</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomItem}>
          <Text style={styles.bottomIcon}>↩</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 54,
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  headerBtn: {
    padding: 6,
  },
  headerIconText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerDots: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 4,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    height: 34,
    paddingHorizontal: 8,
    marginHorizontal: 10,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: "#000",
    paddingVertical: 0,
  },
  listContent: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 14,
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  cardImage: {
    width: "100%",
    height: 110,
    resizeMode: "contain",
    backgroundColor: "#fafafa",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "500",
    color: "#000",
    lineHeight: 16,
    height: 32,
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  stars: {
    color: "#F9CA24",
    fontSize: 13,
    marginRight: 4,
  },
  reviewCount: {
    fontSize: 11,
    color: "#666",
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
    marginRight: 10,
  },
  discount: {
    fontSize: 12,
    color: "#999",
    fontWeight: "500",
  },
  bottomBar: {
    height: 50,
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 28,
  },
  bottomItem: {
    padding: 8,
  },
  bottomIcon: {
    color: "#000",
    fontSize: 22,
  },
});
