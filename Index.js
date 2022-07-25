import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import Product from './src/component/product/Product';
import Cart from './src/component/Cart/Cart'
import ProductDetails from './src/component/product/ProductDetails'

const Index = () => {
  return (
    <View>
      <Routes>
            <Route exact path="/" element={<Product/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/productDetails/:id" element={<ProductDetails/>}/>
          {/* <Route path="/" element={<Home />} />
          {user && user.role=="admin" &&  <Route path="/admin" element={<Admin/>}/>}
          <Route path="/cart" element={<Cart props={carrito}/>}/>
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<EditarProduct />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </View>
  )
}

export default Index