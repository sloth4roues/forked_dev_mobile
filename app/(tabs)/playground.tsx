import { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

// 3.4 — Exploration des composants interactifs (A Modal · B resizeMode · C refresh · D Touchable vs Pressable).
const RESIZE_MODES = ["cover", "contain", "stretch", "center"] as const;

export default function PlaygroundScreen() {
  // A) Modal + formulaire
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  // C) chargement initial + pull-to-refresh
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // simuler un appel réseau
    setRefreshing(false);
  }, []);

  const handleValidate = () => {
    setLastAdded(`${name || "—"} · ${role || "—"}`);
    setName("");
    setRole("");
    setModalVisible(false);
  };

  const handleCancel = () => {
    setName("");
    setRole("");
    setModalVisible(false);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#E8871A" />
        <Text style={styles.loaderText}>Chargement…</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={["bottom"]}>
      <ScrollView
        contentContainerStyle={styles.content}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#E8871A"
          />
        }
      >
        {/* A) Modal avec formulaire */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.section}>A — Modal formulaire</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Ionicons name="add-circle" size={28} color="#2ECFC4" />
          </TouchableOpacity>
        </View>
        {lastAdded && (
          <Text style={styles.lastAdded}>Dernier contact ajouté : {lastAdded}</Text>
        )}

        {/* B) Image avec différents resizeMode */}
        <Text style={styles.section}>B — resizeMode</Text>
        {RESIZE_MODES.map((mode) => (
          <View key={mode} style={styles.imageBlock}>
            <Text style={styles.modeLabel}>{mode}</Text>
            <Image
              source={{ uri: "https://picsum.photos/400/200" }}
              style={styles.demoImage}
              resizeMode={mode}
            />
          </View>
        ))}

        {/* C) Pull-to-refresh */}
        <Text style={styles.section}>C — Pull-to-refresh</Text>
        <Text style={styles.hint}>
          Tirez l'écran vers le bas pour déclencher le RefreshControl. Un
          ActivityIndicator s'affiche au chargement initial.
        </Text>

        {/* D) TouchableOpacity vs Pressable */}
        <Text style={styles.section}>D — TouchableOpacity vs Pressable</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.demoButton}
          onPress={() => {}}
        >
          <Text style={styles.demoButtonText}>TouchableOpacity</Text>
        </TouchableOpacity>
        <Pressable
          onPress={() => {}}
          style={({ pressed }) => [
            styles.demoButton,
            pressed && { backgroundColor: "#1B4FBF", transform: [{ scale: 0.97 }] },
          ]}
        >
          {({ pressed }) => (
            <Text
              style={[styles.demoButtonText, { color: pressed ? "#FFFFFF" : "#333333" }]}
            >
              Pressable
            </Text>
          )}
        </Pressable>
      </ScrollView>

      {/* Modal en slide depuis le bas */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={handleCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <Text style={styles.modalTitle}>Nouveau contact</Text>
            <TextInput
              style={styles.input}
              placeholder="Nom"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Rôle"
              value={role}
              onChangeText={setRole}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={handleCancel}
              >
                <Text style={styles.cancelText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.validateButton]}
                onPress={handleValidate}
              >
                <Text style={styles.validateText}>Valider</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  content: { padding: 16, gap: 8 },
  loader: { flex: 1, justifyContent: "center", alignItems: "center", gap: 12 },
  loaderText: { color: "#888888" },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  section: { fontSize: 16, fontWeight: "bold", marginTop: 16 },
  lastAdded: { color: "#27AE60", fontWeight: "600" },
  imageBlock: { marginBottom: 12 },
  modeLabel: { fontWeight: "bold", marginBottom: 4 },
  demoImage: { width: "100%", height: 120, backgroundColor: "#EEEEEE" },
  hint: { color: "#888888", fontSize: 13 },
  demoButton: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  demoButtonText: { color: "#333333", fontWeight: "600", fontSize: 15 },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    gap: 12,
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 4 },
  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  modalButtons: { flexDirection: "row", gap: 12, marginTop: 8 },
  modalButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  cancelButton: { backgroundColor: "#F0F0F0" },
  cancelText: { color: "#555555", fontWeight: "600" },
  validateButton: { backgroundColor: "#2ECFC4" },
  validateText: { color: "#FFFFFF", fontWeight: "600" },
});
