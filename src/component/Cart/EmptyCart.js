import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
// import './EmptyCart.css'
// import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const EmptyCart = () => {
  return (
    <View className='empty-cart'>
        <Text>Aún no agregaste productos a tu bolsa de compras</Text>
        <Icon style={{fontSize: "10rem", color: "#88D317"}} name="delete"/>
    </View>
  )
}

export default EmptyCart