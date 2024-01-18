import {FlatList, StyleSheet} from 'react-native'
import CategoryItem from '../components/CategoryItem'
import { useGetCategoriesQuery } from '../services/shopService'
import { colors } from '../global/colors'

const CategoriesScreen = ({navigation}) => {

    //const categories = useSelector(state => state.shopReducer.categories)

    const {data, isLoading, error} = useGetCategoriesQuery()

    const renderCategoryItem = ({item}) => (
        <CategoryItem category={item} navigation={navigation} />
    )

    return(
        <>
        <FlatList 
            data={data}
            renderItem={renderCategoryItem}
            keyExtractor={item=>item}
        />
        </>
    )
}

export default CategoriesScreen

