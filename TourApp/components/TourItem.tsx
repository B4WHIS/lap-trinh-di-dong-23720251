import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { formatDate, getSeatLabel } from '../utils/tour';

export interface Tour {
  id: string;
  name: string;
  city: string;
  days: number;
  price: number;
  seats: number;
  departure: string;
  image: string;
  isFavorite: boolean;
}

export interface TourItemProps {
  tour: Tour;
  compact?: boolean;
  onPress: (tour: Tour) => void;
  onToggleFavorite: (id: string, next: boolean) => void;
}

function TourItem({
  tour,
  compact = false,
  onPress,
  onToggleFavorite,
}: TourItemProps) {
  const isLimitedSeat = tour.seats <= 3;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentTouch}
        activeOpacity={0.7}
        onPress={() => onPress(tour)}
      >
        <Image source={{ uri: tour.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={2}>
            {tour.name}
          </Text>
          <Text style={styles.city}>{tour.city}</Text>
          <Text style={styles.departure}>
            📅 {formatDate(tour.departure)} · {tour.days} ngày
          </Text>
          <View style={styles.bottomRow}>
            <Text style={styles.price}>
              {tour.price.toLocaleString('vi-VN')} ₫
            </Text>
            <Text style={[styles.seats, isLimitedSeat && styles.seatsWarning]}>
              {getSeatLabel(tour.seats)}
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        testID="fav-btn"
        style={styles.favBtn}
        onPress={() => onToggleFavorite(tour.id, !tour.isFavorite)}
      >
        <Text style={[styles.favIcon, tour.isFavorite && styles.favIconActive]}>
          {tour.isFavorite ? '♥' : '♡'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
    paddingRight: 8,
  },
  contentTouch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 6,
    backgroundColor: '#eee',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  city: {
    fontSize: 13,
    color: '#666',
    marginBottom: 2,
  },
  departure: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E53935',
  },
  seats: {
    fontSize: 12,
    color: '#2E7D32',
    fontWeight: '500',
  },
  seatsWarning: {
    color: '#D32F2F',
  },
  favBtn: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favIcon: {
    fontSize: 24,
    color: '#999',
  },
  favIconActive: {
    color: '#E53935',
  },
});

export default React.memo(TourItem);
