import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../api';
import DataFromServer from '../../types/DataFromServer';
import Users from '../../types/Users';

export const usersThunk = createAsyncThunk('users/getUsers',
  async () => {
    const resolve = await getUsers().then(({
      users, total_users, page, success, total_pages, count, links: { next_url, prev_url }
    }) => {
      const newestUsers = users.sort((a: Users, b: Users) => b.registration_timestamp - a.registration_timestamp)

      return { newestUsers, total_users, page, success, total_pages,count, links: { next_url, prev_url } }
    });

    return resolve;
});

export const moreUsersThunk = createAsyncThunk('moreUserss/getUsers',
  async (nextUrl: string) => {
    const response = await fetch(nextUrl)
      .then(res => res.json())
      .then(({ users, page, links: { next_url, prev_url } }) => {

        return { users, page, links: { next_url, prev_url } }
      });

    return response;
  }
)

const initialState: DataFromServer = {
  users: [],
  total_users: 0,
  total_pages: 0,
  page: 0,
  success: true,
  count: 0,
  links: {
    next_url: '',
    prev_url: null
  },

  loading: false,
  loadingMore: false,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(usersThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(usersThunk.fulfilled, (state, action) => {
      
      state.users = action.payload.newestUsers;
      state.total_users = action.payload.total_users;
      state.count = action.payload.count;
      state.total_pages = action.payload.total_pages;
      state.links = action.payload.links;
      state.page = action.payload.page;
      state.loading = false;
    });

    builder.addCase(usersThunk.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(moreUsersThunk.pending, (state) => {
      state.loadingMore = true;
    });

    builder.addCase(moreUsersThunk.fulfilled, (state, action) => {
      state.users = [...state.users, ...action.payload.users];
      state.links.next_url = action.payload.links.next_url;
      state.links.prev_url = action.payload.links.prev_url;
      state.page = action.payload.page;
      state.loadingMore = false;
    });

    builder.addCase(moreUsersThunk.rejected, (state) => {
      state.loadingMore = false;
    });
  }
})

export default usersSlice.reducer;
