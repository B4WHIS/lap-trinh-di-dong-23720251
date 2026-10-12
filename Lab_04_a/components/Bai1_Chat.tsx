import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

interface ProductItem {
  id: string;
  name: string;
  shopName: string;
  image: string;
}

const DATA: ProductItem[] = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini đa năng siêu tốc',
    shopName: 'Shop DeVang',
    image:
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=150&q=80',
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ CAY BƠ TỎI HÀNG ĐẶC BIỆT',
    shopName: 'Shop LTD Food',
    image:
      'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=150&q=80',
  },
  {
    id: '3',
    name: 'Xe cần cẩu công trình cỡ lớn cho bé',
    shopName: 'Shop Thế giới đồ chơi',
    image:
      'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=150&q=80',
  },
  {
    id: '4',
    name: 'Đồ chơi mô hình lắp ráp siêu xe mini',
    shopName: 'Shop Thế giới đồ chơi',
    image:
      'https://images.unsplash.com/photo-1558877385-81a1c7e67d72?w=150&q=80',
  },
  {
    id: '5',
    name: 'Sách: Lãnh đạo giản đơn - Bí quyết thành công',
    shopName: 'Shop Minh Long Book',
    image:
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&q=80',
  },
  {
    id: '6',
    name: 'Sách: Hiểu về trái tim - Tác giả Minh Niệm',
    shopName: 'Shop Minh Long Book',
    image:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=150&q=80',
  },
];

export default function Bai1_Chat() {
  const handleChatPress = (shopName: string) => {
    Alert.alert('Nhắn tin', `Bắt đầu chat với ${shopName}`);
  };

  const renderItem = ({ item }: { item: ProductItem }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />

      <View style={styles.infoContainer}>
        <Text style={styles.productName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.shopName}>{item.shopName}</Text>
      </View>

      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => handleChatPress(item.shopName)}
      >
        <Text style={styles.chatButtonText}>CHAT</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerIconText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerIconText}>🛒</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.noticeBar}>
        <Text style={styles.noticeText}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
        </Text>
      </View>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
    backgroundColor: '#e5e5e5',
  },
  header: {
    height: 50,
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerButton: {
    padding: 5,
  },
  headerIconText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  noticeBar: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#d6d6d6',
  },
  noticeText: {
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
  },
  listContent: {
    paddingBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  productImage: {
    width: 74,
    height: 74,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
  },
  shopName: {
    fontSize: 13,
    color: '#E53935',
  },
  chatButton: {
    backgroundColor: '#F31111',
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 2,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  bottomBar: {
    height: 50,
    backgroundColor: '#1BA9FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 28,
  },
  bottomItem: {
    padding: 8,
  },
  bottomIcon: {
    color: '#000',
    fontSize: 22,
  },
});
