import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface IntroState {
  image: string
  description: string
}

// Define the initial state using that type
const initialState: IntroState = {
  image: "https://i.kym-cdn.com/entries/icons/original/000/027/916/hamster.jpg",
  description: "placeholder desc",
}

export const introSlice = createSlice({
  name: 'intro',
  initialState,
  reducers: {
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload
    },
  },
})

export const { setImage, setDescription } = introSlice.actions
export const selectImg = (state: RootState) => state.intro.image
export const selectDescription = (state: RootState) => state.intro.description

export default introSlice.reducer