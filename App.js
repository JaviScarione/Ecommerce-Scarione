import { ActivityIndicator } from "react-native";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import ProductsByCategoryScreen from "./src/screens/ProductsByCategoryScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
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
    <>
      {categorySelected && (
        <ProductsByCategoryScreen
          category={categorySelected}
          onSelectCategoryEvent={onSelectCategory}
          onSelectProductEvent={onSelectProduct}
        />
      )}
      {productSelected && <ProductDetailScreen onSelectCategoryEvent={onSelectCategory}
          onSelectProductEvent={onSelectProduct}/>}
      {!categorySelected && !productSelected && (
        <CategoriesScreen onSelectCategoryEvent={onSelectCategory} />
      )}
    </>
  );
}
