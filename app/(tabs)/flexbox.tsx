import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import ProfileCard from "../../components/ProfileCard";
import GridLayout from "../../components/GridLayout";
import OverlappingCards from "../../components/OverlappingCards";
import HolyGrailLayout from "../../components/HolyGrailLayout";

// Vitrine des composants de la Partie 2 (2.1 à 2.5).
export default function FlexboxScreen() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={styles.section}>2.1 — Carte de profil</Text>
      <View style={styles.fullBox}>
        <ProfileCard />
      </View>

      <Text style={styles.section}>2.2 / 2.5 — Grille responsive</Text>
      <GridLayout />

      <Text style={styles.section}>2.4 — Cartes superposées</Text>
      <OverlappingCards />

      <Text style={styles.section}>2.3 — Holy Grail</Text>
      <View style={styles.holyBox}>
        <HolyGrailLayout />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: "#FFFFFF" },
  content: { padding: 16, gap: 12 },
  section: { fontSize: 16, fontWeight: "bold", marginTop: 16 },
  fullBox: { height: 420, borderRadius: 12, overflow: "hidden" },
  holyBox: { height: 320, borderRadius: 12, overflow: "hidden" },
});
