import { Button, StyleSheet } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { FlatList } from "react-native";

export default function NovaAba() {
  const [items, setItems] = useState<string[]>([]);
  // criar um estado que começa com array vazio
  // criar um botão de adicionar
  // quando o botão de adicionar for pressionado, adicionar novo item no array
  // quando entrar um novo item no array, a tela deve ser atualizada mostrando a lista corretamente dos itens

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ThemedText type="default">{item}</ThemedText>
        )}
      />
      <Button
        title="Adicionar"
        onPress={() => setItems([...items, "Item " + items.length])}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    margin: "auto",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
