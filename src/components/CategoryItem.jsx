import { Text, StyleSheet, TouchableOpacity } from "react-native"
import Card from './Card'
import { colors } from '../global/colors'
import { useDispatch } from "react-redux"
import { setCategorySelected } from "../features/shopSlice"

const CategoryItem = ({ category, navigation }) => {

    const dispatch = useDispatch()

    return (
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Productos", {category})
            dispatch(setCategorySelected(category))
            }
            }>
            <Card style={styles.cardContainer}>
                <Text style={styles.text}>{category}</Text>
            </Card>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.primary,
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    text: {
        textTransform: 'capitalize',
        fontFamily: 'JosefinSans-Regular',
        fontSize: 18,
        color: colors.secondary,
    }
})