import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { useSelector } from 'react-redux';
import { colors } from '../global/colors';

const { width } = Dimensions.get('window');

const Carousel = () => {

    const images = useSelector(state=>state.shopReducer.productSelected.images)

    return (
        <Swiper style={styles.container} showsButtons={false} dotColor={colors.secondary} activeDotColor={colors.primary}>
            {images.map((image, index) => (
                <View key={index} style={styles.slide}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            ))}
        </Swiper>
    )
}

export default Carousel

const styles = StyleSheet.create({
    container: {
        height: 300
    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: width,
      height:300
    },
  });