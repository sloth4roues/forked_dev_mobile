import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "../schemas/contactSchema";

export default function AddContactScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", role: undefined },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Données validées : ", data);
    reset();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Champ Nom */}
        <Text style={styles.label}>Nom</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              value={value}
              onChangeText={onChange}
              placeholder="Prénom Nom"
            />
          )}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}
        {/* Champ Email */}
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              value={value}
              onChangeText={onChange}
              placeholder="prenom@exemple.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          )}
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}
        {/* Champ Téléphone (optionnel) */}
        <Text style={styles.label}>Téléphone (optionnel)</Text>
        <Controller
          control={control}
          name="phone"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.input, errors.phone && styles.inputError]}
              value={value}
              onChangeText={onChange}
              placeholder="0612345678"
              keyboardType="phone-pad"
            />
          )}
        />
        {errors.phone && (
          <Text style={styles.error}>{errors.phone.message}</Text>
        )}
        {/* Bouton de soumission */}
        <TouchableOpacity
          style={styles.submitBtn}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.submitText}>Ajouter le contact</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1A1A1A",
    marginBottom: 6,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: { borderColor: "#E74C3C" },
  error: { color: "#E74C3C", fontSize: 12, marginTop: 4 },
  submitBtn: {
    backgroundColor: "#E8871A",
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
    alignItems: "center",
  },
  submitText: { color: "#FFF", fontWeight: "600", fontSize: 16 },
});
