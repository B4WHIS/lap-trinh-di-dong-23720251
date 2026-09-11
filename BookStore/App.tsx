import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import BookCard from "./components/BookCard";
import CategoryChips from "./components/CategoryChips";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <CategoryChips />
      <BookCard
        title="Tôi Thấy Hoa Vàng Trên Cỏ Xanh"
        author="Nguyễn Nhật Ánh"
        price="120.000₫"
        coverUrl="https://www.netabooks.vn/Data/Sites/1/Product/17752/toi-thay-hoa-vang-tren-co-xanh.jpg"
      />
      <BookCard
        title="Làm Bạn Với Bầu Trời"
        author="Nguyễn Nhật Ánh"
        price="187.000₫"
        coverUrl="https://www.netabooks.vn/Data/Sites/1/Product/30286/lam-ban-voi-bau-troi-bia-cung-1.jpg"
      />
      <BookCard
        title="Đảo Mộng Mơ"
        author="Nguyễn Nhật Ánh"
        price="70.000₫"
        coverUrl="https://www.netabooks.vn/Data/Sites/1/Product/17752/toi-thay-hoa-vang-tren-co-xanh.jpg"
      />
      <BookCard
        title="Tư Duy Chiến Lược Thực Chiến"
        author="Seth Godin"
        price="215.200₫"
        coverUrl="https://www.netabooks.vn/Data/Sites/1/Product/80232/tu-duy-chien-luoc-thuc-chien-seth-godin.jpg"
      />
      <BookCard
        title="MBA Bằng Hình - The Usual MBA"
        author="Jason Barron"
        price="174.400₫"
        coverUrl="https://www.netabooks.vn/Data/Sites/1/Product/68744/mba-bang-hinh-the-usual-mba.jpg"
      />
      <BookCard
        title="Giành Lại Tri Thức"
        author="Michael F. D. Young"
        price="135.000₫"
        coverUrl="https://www.netabooks.vn/Data/Sites/1/Product/24554/gianh-lai-tri-thuc-01.jpg"
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
