import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#FFC328', '#E20000']}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.9, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Välkommen till ISS-Tracker!</Text>     
      <Pressable onPress={() => navigation.navigate('Map')} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#FFD439', '#FF7A00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Visa Karta</Text>
        </LinearGradient>
      </Pressable>    
      <Pressable onPress={() => navigation.navigate('Info')} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#FFD439', '#FF7A00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Information om ISS</Text>
        </LinearGradient>
      </Pressable> 
      <Pressable onPress={() => navigation.navigate('Apod')} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#FFD439', '#FF7A00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Astronomy Picture of the Day</Text>
        </LinearGradient>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Astronaut')} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#FFD439', '#FF7A00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.buttonText}>Astronauter i Rymden</Text>
        </LinearGradient>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  buttonContainer: {
    marginVertical: 10,
    borderRadius: 22,
    overflow: 'hidden',
    width: '70%',
  },
  gradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 22,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
