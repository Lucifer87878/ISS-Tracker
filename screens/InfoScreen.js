import React from 'react';
import { Text, Image, StyleSheet, ScrollView, Pressable, Linking, SafeAreaView } from 'react-native';

const InfoScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Image source={require('../assets/images/ISS-1.jpg')} style={styles.image} />
        <Text style={styles.title}>Internationella Rymdstationen (ISS)</Text>
        <Text style={styles.text}>
          ISS är ett samarbetsprojekt mellan flera nationer och fungerar som en plattform för vetenskaplig forskning i omloppsbana. 
        </Text>
        <Text style={styles.text}>
          Stationen är ungefär lika stor som en fotbollsplan och har varit bemannad sedan år 2000. Den kretsar runt jorden på ungefär 408 kilometers höjd och färdas med en hastighet av cirka 28 000 km/h.
        </Text>
        <Text style={styles.text}>
          Här utförs banbrytande forskning inom olika områden som medicin, fysik, klimat och rymdteknologi.
        </Text>
        <Text style={styles.subTitle}>Läs mer om ISS:</Text>
        <Pressable style={styles.link} onPress={() => openLink('https://www.nasa.gov/mission_pages/station/main/index.html')}>
          <Text style={styles.linkText}>NASA - ISS Main Page</Text>
        </Pressable>
        <Pressable style={styles.link} onPress={() => openLink('https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/International_Space_Station')}>
          <Text style={styles.linkText}>ESA - International Space Station</Text>
        </Pressable>
        <Pressable style={styles.link} onPress={() => openLink('https://www.spacex.com/human-spaceflight/international-space-station')}>
          <Text style={styles.linkText}>SpaceX - ISS Missions</Text>
        </Pressable>
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
    paddingHorizontal: 10,
    paddingTop: 75,
    backgroundColor: '#FFFF',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  link: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  linkText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default InfoScreen;
