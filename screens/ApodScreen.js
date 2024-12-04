import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const ApodScreen = () => {
  const [apod, setApod] = useState(null);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();
        setApod(data);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
      }
    };

    fetchApod();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {apod && (
          <>
            <Text style={styles.title}>{apod.title}</Text>
            <Image source={{ uri: apod.url }} style={styles.image} />
            <Text style={styles.description}>{apod.explanation}</Text>
          </>
        )}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', 
    color: '#333', 
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555', 
  },
});

export default ApodScreen;
