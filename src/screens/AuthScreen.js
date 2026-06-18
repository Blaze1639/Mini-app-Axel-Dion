import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from "react-native";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email || !password) return Alert.alert("Erreur", "Remplis tous les champs");
    setLoading(true);
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (e) {
      Alert.alert("Erreur", e.message);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? "Connexion" : "Inscription"}</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Mot de passe" value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.btn} onPress={handleSubmit} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>{isLogin ? "Se connecter" : "S'inscrire"}</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.link}>{isLogin ? "Pas de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    padding: 24, 
    backgroundColor: "#fff" 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "bold", 
    marginBottom: 24, 
    textAlign: "center" 
  },
  input: { 
    borderWidth: 1, 
    borderColor: "#ccc", 
    borderRadius: 8, 
    padding: 12, 
    marginBottom: 12, 
    fontSize: 16 
  },
  btn: { 
    backgroundColor: "#6366f1", 
    borderRadius: 8, 
    padding: 14, 
    alignItems: "center", 
    marginBottom: 12 
  },
  btnText: { 
    color: "#fff", 
    fontWeight: "bold", 
    fontSize: 16 
  },
  link: { 
    color: "#6366f1", 
    textAlign: "center", 
    fontSize: 14 
  },
});