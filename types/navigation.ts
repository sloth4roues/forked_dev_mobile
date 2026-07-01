import { useLocalSearchParams } from "expo-router";

export const ROUTES = {
  home: "/",
  contacts: "/contacts",
  contactAdd: "/add-contact",
  contactDetails: (id: string) => ({
    pathname: "/contact-details",
    params: { id },
  }),
  playground: "/playground",
  about: "/about",
  flexbox: "/flexbox",
} as const;

export type ContactDetailParams = {
  id: string;
};

export type RootStackParamList = {
  index: undefined;
  contacts: undefined;
  "contact-details": { id: string };
  playground: undefined;
  about: undefined;
  flexbox: undefined;
  layout: undefined;
};

export default function ContactDetail() {
  const { id } = useLocalSearchParams<ContactDetailParams>();
}
