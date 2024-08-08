import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

import Pill from "@/components/Pill";
import PillText from "@/components/PillText";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const categoriesMock = products.reduce(
    (acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    },
    ["All"]
  );

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/FulltureSchool/React_native-lista_produtos/main/casas.json"
      )
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ThemedView style={styles.headerContainer}>
        <PillText>Shoppi</PillText>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <View style={styles.icon} />
          <View style={styles.circle}>
            <ImageBackground
              source={{
                uri: "https://www.transparentpng.com/thumb/happy-person/VJdvLa-download-happy-blackman-png.png",
              }}
              style={styles.circle}
            />
          </View>
        </View>
      </ThemedView>
      <Pill style={styles.searchPill}>
        <View style={styles.searchCircle}>
          <Ionicons name="search" size={24} color="black" />
        </View>
        <TextInput
          style={{ flex: 1, height: "100%", width: "100%", outlineWidth: 0 }}
        />
      </Pill>

      <ScrollView
        style={styles.scrollView}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: "row", gap: 8 }}>
          {categoriesMock.map((category) => (
            <PillText
              textStyle={{ fontWeight: 400 }}
              style={styles.category}
              key={category}
            >
              {category}
            </PillText>
          ))}
        </View>
      </ScrollView>

      <ScrollView
        style={styles.scrollViewProducts}
        showsHorizontalScrollIndicator={false}
      >
        <ThemedView style={styles.gallery}>
          {products.map((product) => (
            <ThemedView style={styles.productContainer} key={product?.id}>
              <ImageBackground
                style={styles.image}
                resizeMode="cover"
                key={product?.id}
                source={{
                  uri: product.image,
                }}
              />

              <View style={styles.productDescription}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <ThemedText type="title" style={styles.descriptionTitle}>
                    {product?.name}
                  </ThemedText>
                  <ThemedText type="subtitle">
                    {(product.price / 10).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      maximumFractionDigits: 0,
                    })}
                  </ThemedText>
                </View>
                <ThemedText style={styles.locationText}>
                  {product?.location}
                </ThemedText>
                <ThemedText style={styles.otherInfo}>
                  {product?.bedrooms} Beds • {product?.bathrooms} Baths •{" "}
                  {product?.area}m
                </ThemedText>
              </View>
            </ThemedView>
          )) || []}
        </ThemedView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  gallery: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  otherInfo: {
    fontSize: 16,
    color: "#787878",
    fontWeight: "500",
    marginTop: 6,
  },
  locationText: {
    fontSize: 16,
    color: "#787878",
    fontWeight: "500",
  },
  productContainer: {
    width: "100%",
    backgroundColor: "#d9d9d9",
    borderRadius: 14,
    overflow: "hidden",
    position: "relative",
  },
  descriptionTitle: {
    textAlign: "left",
    marginVertical: "auto",
    alignSelf: "flex-start",
    fontSize: 18,
    maxWidth: 200,
    maxHeight: 30,
    overflow: "hidden",
  },
  productDescription: {
    margin: 4,
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    height: 100,
    borderRadius: 14,
    backgroundColor: "#fff",
    display: "flex",
    paddingHorizontal: 18,
    paddingVertical: 8,
    justifyContent: "flex-start",
  },
  image: {
    height: "auto",
    width: "100%",
    aspectRatio: 2 / 1.3,
    objectFit: "cover",
  },
  category: {
    minWidth: 70,
    margin: "auto",
    height: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 0,
    paddingTop: 0,
  },
  icon: {
    height: 24,
    width: 24,
    borderRadius: 50,
    backgroundColor: "#9e9e9e",
  },
  circle: {
    height: 34,
    width: 34,
    overflow: "hidden",
    borderRadius: 50,
    backgroundColor: "transparent",
  },
  headerContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    gap: 8,
  },
  searchCircle: {
    display: "flex",
    borderRadius: 50,
    backgroundColor: "transparent",
  },
  searchPill: {
    display: "flex",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    width: "100%",
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    padding: 16,
    gap: 10,
    backgroundColor: "#fff",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  scrollView: {
    display: "flex",
    height: 40,
    flexGrow: 0,
  },
  scrollViewProducts: {
    display: "flex",
    height: "100%",
  },
});
