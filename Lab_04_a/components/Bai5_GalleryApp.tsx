import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';

export interface GalleryItem {
  id: string | number;
  title: string;
  url: string;
  author?: string;
}

const PHOTO_API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=12';

const BACKUP_PHOTOS: GalleryItem[] = [
  {
    id: '1',
    title: 'Bình minh trên biển',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
    author: 'Tuấn Anh',
  },
  {
    id: '2',
    title: 'Rừng thông Đà Lạt',
    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&q=80',
    author: 'Bảo Ngọc',
  },
  {
    id: '3',
    title: 'Hoàng hôn thành phố',
    url: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=400&q=80',
    author: 'Minh Quân',
  },
  {
    id: '4',
    title: 'Đồi chè xanh mát',
    url: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400&q=80',
    author: 'Thái Bình',
  },
  {
    id: '5',
    title: 'Thác nước thiên nhiên',
    url: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&q=80',
    author: 'Khánh Linh',
  },
  {
    id: '6',
    title: 'Cánh đồng hoa nở',
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80',
    author: 'Hoàng Nam',
  },
];

export default function Bai5_GalleryApp() {
  const [photos, setPhotos] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isGridView, setIsGridView] = useState<boolean>(false);

  const fetchPhotos = async () => {
    try {
      const res = await fetch(PHOTO_API_URL);
      const data = await res.json();
      const formattedData: GalleryItem[] = data.map((item: any, index: number) => ({
        id: item.id.toString(),
        title: item.title,
        url: BACKUP_PHOTOS[index % BACKUP_PHOTOS.length].url,
        author: `Nhiếp ảnh gia #${item.id}`,
      }));
      setPhotos(formattedData);
    } catch (error) {
      console.log('Lỗi tải ảnh API:', error);
      setPhotos(BACKUP_PHOTOS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#1BA9FF" />
        <Text style={styles.loadingText}>Đang tải bộ sưu tập hình ảnh...</Text>
      </View>
    );
  }

  const renderFeaturedItem = ({ item }: { item: GalleryItem }) => (
    <TouchableOpacity
      style={styles.featuredCard}
      onPress={() => Alert.alert('Ảnh nổi bật', item.title)}
    >
      <Image source={{ uri: item.url }} style={styles.featuredImage} />
      <View style={styles.featuredOverlay}>
        <Text style={styles.featuredTitle} numberOfLines={1}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderMainItem = ({ item }: { item: GalleryItem }) => {
    if (isGridView) {
      return (
        <TouchableOpacity
          style={styles.gridCard}
          onPress={() => Alert.alert('Xem ảnh', item.title)}
        >
          <Image source={{ uri: item.url }} style={styles.gridImage} />
          <Text style={styles.gridTitle} numberOfLines={1}>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={styles.listCard}
        onPress={() => Alert.alert('Xem ảnh', item.title)}
      >
        <Image source={{ uri: item.url }} style={styles.listImage} />
        <View style={styles.listInfo}>
          <Text style={styles.listTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.listAuthor}>{item.author || 'Tác giả'}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gallery App</Text>
      </View>

      <View style={styles.descBox}>
        <Text style={styles.appTitle}>Bộ Sưu Tập Nghệ Thuật</Text>
        <Text style={styles.appSubtitle}>
          Khám phá những khoảnh khắc tuyệt đẹp từ các nhiếp ảnh gia trên toàn thế giới.
        </Text>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Ảnh Nổi Bật (Cuộn ngang)</Text>
      </View>
      <FlatList
        data={photos.slice(0, 5)}
        keyExtractor={(item) => 'feat-' + item.id}
        renderItem={renderFeaturedItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalListContainer}
      />

      <View style={styles.toggleRow}>
        <Text style={styles.sectionTitle}>
          Tất cả ảnh: {isGridView ? 'GridView (2 cột)' : 'ListView (1 cột)'}
        </Text>

        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsGridView(!isGridView)}
        >
          <Text style={styles.toggleButtonText}>
            {isGridView ? 'Chuyển sang 1 cột' : 'Chuyển sang 2 cột'}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        key={isGridView ? 'grid-2' : 'list-1'}
        data={photos}
        keyExtractor={(item) => 'main-' + item.id}
        renderItem={renderMainItem}
        numColumns={isGridView ? 2 : 1}
        scrollEnabled={false}
        columnWrapperStyle={isGridView ? styles.gridColumnWrapper : undefined}
        contentContainerStyle={styles.mainListContainer}
      />

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  header: {
    backgroundColor: '#1BA9FF',
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  descBox: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  appTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 13,
    color: '#7F8C8D',
    lineHeight: 18,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  horizontalListContainer: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  featuredCard: {
    width: 200,
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
    backgroundColor: '#ddd',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
  },
  toggleButton: {
    backgroundColor: '#1BA9FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  mainListContainer: {
    paddingHorizontal: 16,
  },
  listCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  listImage: {
    width: 80,
    height: 60,
    borderRadius: 6,
    backgroundColor: '#eee',
  },
  listInfo: {
    flex: 1,
    marginLeft: 12,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  listAuthor: {
    fontSize: 12,
    color: '#888',
  },
  gridColumnWrapper: {
    justifyContent: 'space-between',
  },
  gridCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  gridImage: {
    width: '100%',
    height: 100,
    borderRadius: 6,
    backgroundColor: '#eee',
    marginBottom: 6,
  },
  gridTitle: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 60,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
});
