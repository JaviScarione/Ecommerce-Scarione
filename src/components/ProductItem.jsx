import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Card from "./Card";
import { colors } from '../global/colors'


const ProductItem = ({ product, navigation }) => {
  
  return (
    <TouchableOpacity onPress={()=>(navigation.navigate("Detalle", product.id))}>
      <Card style={styles.containerProductItem}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Image
          style={styles.productImage}
          resizeMode="cover"
          source={{ uri: product.thumbnail }}
        />
      </Card>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  containerProductItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
  },
  productTitle: {
    textTransform: 'capitalize',
    fontFamily: 'JosefinSans-Regular',
    fontSize: 16,
    color: colors.secondary,
    width: 250
},
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
});
