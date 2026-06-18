import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image } from "react-native";

export default function FormationsScreen() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://webcraft-api.vercel.app/data/courses.json");
        const data = await response.json();
        setCourses(data.courses);
      } catch (error) {
        console.log("Erreur API Formations :", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <View style={styles.center}><ActivityIndicator size="large" color="#6366f1" /></View>;

  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.category}>{item.category}</Text>
            <Text style={styles.level}>{item.level}</Text>
          </View>
          {item.image ? (
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />
          ) : null}
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.instructor}> {item.instructor} ·  {item.duration}</Text>
          <Text style={styles.price}>{item.price} €  {item.rating} ({item.students} élèves)</Text>
        </View>
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
  row: { 
    flexDirection: "row", 
    gap: 8, 
    marginBottom: 6 
  },

  category: { 
    backgroundColor: "#ede9fe", 
    color: "#6366f1", 
    paddingHorizontal: 8, 
    paddingVertical: 3, 
    borderRadius: 10, 
    fontSize: 11, 
    fontWeight: "700" 
  },

  level: { 
    backgroundColor: "#f0fdf4", 
    color: "#16a34a", 
    paddingHorizontal: 8, 
    paddingVertical: 3, 
    borderRadius: 10, 
    fontSize: 11, 
    fontWeight: "700" 
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
  instructor: { 
    fontSize: 12, 
    color: "#666", 
    marginBottom: 4 
  },
  price: { 
    fontSize: 13, 
    fontWeight: "600", 
    color: "#333" 
  },
});