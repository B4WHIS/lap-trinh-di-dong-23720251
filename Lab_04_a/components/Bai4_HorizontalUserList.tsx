import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
} from "react-native";

export interface User {
  id: string | number;
  name: string;
  email: string;
  phone?: string;
}

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function Bai4_HorizontalUserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Lỗi API bài 4:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    fetchUsers();
  };

  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#1BA9FF" />
        <Text style={styles.loadingText}>
          Đang tải danh sách User dạng ngang...
        </Text>
      </View>
    );
  }

  const renderHorizontalItem = ({ item }: { item: User }) => (
    <View style={styles.cardHorizontal}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>
          {item.name ? item.name.charAt(0).toUpperCase() : "U"}
        </Text>
      </View>

      <Text style={styles.userNameBold} numberOfLines={1}>
        {item.name}
      </Text>

      <Text style={styles.userEmail} numberOfLines={1}>
        {item.email}
      </Text>

      <TouchableOpacity style={styles.contactBtn}>
        <Text style={styles.contactBtnText}>Liên hệ</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bài 4: Horizontal User List</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          Danh sách thành viên (Cuộn ngang)
        </Text>
        <Text style={styles.sectionSubtitle}>
          Vuốt sang trái / phải để xem thêm
        </Text>

        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderHorizontalItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },
  header: {
    paddingVertical: 14,
    backgroundColor: "#1BA9FF",
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  content: {
    marginTop: 20,
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: "#777",
    marginBottom: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
  horizontalListContent: {
    paddingVertical: 10,
  },
  cardHorizontal: {
    width: 170,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginRight: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E1E4E8",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#4E54C8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  userNameBold: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2C3E50",
    textAlign: "center",
    marginBottom: 6,
    width: "100%",
  },
  userEmail: {
    fontSize: 12,
    color: "#7F8C8D",
    textAlign: "center",
    marginBottom: 12,
    width: "100%",
  },
  contactBtn: {
    backgroundColor: "#1BA9FF",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 15,
    marginTop: 4,
  },
  contactBtnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});
