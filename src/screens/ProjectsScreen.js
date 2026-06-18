import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Image } from "react-native";

export default function ProjectsScreen({ navigation }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://webcraft-api.vercel.app/data/projects.json");
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.log("Erreur API Projets :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <View style={styles.center}><ActivityIndicator size="large" color="#6366f1" /></View>;

  return (
    <FlatList
      data={projects}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ProjectDetail", { project: item })}>
          {item.image ? (
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
          ) : null}
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSub}>{item.category} · {item.duration}</Text>
          <Text style={styles.cardClient}>{item.client}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  card: { 
    backgroundColor: "#f8f8f8", 
    borderRadius: 8, 
    padding: 14, 
    marginBottom: 10 
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: { 
    fontSize: 15, 
    fontWeight: "700", 
    marginBottom: 4 
  },

  cardSub: { 
    fontSize: 12, 
    color: "#6366f1", 
    marginBottom: 2 
  },
  cardClient: { 
    fontSize: 12, 
    color: "#666" 
  },
});