interface UserObject {
  username: string;
  name: string;
  id: string;
}
export interface LoginResponse {
  access_token: string;
  user: UserObject;
}
