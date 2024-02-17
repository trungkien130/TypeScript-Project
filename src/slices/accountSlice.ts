import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { instance } from '../axios-instance'
import { User } from '../page/Home'

export interface AccountState {
    email: string,
    id:number
    dataUser:User,
  }
  
  const initialState: AccountState = {
    email: '',
    id:0,// @ts-ignore
    dataUser:{
      name:'',
      email:'',
      password:'',
      borndate:0,
      phoneNumber:0,
      address:'',
      gender:'',
    },
  }
  export const getListUser = createAsyncThunk(
    'user/fetchUserList',
    async () => {
      const response = await instance.get('/User')
      return response.data
    }
  )
export const accountSlice=createSlice({
name:'account',
initialState,
reducers:{
      saveUser: (state, action: PayloadAction<string>) => {
        state.email = action.payload
      },
      clearUser: (state) => {
        localStorage.removeItem('email');
        localStorage.removeItem('id');
        state.email = ''
        window.location.reload(); 
      },
      // editUser:(state ,action:PayloadAction<any>)=>{
      //   state.id=localStorage.getItem('id')
      //   state.dataUser=action.payload
      //   instance.put(`/User/${state.id}`,(state.dataUser)).then(res=>{
      //   })
      // },
},
extraReducers: (builder) => {
  builder.addCase(getListUser.fulfilled, (state, action: PayloadAction<User[]>) => {// @ts-ignore
    state.users = action.payload
  })
}
})
export const {saveUser,clearUser} = accountSlice.actions

export default accountSlice.reducer