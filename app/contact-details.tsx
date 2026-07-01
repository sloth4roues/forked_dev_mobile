import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { ContactDetailParams } from "../types/navigation";
import { CONTACTS } from "../data/contacts";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ContactDetails() {
  const { id } = useLocalSearchParams<ContactDetailParams>();
  const contact = CONTACTS.find((currentContact) => currentContact.id === id);

  if (!contact) {
    return (
      <SafeAreaView>
        <Text>Contact Introuvable</Text>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text>{contact.avatar}</Text>
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
