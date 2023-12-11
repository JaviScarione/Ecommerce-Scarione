import {View, Text, StyleSheet} from 'react-native'
import Header from '../components/Header'


const ProductDetailScreen = ({onSelectCategoryEvent, onSelectProductEvent}) => {
    return(
        <>
        <Header title="Producto" onSelectCategoryEvent={onSelectCategoryEvent} onSelectProductEvent={onSelectProductEvent}/>
        <View style={styles.container}>
            <Text>Detalles del producto</Text>
        </View>
        </>
    )
}

export default ProductDetailScreen 

const styles = StyleSheet.create({
})