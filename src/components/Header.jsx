import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { Entypo  } from '@expo/vector-icons'; 


const Header = ({ title, onSelectCategoryEvent, onSelectProductEvent }) => {


    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>{title}</Text>
            { title!== 'Categorías' &&
                <TouchableOpacity onPress={() => (onSelectCategoryEvent(''), onSelectProductEvent(''))}>
                    <Entypo name="arrow-with-circle-left" size={20} color={colors.primary} style={styles.backToHome}> Inicio</Entypo>
                </TouchableOpacity>
            }   
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        paddingTop: 25,
    },
    headerTitle: {
        color: colors.primary,
        fontFamily: 'JosefinSans-Bold',
        textTransform: 'uppercase',
        fontSize: 20,

    },
    backToHome: {
        marginBottom: -10,
        marginTop: 10
    }
})