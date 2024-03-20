import { RootState } from "./store";

export const selectUsers = (state: RootState) => state.users;
export const selectNextUrl = (state: RootState) => state.links.next_url;
export const selectPage = (state: RootState) => state.page;
export const selectTotalPage = (state : RootState) => state.total_pages;
export const selectLoading = (state : RootState) => state.loading;
export const selectLoadingMore = (state : RootState) => state.loadingMore;
