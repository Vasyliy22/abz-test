import User from "./User";
import Users from "./Users";

export default interface DataFromServer {
  users: Users[],
  user: User | null,
  total_users: number,
  page: number,
  success: boolean,
  total_pages: number,
  count: number,
  links: {
    next_url: string,
    prev_url: null
  },
  loading: boolean,
  loadingMore: boolean,
}