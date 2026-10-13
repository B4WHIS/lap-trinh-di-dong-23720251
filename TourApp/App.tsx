import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SectionList,
  ActivityIndicator,
  Image,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Tour, groupByCity } from "./utils/tour";
import { INITIAL_TOURS } from "./data";

const API_URL = "https://698316669c3efeb892a45947.mockapi.io/tours";

export default function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchText, setSearchText] = useState<string>("");

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

  const sections = groupByCity(tours);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />

        <View style={styles.header}>
          <Text style={styles.title}>Tour Việt</Text>
          <Text style={styles.studentInfo}>
            23720251 - Nguyễn Hoàng Thái Bình
          </Text>
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
                <View style={styles.tourCard}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.tourImage}
                  />
                  <View style={styles.tourInfo}>
                    <Text style={styles.tourName}>{item.name}</Text>
                    <Text style={styles.tourMeta}>
                      {item.city} · {item.days} ngày · {item.departure}
                    </Text>
                    <Text style={styles.tourPrice}>
                      {item.price.toLocaleString("vi-VN")} ₫
                    </Text>
                  </View>
                </View>
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
    backgroundColor: "#fff",
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0066CC",
    marginBottom: 4,
  },
  studentInfo: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
    fontWeight: "500",
  },
  searchContainer: {
    backgroundColor: "#F0F2F5",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 42,
    justifyContent: "center",
  },
  searchInput: {
    fontSize: 14,
    color: "#000",
    paddingVertical: 0,
  },
  content: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
  listContent: {
    paddingBottom: 20,
  },
  sectionHeader: {
    backgroundColor: "#EBF3FC",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D2E3FC",
  },
  sectionHeaderText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0052A3",
  },
  tourCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  tourImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
    backgroundColor: "#eee",
  },
  tourInfo: {
    flex: 1,
    marginLeft: 12,
  },
  tourName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },
  tourMeta: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },
  tourPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#E53935",
  },
});
