import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// 1.1 layout header/contenu/footer · 1.2 Platform.select · 1.3 barre de stats en row
const STATS = [
  { value: "42", label: "Publications" },
  { value: "1.2k", label: "Abonnés" },
  { value: "380", label: "Abonnements" },
];

export default function LayoutsScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["bottom"]}>
      {/* Header 60pt, fond coloré, texte blanc */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mon Application</Text>
      </View>

      {/* 1.3 — barre de 3 statistiques en row */}
      <View style={styles.stats}>
        {STATS.map((stat) => (
          <View key={stat.label} style={styles.stat}>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* Contenu central qui prend tout l'espace restant */}
      <View style={styles.body}>
        <Text>Zone de contenu principal</Text>
      </View>

      {/* Footer 50pt, gris clair */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    // 1.2 — paddingTop adapté à la plateforme
    paddingTop: Platform.select({ ios: 0, android: StatusBar.currentHeight }),
  },
  header: {
    height: 60,
    backgroundColor: "#1B4FBF",
    justifyContent: "center",
    paddingHorizontal: 16,
    // 1.2 — ombre adaptée à la plateforme
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: { elevation: 4 },
    }),
  },
  headerText: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    backgroundColor: "#F5F5F5",
  },
  stat: { alignItems: "center" },
  statValue: { fontWeight: "bold", fontSize: 20 },
  statLabel: { color: "#999999", fontSize: 12 },
  body: { flex: 1, justifyContent: "center", alignItems: "center" },
  footer: {
    height: 50,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: { color: "#999999", fontSize: 12 },
});
