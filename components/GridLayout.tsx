import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import type { DimensionValue } from "react-native";

const ITEMS = [
  { id: "1", title: "Design", color: "#E8871A" },
  { id: "2", title: "Backend", color: "#2ECFC4" },
  { id: "3", title: "Mobile", color: "#1B4FBF" },
  { id: "4", title: "DevOps", color: "#E74C3C" },
  { id: "5", title: "Data", color: "#8E44AD" },
  { id: "6", title: "Sécurité", color: "#27AE60" },
];

export default function GridLayout() {
  const { width } = useWindowDimensions();

  // Nombre de colonnes adapté à la largeur :
  // < 400 -> 2 colonnes, 400-700 -> 3 colonnes, > 700 (tablette) -> 4 colonnes
  const numCols = width > 700 ? 4 : width > 400 ? 3 : 2;
  const itemWidth = `${Math.floor(100 / numCols) - 2}%` as DimensionValue;

  return (
    <View style={styles.grid}>
      {ITEMS.map((item) => (
        <View
          key={item.id}
          style={[styles.card, { width: itemWidth, backgroundColor: item.color }]}
        >
          <Text style={styles.title}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    height: 100,
    borderRadius: 12,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
