import { StyleSheet, Image, View, Dimensions } from 'react-native'
import React from 'react'
import { maps_api_key } from '../apis/googleCloud'

const MapPreview = ({location}) => {

    const icon='https://i.postimg.cc/5NgNBbFD/shop.png'
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?zoom=14&size=300x300&maptype=roadmap&markers=color:red%7Clabel:I%7C${location.latitude},${location.longitude}&markers=icon:${icon}%7C${location.latitude+0.01},${location.longitude-0.01}&path=color:0xCF5C36%7C${location.latitude},${location.longitude}%7C${location.latitude+0.01},${location.longitude-0.01}&key=${maps_api_key}`
  return (

    <View style={styles.mapPreview}>
      <Image
        style={styles.mapImage}
        source={{uri: mapPreviewUrl}}
        />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    mapPreview:{
        justifyContent: 'center',
        alignItems:'center',
    },
    mapImage:{
        width: 300,
        height: 300,
        borderRadius: 20,
    }
})