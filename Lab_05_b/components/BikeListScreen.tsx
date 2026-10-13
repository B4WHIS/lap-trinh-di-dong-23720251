import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, BikeItem } from '../types';
import { BIKES_DATA } from '../data';

type Props = NativeStackScreenProps<RootStackParamList, 'BikeList'>;

export default function BikeListScreen({ navigation }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Roadbike' | 'Mountain'>('All');
  const [bikes, setBikes] = useState<BikeItem[]>(BIKES_DATA);

  const filteredBikes =
    selectedCategory === 'All'
      ? bikes
      : bikes.filter((b) => b.category === selectedCategory);

  const toggleFavorite = (id: string) => {
    setBikes((prev) =>
      prev.map((b) => (b.id === id ? { ...b, isFavorite: !b.isFavorite } : b))
    );
  };

  const renderBikeItem = ({ item }: { item: BikeItem }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('BikeDetail', { bike: item })}
    >
      <TouchableOpacity
        style={styles.favoriteBtn}
        onPress={() => toggleFavorite(item.id)}
      >
        <Text style={[styles.favoriteIcon, item.isFavorite && styles.favoriteActive]}>
          {item.isFavorite ? '❤️' : '♡'}
        </Text>
      </TouchableOpacity>

      <Image
        source={{ uri: item.image }}
        style={styles.bikeImage}
        resizeMode="contain"
      />

      <Text style={styles.bikeName}>{item.name}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.currencySymbol}>$</Text>
        <Text style={styles.priceValue}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>The world's Best Bike</Text>

      <View style={styles.categoryRow}>
        {(['All', 'Roadbike', 'Mountain'] as const).map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <TouchableOpacity
              key={cat}
              style={[styles.categoryBtn, isActive && styles.categoryBtnActive]}
              onPress={() => setSelectedCategory(cat)}
            >
              <Text
                style={[
                  styles.categoryText,
                  isActive && styles.categoryTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <FlatList
        data={filteredBikes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={renderBikeItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#E94141',
    marginTop: 10,
    marginBottom: 20,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryBtn: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#E8B6B6',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  categoryBtnActive: {
    borderColor: '#E94141',
  },
  categoryText: {
    fontSize: 14,
    color: '#BEB6B6',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#E94141',
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '48%',
    backgroundColor: '#FDF5F5',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    position: 'relative',
  },
  favoriteBtn: {
    position: 'absolute',
    top: 8,
    left: 8,
    zIndex: 1,
    padding: 4,
  },
  favoriteIcon: {
    fontSize: 18,
    color: '#888',
  },
  favoriteActive: {
    color: '#E94141',
  },
  bikeImage: {
    width: '100%',
    height: 110,
    marginVertical: 10,
  },
  bikeName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySymbol: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F7BA34',
    marginRight: 4,
  },
  priceValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});
