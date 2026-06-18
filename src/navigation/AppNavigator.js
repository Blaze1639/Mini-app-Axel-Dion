import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import ProjectDetailScreen from "../screens/ProjectDetailScreen";
import FormationsScreen from "../screens/FormationsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ProjStack = createNativeStackNavigator();

function ProjectsStack() {
  return (
    <ProjStack.Navigator>
      <ProjStack.Screen name="ProjectsList" component={ProjectsScreen} options={{ title: "Projets" }} />
      <ProjStack.Screen name="ProjectDetail" component={ProjectDetailScreen} options={{ title: "Détail" }} />
    </ProjStack.Navigator>
  );
}

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#6366f1",
        tabBarInactiveTintColor: "#6b7280",
        tabBarShowIcon: false,
        tabBarShowLabel: true,
        tabBarIndicatorStyle: { display: "none" },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} options={{ tabBarLabel: "🏠 Accueil" }} />
      <Tab.Screen name="Projets" component={ProjectsStack} options={{ tabBarLabel: "📁 Projets", headerShown: false }} />
      <Tab.Screen name="Formations" component={FormationsScreen} options={{ tabBarLabel: "🎓 Formations" }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return unsub;
  }, []);

  if (user === undefined) {
    return <View style={{ flex: 1, justifyContent: "center" }}><ActivityIndicator size="large" color="#6366f1" /></View>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <Stack.Screen name="App" component={AppTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}