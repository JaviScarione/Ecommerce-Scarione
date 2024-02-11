import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService'
import { clearCart } from '../features/cartSlice'



const CartScreen = ({navigation}) => {

    const localId = useSelector(state=>state.authReducer.localId)
    const cartItems = useSelector(state => state.cartReducer.items)
    const total = useSelector(state => state.cartReducer.total)
    const [triggerPost, result] =  usePostOrderMutation()
    const dispatch = useDispatch();

    const isCartEmpty = cartItems.length === 0

    const renderCartItem = ({item}) => (
        <CartItem item={item} navigation={navigation}/>
    )

    const confirmCart = ()=>{
      if (!cartItems) {
        return
      }
      const date = Date.now()
      triggerPost({total, cartItems, user: localId, createdAt: date})
      dispatch(clearCart())
      navigation.navigate('ShopStack', { screen: 'Categorías' });
    }

    return (
        <View style={styles.cartContainer}>
            {
              isCartEmpty && <Text style={styles.emptyCart}>Tu carrito esta vacio!</Text> 
            }
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.cartConfirm}>
                <Text style={styles.totalPrice}>Total: U$D {total}</Text>
                  <TouchableOpacity
                   style={[styles.confirmButton, { opacity: isCartEmpty ? 0.5 : 1 }]}
                   onPress={confirmCart}
                   disabled={isCartEmpty}
                   >                    
                    <Text style={styles.textConfirm}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    cartContainer: {
      flex: 1,
      backgroundColor: colors.textLight
    },
    cartConfirm: {
      marginBottom: 130,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 25,
    },
    totalPrice: {
      fontSize: 16,
      fontFamily: 'JosefinSans-Bold'
    },
    confirmButton:{
      backgroundColor: colors.primary,
      padding:10,
      borderRadius:10,
    },
    textConfirm:{
      fontFamily:'JosefinSans-Bold',
      fontSize:16,
      color: colors.textLight,
      width: 100,
      textAlign: 'center',
      padding: 5
    },
    emptyCart: {
      fontSize: 25,
      marginTop: 200,
      fontFamily: 'JosefinSans-Bold',
      textAlign: "center",
      color: colors.secondary,
    }  
  })