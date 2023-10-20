import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


export interface PostObj {
  id: number
  image: string
  description: string
  title: string
}

interface PostsState {
  postList: PostObj[]
  idCounter: number
}

const initialState: PostsState = {
  postList: [
  ],
  idCounter: 1
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostObj>) => {
      
      state.idCounter += 1

      state.postList.push(action.payload);
    },

    updatePost: (state, action: PayloadAction<PostObj>) => {
      
      const {id} = action.payload;
      // state.
      // return {...state, postList: state.postList.map(p => p.id === id ? action.payload : p)}
      state.postList = state.postList.map(p => p.id === id ? action.payload : p)
    },

    deletePost:  (state, action: PayloadAction<number>) => {
      
      const delId = action.payload;

      state.postList = state.postList.filter(item => item.id !== delId)
    },

  },
})

export const { addPost, updatePost, deletePost } = postsSlice.actions
export const selectIdCount = (state: RootState) => state.posts.idCounter
export const selectPostList = (state: RootState) => state.posts.postList


export default postsSlice.reducer