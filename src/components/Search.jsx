import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState, useEffect } from 'react'
import { EvilIcons, Entypo  } from '@expo/vector-icons'; 
import { colors } from '../global/colors'


const Search = ({onSearchHandlerEvent}) => {

    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        const regEx = /[^\w\s]/;
        if (regEx.test(searchInput)) {
          setError('Sólo se admiten letras y números');
          setSearchInput('');
        } else {
          setError('');
          onSearchHandlerEvent(searchInput);
        }
      }, [searchInput, onSearchHandlerEvent]);

    const onResetSearchHandler = () => {
        setSearchInput("")
        onSearchHandlerEvent(searchInput)
    }

    return (
        <>
            <View style={styles.searchContainer}>
                <EvilIcons name="search" size={28} color={colors.secondary} />
                <TextInput
                    style={styles.textInput}
                    onChangeText={setSearchInput}
                    placeholder='Buscar...'
                    value={searchInput}
                />
                <TouchableOpacity onPress={onResetSearchHandler}>
                    <Entypo name="cross" size={28} color={colors.secondary} />
                </TouchableOpacity>
            </View>
            {
                error
                ?
                <View><Text>{error}</Text></View>
                :
                null
            }
        </>
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
        color: colors.secondary,
        paddingLeft: 10,
    },

})