import {FlatList, StyleSheet, View} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useGetCategoriesQuery } from '../services/shopService'
import { colors } from '../global/colors'


const CategoriesScreen = ({navigation}) => {

    const {data} = useGetCategoriesQuery()


    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation} />
    )

    return(
        <View style={styles.categories}>
        <FlatList style={styles.flatlist}
            data={data}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        </View>
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categories:{
        backgroundColor: colors.textLight
    },
    flatlist: {
        marginBottom: 90,
        marginHorizontal: 20,
    }
})

