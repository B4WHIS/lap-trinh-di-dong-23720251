import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'BikeDetail'>;

export default function BikeDetailScreen({ route, navigation }: Props) {
  const { bike } = route.params;
  const [isFavorite, setIsFavorite] = useState<boolean>(bike.isFavorite);

  const handleAddToCart = () => {
    Alert.alert('Giỏ hàng', `Đã thêm ${bike.name} vào giỏ hàng!`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerBar}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageCard}>
          <Image
            source={{ uri: bike.image }}
            style={styles.bikeImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.bikeName}>{bike.name}</Text>

          <View style={styles.priceRow}>
            <Text style={styles.discountText}>
              {bike.discount || '15% OFF'}
            </Text>
            <Text style={styles.priceText}>{bike.price}$</Text>
          </View>

          <Text style={styles.descTitle}>Description</Text>
          <Text style={styles.descContent}>{bike.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <Text
            style={[
              styles.favoriteIcon,
              isFavorite && styles.favoriteIconActive,
            ]}
          >
            {isFavorite ? '❤️' : '♡'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addToCartButton}
          activeOpacity={0.8}
          onPress={handleAddToCart}
        >
          <Text style={styles.addToCartText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerBar: {
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  imageCard: {
    marginHorizontal: 16,
    height: 280,
    backgroundColor: '#FDECEE',
    borderRadius: 20,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bikeImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  bikeName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  discountText: {
    fontSize: 16,
    color: '#666',
    marginRight: 16,
  },
  priceText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  descTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  descContent: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  favoriteButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  favoriteIcon: {
    fontSize: 28,
    color: '#888',
  },
  favoriteIconActive: {
    color: '#E94141',
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: '#E94141',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
