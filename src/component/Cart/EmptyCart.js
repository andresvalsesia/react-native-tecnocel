import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import './EmptyCart.css'
// import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

const EmptyCart = () => {
  return (
    <View className='empty-cart'>
        <Text>Aún no agregaste productos a tu bolsa de compras</Text>
        <Icon style={{fontSize: 20, color: "#88D317"}} name="remove"/>
    </View>
  )
}

export default EmptyCart