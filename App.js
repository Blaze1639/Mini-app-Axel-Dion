// App.js — Point d'entrée de l'application
// Enveloppe l'AppNavigator dans SafeAreaProvider (obligatoire pour react-navigation)

import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* Barre de statut claire sur fond sombre */}
      <StatusBar style="light" backgroundColor="#0f172a" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}