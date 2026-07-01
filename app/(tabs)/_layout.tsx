import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// Routing minimal pour rendre les écrans d'exercices accessibles.
// NB : la configuration Tabs avec icônes (Partie 4.1), les routes dynamiques
// et les deep links sont volontairement laissés de côté (hors périmètre).
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E8871A",
        headerStyle: { backgroundColor: "#1B4FBF" },
        headerTintColor: "#FFF",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="layouts"
        options={{
          title: "Layout",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="flexbox"
        options={{
          title: "Flexbox",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="layers" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="playground"
        options={{
          title: "Composants",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "À propos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
