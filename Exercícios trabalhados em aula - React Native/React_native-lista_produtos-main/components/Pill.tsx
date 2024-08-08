import { StyleSheet, View } from "react-native";

function Pill({ children, style }: { children: React.ReactNode; style?: any }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

export default Pill;

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
});
