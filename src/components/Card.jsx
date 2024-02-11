import {View, StyleSheet} from 'react-native'
import {colors} from '../global/colors'

const Card = ({children, style}) => {
    return(
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        shadowColor: colors.secondaryBack,
        shadowOffset: {
            height: 5,
            width: 5,
        },
        elevation: 5,
        shadowOpacity: 1, 
        shadowRadius: 1,
        alignItems: 'center',
    }
})