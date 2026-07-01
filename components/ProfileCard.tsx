import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

// 2.1 — Carte de profil centrée (carte blanche, ombre, fond grisé).
type ProfileCardProps = {
  name?: string;
  title?: string;
  avatar?: string;
  buttonLabel?: string;
  onPress?: () => void;
};

export default function ProfileCard({
  name = "NOËL Hénan",
  title = "Software Engineer",
  avatar = "https://www.hnoel.fr/assets/Photo_Henan_NOEL.webp",
  buttonLabel = "Me contacter",
  onPress,
}: ProfileCardProps) {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
          <Text style={styles.buttonText}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "85%",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    gap: 12,
    // Ombre iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    // Ombre Android
    elevation: 6,
  },
  avatar: { width: 120, height: 120, borderRadius: 60 },
  name: { fontSize: 22, fontWeight: "bold", color: "#1A1A1A" },
  title: { fontSize: 14, color: "#888888" },
  button: {
    backgroundColor: "#E8871A",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: { color: "#FFFFFF", fontWeight: "600", fontSize: 16 },
});
