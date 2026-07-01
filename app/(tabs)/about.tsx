import { Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GridLayout from "../../components/GridLayout";

export default function AboutScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF" }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text style={styles.title}>À propos</Text>
        <Text style={styles.paragraph}>
          Développeur passionné avec 8 ans d'expérience en développement mobile.
        </Text>

        <Text style={styles.sectionTitle}>Compétences</Text>
        <GridLayout />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  paragraph: { fontSize: 16, lineHeight: 26, color: "#555" },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginTop: 24, marginBottom: 16 },
});
