import { FlatList, Modal,Text, Pressable, View,StyleSheet, Image } from 'react-native'
import OrderItem from '../components/OrderItem'
import { useGetOrdersQuery } from '../services/shopService'
import { useSelector } from 'react-redux'
import { useState, useEffect, useRef } from 'react'
import { colors } from '../global/colors'


const OrdersScreen = () => {
  const [ordersData, setOrdersData] = useState([])
  const [ordersKeys, setOrdersKeys] = useState([])
  const [orderIdSelected, setOrderIdSelected] = useState("")
  const [modalVisible, setModalVisible] = useState(false)
  const [orderSelected, setOrderSelected] = useState(null)
  const localId = useSelector((state) => state.authReducer.localId);
  const { data, isLoading, error } = useGetOrdersQuery(localId);

  useEffect(() => {
    if (data) {
      const orders = Object.values(data);
      const keys = Object.keys(data);
      setOrdersData(orders);
      setOrdersKeys(keys);
    }
  }, [data, isLoading]);

  useEffect(() => {
    setOrderSelected(data && data[orderIdSelected]);
  }, [orderIdSelected]);

  const renderOrderItem = ({ item, index }) => {
    return (
      <OrderItem
        order={item}
        keyProp={ordersKeys[index]}
        setOrderIdSelected={setOrderIdSelected}
        setModalVisible={setModalVisible}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ordersData}
        renderItem={renderOrderItem}
        keyExtractor={(item, index) => ordersKeys[index]}
        style={styles.list}
      />
      <Modal visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Compra hecha el: {new Date(orderSelected?.createdAt).toLocaleDateString()} Total: ${orderSelected?.total}</Text>
            {orderSelected?.cartItems && orderSelected.cartItems.map((cartItem, index) => (
              <View key={index} style={styles.modalContent}>
                <Image
                  style={styles.cartItemImage}
                  resizeMode="cover"
                  source={{ uri: cartItem.thumbnail }}
                />
                <View style={styles.description}>
                  <Text style={styles.title}>{cartItem.title}.</Text>
                  <Text style={styles.quantity}>Cantidad: {cartItem.quantity}</Text>
                  <Text style={styles.price}>Precio: ${cartItem.price}</Text>
                </View>
              </View>
            ))}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.textLight,
    flex: 1,

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondaryBack,
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.textLight,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: colors.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "start",
    backgroundColor: colors.textLight,
    borderRadius: 20,
    width: 300,
  },
  description: {
    width: 250,
  },
  list: {
    marginBottom: 90,
  },
  title: {
    fontFamily: 'JosefinSans-Bold',
    fontSize: 16,
  },
  quantity: {
    fontFamily: 'JosefinSans-Regular',
  },
  price: {
    fontFamily: 'JosefinSans-Regular',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 180,
    marginTop:30
  },
  buttonClose: {
    backgroundColor: colors.primary,
  },
  textStyle: {
    color: colors.textLight,
    fontFamily: 'JosefinSans-Bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'JosefinSans-Bold',
  },
  cartItemImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginEnd: 10,
  },
});