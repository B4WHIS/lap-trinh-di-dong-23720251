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
    <View style={[styles.container, compact && styles.containerCompact]}>
      <TouchableOpacity
        style={[styles.contentTouch, compact && styles.contentTouchCompact]}
        activeOpacity={0.7}
        onPress={() => onPress(tour)}
      >
        <View style={compact ? styles.imageWrapperCompact : undefined}>
          <Image
            source={{ uri: tour.image }}
            style={[styles.image, compact && styles.imageCompact]}
          />
          {compact && (
            <TouchableOpacity
              testID="fav-btn"
              style={styles.favBtnCompact}
              onPress={() => onToggleFavorite(tour.id, !tour.isFavorite)}
            >
              <Text
                style={[
                  styles.favIcon,
                  tour.isFavorite && styles.favIconActive,
                ]}
              >
                {tour.isFavorite ? '♥' : '♡'}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={[styles.info, compact && styles.infoCompact]}>
          <Text
            style={[styles.name, compact && styles.nameCompact]}
            numberOfLines={compact ? 1 : 2}
          >
            {tour.name}
          </Text>

          {!compact && <Text style={styles.city}>{tour.city}</Text>}

          {!compact && (
            <Text style={styles.departure}>
              📅 {formatDate(tour.departure)} · {tour.days} ngày
            </Text>
          )}

          <View style={[styles.bottomRow, compact && styles.bottomRowCompact]}>
            <Text style={[styles.price, compact && styles.priceCompact]}>
              {tour.price.toLocaleString('vi-VN')} ₫
            </Text>
            {!compact && (
              <Text style={[styles.seats, isLimitedSeat && styles.seatsWarning]}>
                {getSeatLabel(tour.seats)}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>

      {!compact && (
        <TouchableOpacity
          testID="fav-btn"
          style={styles.favBtn}
          onPress={() => onToggleFavorite(tour.id, !tour.isFavorite)}
        >
          <Text style={[styles.favIcon, tour.isFavorite && styles.favIconActive]}>
            {tour.isFavorite ? '♥' : '♡'}
          </Text>
        </TouchableOpacity>
      )}
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
  containerCompact: {
    flexDirection: 'column',
    width: 160,
    marginHorizontal: 0,
    marginTop: 0,
    paddingRight: 0,
    overflow: 'hidden',
    alignItems: 'stretch',
  },
  contentTouch: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  contentTouchCompact: {
    flex: 0,
    flexDirection: 'column',
    padding: 0,
    alignItems: 'stretch',
  },
  imageWrapperCompact: {
    position: 'relative',
    width: '100%',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 6,
    backgroundColor: '#eee',
  },
  imageCompact: {
    width: '100%',
    height: undefined,
    aspectRatio: 4 / 3,
    borderRadius: 0,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  infoCompact: {
    flex: 0,
    marginLeft: 0,
    padding: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    marginBottom: 4,
  },
  nameCompact: {
    fontSize: 13,
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
  bottomRowCompact: {
    marginTop: 2,
    justifyContent: 'flex-start',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E53935',
  },
  priceCompact: {
    fontSize: 13,
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
  favBtnCompact: {
    position: 'absolute',
    top: 6,
    right: 6,
    zIndex: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 14,
    width: 28,
    height: 28,
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
