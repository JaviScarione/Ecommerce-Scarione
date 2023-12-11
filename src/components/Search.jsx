import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { EvilIcons, Entypo  } from '@expo/vector-icons'; 
import { colors } from '../global/colors'


const Search = ({onSearchHandlerEvent}) => {

    const [searchInput, setSearchInput] = useState('')

    return (
        <View style={styles.searchContainer}>
            <TextInput
                style={styles.textInput}
                onChangeText={setSearchInput}
                placeholder='Buscar...'
                value={searchInput}
            />
            <TouchableOpacity onPress={()=>onSearchHandlerEvent(searchInput)}>
            <EvilIcons name="search" size={28} color={colors.secondary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={null}>
                <Entypo name="cross" size={28} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: colors.primary,
    },
    textInput:{
        width: '80%',
        color: '#fff',
        paddingLeft: 10,
    },

})