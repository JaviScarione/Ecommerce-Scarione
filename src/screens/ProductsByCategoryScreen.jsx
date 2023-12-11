import {FlatList} from 'react-native'
import products_data from '../data/products_data.json'
import ProductItem from '../components/ProductItem'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import Search from '../components/Search'

const ProductsByCategoryScreen = ({category, onSelectCategoryEvent, onSelectProductEvent}) => {

    const [productsByCategory, setProductsByCategory] = useState([])
    const [search, setSearch] = useState('')


    useEffect(()=>{
        const productsFilteredByCategory = products_data.filter(product=>product.category===category)
        const productsFiltered = productsFilteredByCategory.filter(
            product=>product.title.toLowerCase().includes(search.toLowerCase()))
        setProductsByCategory(productsFiltered)
    },[category, search])

    const renderProductItem = ({item}) => (
        <ProductItem product={item} onSelectProductEvent={onSelectProductEvent} onSelectCategoryEvent={onSelectCategoryEvent}/>
    )

    const onSearch = (search) => {
        setSearch(search)
    }

    return(
        <>
        <Header title="Productos" onSelectCategoryEvent={onSelectCategoryEvent} onSelectProductEvent={onSelectProductEvent}/>
        <Search onSearchHandlerEvent ={onSearch} />
        <FlatList
            data={productsByCategory}
            renderItem={renderProductItem}
            keyExtractor={item=>item.id}
        />
        </>
    )
}

export default ProductsByCategoryScreen