import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useSelector, useDispatch } from 'react-redux';
import { usePostOrderMutation } from '../services/shopService'
import { clearCart } from '../features/cartSlice'



const CartScreen = ({navigation}) => {

    const cartItems = useSelector(state => state.cartReducer.items)
    const total = useSelector(state => state.cartReducer.total)
    const [triggerPost, result] =  usePostOrderMutation()
    const dispatch = useDispatch();

    const renderCartItem = ({item}) => (
        <CartItem item={item} navigation={navigation}/>
    )

    const confirmCart = ()=>{
      triggerPost({total,cartItems,user:"LoggedUser" })
      dispatch(clearCart())
      navigation.navigate('ShopStack', { screen: 'Categorías' });
    }

    return (
        <View style={styles.cartContainer}>
            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.cartConfirm}>
                <Text style={styles.totalPrice}>Total: U$D {total}</Text>
                  <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
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
    }  
  })