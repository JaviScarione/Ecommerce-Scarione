import { ActivityIndicator } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [productSelected, setProductSelected] = useState("");

  const [fontLoaded] = useFonts({
    "JosefinSans-Bold": require("./assets/fonts/JosefinSans-Bold.ttf"),
    "JosefinSans-Regular": require("./assets/fonts/JosefinSans-Regular.ttf"),
  });

  if (!fontLoaded) return <ActivityIndicator />;

  const onSelectCategory = (category) => {
    setCategorySelected(category);
  };

  const onSelectProduct = (product) => {
    setProductSelected(product);
  };

  return (
    <Navigator />
  );
}
