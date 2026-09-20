import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const BookDetailScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={styles.img}
          source={{
            uri: "https://www.netabooks.vn/Data/Sites/1/Product/17752/toi-thay-hoa-vang-tren-co-xanh.jpg",
          }}
        ></Image>
        <View style={styles.info}>
          <Text style={styles.BookTitle}>
            Tên sách: Tôi Thấy Hoa Vàng Trên Cỏ Xanh
          </Text>
          <Text style={styles.BookAuthor}>Tác giả: Nguyễn Nhật Ánh</Text>
          <Text style={styles.BookPrice}>Giá: 120.000₫</Text>
          <Text style={styles.DescriptionText}>
            Mô tả: Tôi thấy hoa vàng trên cỏ xanh không chỉ là câu chuyện về
            tuổi thơ mà còn là nơi lưu giữ những nỗi buồn trong trẻo, những bài
            học vỡ lòng về tình yêu thương, sự đố kỵ và lòng bao dung. Cuốn sách
            đưa người đọc trở về những năm tháng bình yên ở làng quê với cánh
            đồng xanh mướt, nơi mỗi đứa trẻ đều mang trong mình một thế giới nội
            tâm phong phú.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.cart}>
        <Text>Thêm vào giỏ hàng</Text>
        <AntDesign name="shopping-cart" size={24} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    // borderWidth: 1,
    width: "60%",
    aspectRatio: 3 / 4,
    borderRadius: 20,
    alignSelf: "center",
    margin: 20,
  },
  info: {
    flexDirection: "column",
    flexWrap: "wrap",
    borderWidth: 2,
    margin: 20,
    padding: 30,
    backgroundColor: "#f5f5f5",
    borderColor: "#f08c8c",
    borderStyle: "dashed",
    borderRadius: 20,
  },
  BookTitle: {
    // borderWidth: 1,
    fontWeight: "bold",
  },
  BookAuthor: {
    // borderWidth: 1,
    marginTop: 10,
    fontWeight: "bold",
  },
  BookPrice: {
    // borderWidth: 1,
    marginTop: 10,
    color: "#ca6b6b",
    fontWeight: "bold",
  },
  DescriptionText: {
    // borderWidth: 1,
    marginTop: 10,
    fontStyle: "italic",
  },
  cart: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "#febcbc",
  },
});

export default BookDetailScreen;
