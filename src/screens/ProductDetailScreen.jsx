import {View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, useWindowDimensions, ScrollView} from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux'
import Carousel from '../components/Carousel'
import { addItem } from '../features/cartSlice'


const ProductDetailScreen = ({route, navigation}) => {
    
    const [isLoading, setIsLoading] = useState(true)

    const productId = route.params  
    
    const productSelected = useSelector(state => state.shopReducer.productSelected)

    useEffect(()=>{
        setIsLoading(false)
    }
    ,[productId])

    const dispatch = useDispatch()

    const onAddToCart = () =>{
      dispatch(addItem({...productSelected, quantity: 1}))
      navigation.navigate('ShopStack', { screen: 'Categorías' });
    }

    return(
        <>
        {
            isLoading
            ?
            <ActivityIndicator />
            :
            <>
                <ScrollView style={styles.detailScreen}>
                    <Carousel />
                    <View style={styles.detailContainer}>
                    <Text style={styles.title}>{productSelected.title}</Text>
                    <Text style={styles.description}>{productSelected.description}</Text>
                    <Text style={styles.price}>$ {productSelected.price}</Text>
                    <TouchableOpacity style={styles.buyButton} onPress={onAddToCart}>
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
      backgroundColor: colors.textLight,
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