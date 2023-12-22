import {View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions, ScrollView} from 'react-native'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'

const ProductDetailScreen = ({route}) => {
    
    const [productSelected, setProductSelected] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const productId = route.params    

    useEffect(()=>{
        const productFound = products_data.find(product=>product.id===productId)
        setProductSelected(productFound)
        setIsLoading(false)
    }
    ,[productId])

    return(
        <>
        {
            isLoading
            ?
            <ActivityIndicator />
            :
            <>
                <ScrollView style={styles.detailScreen}>
                    <Image
                        source={{ uri: productSelected.images[0] }}
                        resizeMode='cover'
                        style={styles.imageProduct}
                    />
                    <View style={styles.detailContainer}>
                    <Text style={styles.title}>{productSelected.title}</Text>
                    <Text style={styles.description}>{productSelected.description}</Text>
                    <Text style={styles.price}>$ {productSelected.price}</Text>
                    <TouchableOpacity style={styles.buyButton} onPress={() => null}>
                        <Text style={styles.buyText}>Comprar</Text>
                    </TouchableOpacity>
                    </View>
                </ScrollView>
            </>
            }        
        </>
    )
}

export default ProductDetailScreen 

const styles = StyleSheet.create({
    imageProduct: {
      minWidth: 300,
      width: '100%',
      height: 400,
  
    },
    detailScreen: {
      flex: 1,
    },
    detailContainer: {
      alignItems: 'center',
      marginHorizontal: 5,
    },
    title: {
      fontFamily: 'JosefinSans-Bold',
      fontSize: 24,
      marginBottom: 5,
      color: colors.secondary,
      textAlign: 'center',
    },
    description: {
      fontFamily: 'JosefinSans-Regular',
      fontSize: 18,
      marginBottom: 5,
      color: colors.secondary,
      textAlign: 'center',
    },
    price: {
      fontFamily: 'JosefinSans-Bold',
      fontSize: 28,
      color: colors.secondary,
      marginBottom: 15,
    },
    buyButton: {
      width: 250,
      padding: 5,
      alignItems: 'center',
      backgroundColor: colors.primary,
      borderRadius: 10,
      alignItems: 'center',
    },
    buyText: {
      fontFamily: 'JosefinSans-Bold',
      color: colors.textLight,
      fontSize: 20,
      paddingBottom: 5,
    },
    })