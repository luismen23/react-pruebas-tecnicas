import { ProductTypes } from '@/interfaces/interfaces'

export const cartInitialState: Array<{
  id: string
  title: string
  price: number
  rating: number
  reviews_count: number
  image_url: string
  product_url: string
  brand: string
  category: string
  quantity: number
}> = JSON.parse(window.localStorage.getItem('cart') || '[]')

export const updateLocalStorage = (state: typeof cartInitialState): void => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (
  state: typeof cartInitialState,
  action: { type: string; payload: ProductTypes }
) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)

        return newState
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ]

      updateLocalStorage(newState)
      return newState
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case 'CLEAR_CART': {
      updateLocalStorage([])
      return cartInitialState
    }
  }

  return state
}
