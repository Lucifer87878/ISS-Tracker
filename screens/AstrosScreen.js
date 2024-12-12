import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const AstrosScreen = () => {
  const [astronauts, setAstronauts] = useState([]);

  useEffect(() => {
    const fetchAstronauts = async () => {
      try {
        const response = await fetch('http://api.open-notify.org/astros.json');
        const data = await response.json();
        setAstronauts(data.people);
      } catch (error) {
        console.error('Error fetching astronaut data:', error);
      }
    };

    fetchAstronauts();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Astronauter i rymden</Text>
        <Text style={styles.count}>Antal: {astronauts.length} personer</Text> {/* Visar antal astronauter */}
        {astronauts.map((astronaut, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.name}>{astronaut.name}</Text>
            <Text style={styles.craft}>Farkost: {astronaut.craft}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 70,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  count: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  card: {
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    flexDirection: 'column',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  craft: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default AstrosScreen;
