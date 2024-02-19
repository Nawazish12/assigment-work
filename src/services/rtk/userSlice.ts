import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types/AllTypes';


const initialState: UserState = {
  id:0 ,
  username: '',
  image: '',
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser(state, action: PayloadAction<UserState>) {
        const { id, username, image } = action.payload;
        state.id = id;
        state.username = username;
        state.image = image;
      },
    
    },
  });
  
export const { setUser} = userSlice.actions;

// Export the reducer
export default userSlice.reducer;