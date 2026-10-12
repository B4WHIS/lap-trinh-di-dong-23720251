import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Bai1_Chat from './components/Bai1_Chat';
import Bai2_GridList from './components/Bai2_GridList';
import Bai3_ApiUserList from './components/Bai3_ApiUserList';
import Bai4_HorizontalUserList from './components/Bai4_HorizontalUserList';
import Bai5_GalleryApp from './components/Bai5_GalleryApp';

export default function App() {
  const [currentTab, setCurrentTab] = useState<number>(1);

  const renderCurrentExercise = () => {
    switch (currentTab) {
      case 1:
        return <Bai1_Chat />;
      case 2:
        return <Bai2_GridList />;
      case 3:
        return <Bai3_ApiUserList />;
      case 4:
        return <Bai4_HorizontalUserList />;
      case 5:
        return <Bai5_GalleryApp />;
      default:
        return <Bai1_Chat />;
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />

        <View style={styles.menuContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollMenu}
          >
            <TouchableOpacity
              style={[styles.menuTab, currentTab === 1 && styles.activeTab]}
              onPress={() => setCurrentTab(1)}
            >
              <Text
                style={[
                  styles.menuTabText,
                  currentTab === 1 && styles.activeTabText,
                ]}
              >
                Bài 1: Chat
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuTab, currentTab === 2 && styles.activeTab]}
              onPress={() => setCurrentTab(2)}
            >
              <Text
                style={[
                  styles.menuTabText,
                  currentTab === 2 && styles.activeTabText,
                ]}
              >
                Bài 2: Grid 2 Cột
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuTab, currentTab === 3 && styles.activeTab]}
              onPress={() => setCurrentTab(3)}
            >
              <Text
                style={[
                  styles.menuTabText,
                  currentTab === 3 && styles.activeTabText,
                ]}
              >
                Bài 3: User API
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuTab, currentTab === 4 && styles.activeTab]}
              onPress={() => setCurrentTab(4)}
            >
              <Text
                style={[
                  styles.menuTabText,
                  currentTab === 4 && styles.activeTabText,
                ]}
              >
                Bài 4: Horizontal
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuTab, currentTab === 5 && styles.activeTab]}
              onPress={() => setCurrentTab(5)}
            >
              <Text
                style={[
                  styles.menuTabText,
                  currentTab === 5 && styles.activeTabText,
                ]}
              >
                Bài 5: Gallery
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.contentContainer}>{renderCurrentExercise()}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuContainer: {
    backgroundColor: '#2C3E50',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#1A252F',
  },
  scrollMenu: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  menuTab: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#34495E',
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#1BA9FF',
  },
  menuTabText: {
    color: '#BDC3C7',
    fontSize: 13,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
  },
});
