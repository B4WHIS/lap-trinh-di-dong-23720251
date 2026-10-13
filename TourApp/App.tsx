import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SectionList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Tour, groupByCity, formatDate } from './utils/tour';
import { INITIAL_TOURS } from './data';
import TourItem from './components/TourItem';

const API_URL = 'https://698316669c3efeb892a45947.mockapi.io/tours';

export default function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handlePressTour = (tour: Tour) => {
    Alert.alert(
      'Thông tin tour',
      `Tên: ${tour.name}\nKhởi hành: ${formatDate(tour.departure)}\nSố ngày: ${tour.days} ngày\nGiá: ${tour.price.toLocaleString('vi-VN')} ₫`
    );
  };

  const handleToggleFavorite = (id: string, next: boolean) => {
    setTours((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isFavorite: next } : t))
    );
  };

  const sections = groupByCity(tours);

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
});
