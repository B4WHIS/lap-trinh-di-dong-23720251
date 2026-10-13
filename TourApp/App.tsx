import React, { useEffect, useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SectionList,
  FlatList,
  ActivityIndicator,
  Alert,
  RefreshControl,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Tour, groupByCity, formatDate } from './utils/tour';
import { INITIAL_TOURS } from './data';
import TourItem from './components/TourItem';

const API_URL = 'https://6ace1c08f338359cf1c31d6f.mockapi.io/tours';

export default function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const fetchTours = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setTours(data);
      } else {
        setTours(INITIAL_TOURS);
      }
    } catch (error) {
      setTours(INITIAL_TOURS);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchTours();
  };

  const handlePressTour = (tour: Tour) => {
    Alert.alert(
      'Thông tin tour',
      `Tên: ${tour.name}\nKhởi hành: ${formatDate(tour.departure)}\nSố ngày: ${tour.days} ngày\nGiá: ${tour.price.toLocaleString('vi-VN')} ₫`
    );
  };

  const handleToggleFavorite = async (id: string, next: boolean) => {
    setTours((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isFavorite: next } : t))
    );

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isFavorite: next }),
      });

      if (!res.ok) {
        throw new Error('Lỗi cập nhật API');
      }
    } catch (error) {
      setTours((prev) =>
        prev.map((t) => (t.id === id ? { ...t, isFavorite: !next } : t))
      );
      Alert.alert(
        'Lỗi cập nhật',
        'Không thể cập nhật trạng thái yêu thích từ máy chủ. Đã hoàn tác!'
      );
    }
  };

  const filteredTours = useMemo(() => {
    const keyword = searchText.trim().toLowerCase();
    if (!keyword) return tours;
    return tours.filter((t) => t.name.toLowerCase().includes(keyword));
  }, [tours, searchText]);

  const sections = useMemo(() => {
    return groupByCity(filteredTours).filter(
      (section) => section.data.length > 0
    );
  }, [filteredTours]);

  const favoriteTours = useMemo(() => {
    return tours.filter((t) => t.isFavorite);
  }, [tours]);

  const renderFavoriteHeader = () => (
    <View style={styles.favoriteSection}>
      <Text style={styles.favoriteTitle}>
        Tour yêu thích ({favoriteTours.length})
      </Text>
      {favoriteTours.length === 0 ? (
        <Text style={styles.emptyFavoriteText}>Chưa có tour yêu thích</Text>
      ) : (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={favoriteTours}
          keyExtractor={(item) => 'fav-' + item.id}
          ItemSeparatorComponent={() => <View style={styles.favSeparator} />}
          renderItem={({ item }) => (
            <TourItem
              tour={item}
              compact={true}
              onPress={handlePressTour}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
          contentContainerStyle={styles.favoriteListContent}
        />
      )}
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />

        <View style={styles.header}>
          <Text style={styles.title}>Tour Việt</Text>
          <Text style={styles.studentInfo}>23720251 - Nguyễn Hoàng Thái Bình</Text>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm tour theo tên..."
              placeholderTextColor="#888"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
        </View>

        <View style={styles.content}>
          {loading ? (
            <View style={styles.centerContainer}>
              <ActivityIndicator size="large" color="#0066CC" />
              <Text style={styles.loadingText}>Đang tải danh sách tour...</Text>
            </View>
          ) : (
            <SectionList
              sections={sections}
              keyExtractor={(item) => item.id}
              stickySectionHeadersEnabled={true}
              ListHeaderComponent={renderFavoriteHeader}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  colors={['#0066CC']}
                />
              }
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.emptyText}>
                    Không tìm thấy tour phù hợp
                  </Text>
                </View>
              }
              renderSectionHeader={({ section: { title, data } }) => (
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionHeaderText}>
                    {title} · {data.length} tour
                  </Text>
                </View>
              )}
              renderItem={({ item }) => (
                <TourItem
                  tour={item}
                  compact={false}
                  onPress={handlePressTour}
                  onToggleFavorite={handleToggleFavorite}
                />
              )}
              contentContainerStyle={styles.listContent}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 4,
  },
  studentInfo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
    fontWeight: '500',
  },
  searchContainer: {
    backgroundColor: '#F0F2F5',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 42,
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 14,
    color: '#000',
    paddingVertical: 0,
  },
  content: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: '#555',
  },
  favoriteSection: {
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 8,
  },
  favoriteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  emptyFavoriteText: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    marginHorizontal: 16,
    paddingVertical: 8,
  },
  favoriteListContent: {
    paddingHorizontal: 16,
    paddingBottom: 4,
  },
  favSeparator: {
    width: 12,
  },
  listContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    backgroundColor: '#EBF3FC',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D2E3FC',
  },
  sectionHeaderText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0052A3',
  },
  emptyContainer: {
    paddingVertical: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 15,
    color: '#777',
    fontStyle: 'italic',
  },
});
