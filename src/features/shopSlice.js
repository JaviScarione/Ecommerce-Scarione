import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
    name:"shop",
    initialState: {
        categorySelected: "",
        productIdSelected: 0,
        categories: [],
        products: [],
        productsFilteredByCategory: [],
        productSelected: {},
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
            state.productsFilteredByCategory = state.products.filter(product=>product.category===state.categorySelected)
        },
        setProductIdSelected: (state, action) => {
            state.productIdSelected = action.payload
        },
        setProductSelected: (state, action) => {
            state.productSelected = state.products.find(product => product.id === action.payload)
        }
    }
})

export const {setCategorySelected, setProductIdSelected, setProductSelected, setProducts} = shopSlice.actions

export default shopSlice.reducer