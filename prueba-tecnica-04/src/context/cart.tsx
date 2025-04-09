import { createContext, useReducer, useState } from 'react'
import { cartInitialState, cartReducer } from '@/reducers/cart'
import { ProductTypes } from '@/interfaces/interfaces'

export const CartContext = createContext<{
  cart: Array<any>
  addToCart: (product: ProductTypes) => void
  removeFromCart: (product: ProductTypes) => void
  clearCart: () => void
}>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  // const [cart, setCart] = useState<Array<any>>([])
  // usando el reducer
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product: ProductTypes) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    })

  const removeFromCart = (product: ProductTypes) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    })

  const clearCart = () =>
    dispatch({
      type: 'CLEAR_CART',
      payload: {} as ProductTypes,
    })

  // const addToCart = (product: any) => {

  //check if the product is already in the cart
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)

  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   // if is not in the cart
  //   setCart(prevState => [
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1,
  //     },
  //   ])
  // }

  // const removeFromCart = (product: ProductTypes) => {
  //   setCart(prevState => prevState.filter(item => item.id !== product.id))
  // }

  // const clearCart = () => {
  //   setCart([])
  // }

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
