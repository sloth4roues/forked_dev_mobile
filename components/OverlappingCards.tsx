import { View, Text, StyleSheet } from "react-native";

// 2.4 — Cartes superposées (éventail). position absolute + décalages calculés.
const CARDS = [
  { id: "c1", title: "Carte 1", color: "#1B4FBF" },
  { id: "c2", title: "Carte 2", color: "#2ECFC4" },
  { id: "c3", title: "Carte 3", color: "#E8871A" },
];

export default function OverlappingCards() {
  return (
    <View style={styles.container}>
      {CARDS.map((card, i) => (
        <View
          key={card.id}
          style={[
            styles.card,
            {
              left: i * 30,
              top: i * 15,
              backgroundColor: card.color,
              zIndex: i, // la dernière carte est au-dessus
            },
          ]}
        >
          <Text style={styles.cardTitle}>{card.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 220,
    position: "relative",
  },
  card: {
    position: "absolute",
    width: 280,
    height: 170,
    borderRadius: 16,
    padding: 20,
    justifyContent: "flex-end",
    // Ombre iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    // Ombre Android
    elevation: 6,
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});
