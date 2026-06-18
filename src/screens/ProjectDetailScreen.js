import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function ProjectDetailScreen({ route }) {
  const { project } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.client}> {project.client}</Text>

      <View style={styles.row}>
        <Text style={styles.badge}>{project.category}</Text>
        <Text style={styles.badge}> {project.year}</Text>
        <Text style={styles.badge}> {project.duration}</Text>
      </View>

      <Text style={styles.label}>Description</Text>
      <Text style={styles.text}>{project.description}</Text>

      <Text style={styles.label}>Technologies</Text>
      <Text style={styles.text}>{project.technologies.join(", ")}</Text>

      <Text style={styles.label}>Fonctionnalités</Text>
      {project.features.map((f, i) => (
        <Text key={i} style={styles.text}>• {f}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },

  title: { 
    fontSize: 20, 
    fontWeight: "700", 
    marginBottom: 6 
  },

  client: { 
    fontSize: 14, 
    color: "#666", 
    marginBottom: 12 
  },

  row: { 
    flexDirection: "row", 
    gap: 8, 
    marginBottom: 16 
  },

  badge: { 
    backgroundColor: "#ede9fe", 
    color: "#6366f1", 
    paddingHorizontal: 10, 
    paddingVertical: 4, 
    borderRadius: 20, 
    fontSize: 12, 
    fontWeight: "600" 
  },

  label: { 
    fontSize: 13, 
    fontWeight: "700", 
    color: "#6366f1", 
    marginTop: 14, 
    marginBottom: 4, 
    textTransform: "uppercase" 
  },

  text: { 
    fontSize: 14, 
    color: "#333", 
    lineHeight: 22 
  },

});