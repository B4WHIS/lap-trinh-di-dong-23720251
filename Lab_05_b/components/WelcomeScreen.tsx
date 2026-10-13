import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subTitle}>
        A premium online store for sporter and their stylish choice
      </Text>

      <View style={styles.imageCard}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80',
          }}
          style={styles.bikeImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.brandTitle}>POWER BIKE{'\n'}SHOP</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('BikeList')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  subTitle: {
    fontSize: 16,
    color: '#222',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  imageCard: {
    width: '100%',
    height: 320,
    backgroundColor: '#FDECEE',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  bikeImage: {
    width: '100%',
    height: '100%',
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    letterSpacing: 1,
  },
  button: {
    width: '100%',
    backgroundColor: '#E94141',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
