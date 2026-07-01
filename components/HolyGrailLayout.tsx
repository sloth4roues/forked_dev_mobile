import { View, Text, StyleSheet } from "react-native";

// 2.3 — Holy Grail layout mobile : header / [gauche · contenu · droite] / footer.
export default function HolyGrailLayout() {
  return (
    <View style={styles.root}>
      <View style={[styles.bar, styles.center, { height: 56 }]}>
        <Text style={styles.barText}>Header</Text>
      </View>

      <View style={styles.middle}>
        <View style={[styles.sidebar, styles.center]}>
          <Text style={styles.sideText}>Gauche</Text>
        </View>
        <View style={[styles.content, styles.center]}>
          <Text>Contenu principal</Text>
        </View>
        <View style={[styles.sidebar, styles.center]}>
          <Text style={styles.sideText}>Droite</Text>
        </View>
      </View>

      <View style={[styles.bar, styles.center, { height: 48 }]}>
        <Text style={styles.barText}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  center: { justifyContent: "center", alignItems: "center" },
  bar: { backgroundColor: "#1A1A2E" },
  barText: { color: "#FFFFFF", fontWeight: "bold" },
  middle: { flex: 1, flexDirection: "row" },
  sidebar: { width: 60, backgroundColor: "#DDDDDD" },
  sideText: { fontSize: 10 },
  content: { flex: 1, backgroundColor: "#FFFFFF" },
});
