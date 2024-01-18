import { View, Text,StyleSheet,Image, TouchableOpacity } from 'react-native'
import Card from './Card'
import { colors } from '../global/colors'
import { Feather } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cartSlice'


const CartItem = ({item, navigation}) => { 

    const cartItems = useSelector(state => state.cartReducer.items)

    
    const dispatch = useDispatch();

    const onDeleteToCart = (productId) => {
        dispatch(removeItem(productId));
        console.log(cartItems.length);
        if (cartItems.length === 1) {
            navigation.navigate('ShopStack', { screen: 'Categorías' });
        }
    }

    return (
      <Card style={styles.cartItemContainer}>
          <Image
                  style={styles.imageCartItem}
                  resizeMode='cover'
                  source={{ uri: item.thumbnail }}
              />
          <View >       
              <Text style={styles.cartTitle}>{item.title}</Text>
              <Text style={styles.cartLightText}>{item.brand}</Text>
              <Text style={styles.cartLightText}>$ {item.price} c/u</Text>
              <Text style={styles.cartTotalPrice}>
                  Cantidad: {item.quantity}, Total: $ {item.price*item.quantity}
              </Text>
          </View>
          <TouchableOpacity style={styles.trashCart} onPress={() => onDeleteToCart(item.id)}>
              <Feather name="trash" size={24} color={colors.primary} />
          </TouchableOpacity>
      </Card>
    )
  }
  
  export default CartItem
  
  const styles = StyleSheet.create({
      cartItemContainer:{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 20,
      },
      cartContenContainer:{
          flexDirection: 'row',
      },
      imageCartItem: {
          height: 50,
          width:50,
          marginRight:10,
      },
      trashCart: {
          marginLeft: 'auto',
      },
      cartTitle:{
          fontFamily:'JosefinSans-Bold',
          textTransform: 'capitalize',
          fontSize:20
      },
      cartLightText:{
          fontFamily:'JosefinSans-Regular',
          textTransform: 'capitalize',
          fontSize:15,
      },cartTotalPrice:{
          fontFamily:'JosefinSans-Bold',
          textTransform: 'capitalize',
          fontSize:16,
          color:colors.secondary,
      }
  })