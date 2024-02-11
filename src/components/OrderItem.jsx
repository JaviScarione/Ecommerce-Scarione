import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Card from './Card'
import { Feather } from '@expo/vector-icons';
import { colors } from "../global/colors";



const OrderItem = ({ order, keyProp, setOrderIdSelected, setModalVisible }) => {
    
    let date = new Date(order.createdAt).toLocaleDateString();

    return (
        <Card style={styles.cartItemContainer}>
            <View >
                <Text style={styles.createdAt}>
                    Compra hecha el: {date}
                </Text>
                <Text style={styles.total}>Total: ${order.total}</Text>
            </View>
            <TouchableOpacity style={styles.searchIcon} onPress={() => {
                setOrderIdSelected(keyProp)
                setModalVisible(true)
                }}>
                <Feather name="search" size={24} color= {colors.primary} />
            </TouchableOpacity>
        </Card>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    searchIcon: {
        marginLeft: 'auto',
    },
    createdAt:{
        fontFamily: 'JosefinSans-Regular',
        marginBottom:5,
    },
    total:{
        fontFamily: 'JosefinSans-Bold',
        fontSize:14,
    }
})