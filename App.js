import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Fixed import line
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image
          source={require('./assets/profile.png')}
          style={styles.avatar}
        />

        <Text style={styles.name}>Rinzin Lhamo</Text>

        <Text style={styles.subtitle}>
          BE Information and Technology · Year 3
        </Text>

        <Text style={styles.bio}>
          I am an IT student interested in mobile application development, embedded systems, and modern tech solutions. My project II is about DrukFarm where Farmer gets the opportunity to sell the products and buyers can buy the products.
        </Text>

        <View style={styles.likesRow}>
          <Ionicons name="heart" size={22} color="#ce1010" />
          <Text style={styles.likesText}>{likes} likes</Text>
        </View>

        {likes >= 10 && (
          <Text style={styles.popular}>You're popular!</Text>
        )}

        <View style={styles.row}>

          {/* Upvote */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.6 }
            ]}
            onPress={() => setLikes(likes + 1)}
          >
            <Ionicons name="arrow-up" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Upvote</Text>
          </Pressable>

          {/* Downvote */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && { opacity: 0.6 }
            ]}
            onPress={() => setLikes(Math.max(0, likes - 1))}
          >
            <Ionicons name="arrow-down" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Downvote</Text>
          </Pressable>

          {/* Reset */}
          <Pressable
            style={({ pressed }) => [
              styles.resetButton,
              pressed && { opacity: 0.6 }
            ]}
            onPress={() => setLikes(0)}
          >
            <Ionicons name="refresh" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Reset</Text>
          </Pressable>

        </View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 12,
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },

  bio: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
  },

  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 20,
  },

  likesText: {
    fontSize: 18,
  },

  popular: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ec0f0f',
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },

  button: {
    backgroundColor: '#3cc3f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 84,
  },

  resetButton: {
    backgroundColor: '#aa550b',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 84,
  },

  buttonLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
});