import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';

const MapScreen = () => {
  const [issPosition, setIssPosition] = useState({ latitude: 0, longitude: 0 });
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const fetchISSData = async () => {
      try {
        const response = await fetch('http://api.open-notify.org/iss-now.json');
        const data = await response.json();
        setIssPosition({
          latitude: parseFloat(data.iss_position.latitude),
          longitude: parseFloat(data.iss_position.longitude),
        });
      } catch (error) {
        console.error('Error fetching ISS data:', error);
      }
    };

    fetchISSData();
    const interval = setInterval(fetchISSData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.info}>ISS:s nuvarande position</Text>
      <TouchableOpacity
        onPress={() => setIsFullScreen(!isFullScreen)}
        style={isFullScreen ? styles.fullScreenMap : styles.halfScreenMap}
      >
        <MapView
          style={styles.map}
          region={{
            latitude: issPosition.latitude,
            longitude: issPosition.longitude,
            latitudeDelta: 30,
            longitudeDelta: 30,
          }}
        >
          <Marker
            coordinate={issPosition}
            title="ISS"
            description={`Lat: ${issPosition.latitude}, Lng: ${issPosition.longitude}`}
          />
        </MapView>
      </TouchableOpacity>
      {!isFullScreen && (
        <TouchableOpacity onPress={() => setIsFullScreen(true)} style={styles.buttonContainer}>
          <LinearGradient
            colors={['#FFD439', '#FF7A00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Visa helskärm</Text>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
    paddingTop: 70, 
  },
  map: {
    flex: 1,
  },
  halfScreenMap: {
    height: height / 2,
  },
  fullScreenMap: {
    height: height,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 22,
    overflow: 'hidden', 
    alignSelf: 'center', 
    width: '50%',
  },
  gradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 22,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapScreen;
