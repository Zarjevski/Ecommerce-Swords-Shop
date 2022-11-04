import { createSlice, Reducer,  } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


const initialState: { name: string | undefined, role: Array<string>} = {
  name: "Guest",
  role: [],
};

const getUser = createAsyncThunk('user/getUser', async()=>{console.log('user')})


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state,actions)=>{
      state.name = actions.payload
    },
    
  },
});

export const {setName} = userSlice.actions
export default userSlice.reducer as Reducer
