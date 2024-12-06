import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';

const MapScreen = () => {
  const [issPosition, setIssPosition] = useState({ latitude: 0, longitude: 0 });
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [speed, setSpeed] = useState(27600);

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
    const interval = setInterval(fetchISSData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.info}>ISS:s nuvarande position</Text>
      
      {!isFullScreen && (
        <View style={styles.infoBox}>
          <Text style={styles.label}>Current ISS Position:</Text>
          <Text>Latitude: {issPosition.latitude}</Text>
          <Text>Longitude: {issPosition.longitude}</Text>
          <Text>Speed: {speed} km/h</Text>
        </View>
      )}

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
  infoBox: {
    marginBottom: 10,
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    alignSelf: 'center',
    width: '90%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
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
