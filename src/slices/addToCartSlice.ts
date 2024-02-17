import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Products } from '../page/Home'


export interface CartState {
    cart: Products[]
  }
const initialState: CartState = {
    cart: [],
  }
  export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addProductsToCart: (state, action: PayloadAction<Products>) => {
        const existingProduct = state.cart.find(
          (product) => product.id === action.payload.id
        );
        if (existingProduct) {// @ts-ignore
          existingProduct.quantity += 1;
        } else {// @ts-ignore
          state.cart.push({ ...action.payload, quantity: 1 });
        }
      },
      deleteProductsFromCart: (state, action: PayloadAction<number>) => {
        const productIdToDelete = action.payload;
        const existingProduct = state.cart.find((product) => product.id === productIdToDelete);
        if (existingProduct) {// @ts-ignore
          if (existingProduct.quantity > 1) {// @ts-ignore
            existingProduct.quantity -= 1;
          } else {
            state.cart = state.cart.filter((product) => product.id !== productIdToDelete);
          }
        }
      },
        deleteProduct: (state, action: PayloadAction<number>) => {
          const productIdToDelete = action.payload;
          state.cart = state.cart.filter((product) => product.id !== productIdToDelete);
        },
      },
    })
 export const {addProductsToCart,deleteProductsFromCart,deleteProduct} = productsSlice.actions;
export default productsSlice.reducer
