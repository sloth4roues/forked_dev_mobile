import type { ReactNode } from "react";
import { FlatList, Text } from "react-native";

type GenericListProps<T> = {
  data: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  emptyMessage?: string;
};

export function GenericList<T>({
  data,
  renderItem,
  keyExtractor,
  emptyMessage,
}: GenericListProps<T>) {
  if (data.length === 0) {
    return (
      <Text style={{ padding: 24, color: "#999", textAlign: "center" }}>
        {emptyMessage ?? "Aucun élément"}
      </Text>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => <>{renderItem(item)}</>}
    />
  );
}
