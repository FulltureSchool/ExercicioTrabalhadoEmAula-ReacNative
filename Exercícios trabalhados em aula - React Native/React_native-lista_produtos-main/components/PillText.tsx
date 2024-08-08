import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

function PillText({
  children,
  style,
  textStyle,
}: {
  children: React.ReactNode;
  style?: any;
  textStyle?: any;
}) {
  return (
    <View style={[styles.container, style]}>
      <ThemedText style={[styles.text, textStyle]} type="default">
        {children}
      </ThemedText>
    </View>
  );
}

export default PillText;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    minWidth: 150,
    borderColor: "#d6d6d6",
    borderRadius: 50,
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",

    color: "black",
  },
});
