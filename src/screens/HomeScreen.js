import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue </Text>
      <Text style={styles.sub}>{auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => signOut(auth)}>
        <Text style={styles.btnText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff" 
  },

  title: { 
    fontSize: 26, 
    fontWeight: "bold", 
    marginBottom: 8 
  },

  sub: { 
    fontSize: 14, 
    color: "#666", 
    marginBottom: 32 
  },

  btn: { 
    backgroundColor: "#ef4444", 
    borderRadius: 8, 
    padding: 14, 
    paddingHorizontal: 32 
  },

  btnText: { 
    color: "#fff", 
    fontWeight: "bold" 
  },
});