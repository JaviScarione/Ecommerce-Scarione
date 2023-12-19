import {View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions, ScrollView} from 'react-native'
import products_data from '../data/products_data.json'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'

const ProductDetailScreen = ({route}) => {
    
    const [productSelected, setProductSelected] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isPortrait, setIsPortrait] = useState(true)

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
                <ScrollView >
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
    detailContainer: {
      alignItems: 'center',
      marginTop: 30,
    },
    title: {
      fontFamily: 'JosefinSans-Bold',
      fontSize: 32,
      marginBottom: 20,
      color: colors.primary,
    },
    description: {
      fontFamily: 'JosefinSans-Regular',
      fontSize: 20,
      marginBottom: 20,
      color: colors.primary,
    },
    price: {
      fontFamily: 'JosefinSans-Bold',
      fontSize: 32,
      color: colors.primary,
      marginBottom: 20,
    },
    buyButton: {
      width: 250,
      padding: 10,
      alignItems: 'center',
      backgroundColor: colors.secondary,
      borderRadius: 10,
      alignItems: 'center',
    },
    buyText: {
      fontFamily: 'JosefinSans-Bold',
      color: colors.primary,
      fontSize: 20,
      paddingBottom: 5,
    },
    })