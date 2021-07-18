export interface ApiNetworkMethods {
  sendMessage(): Promise<any>;

  fetchWallMessages(): Promise<any>;

  fetchChat(): Promise<any>;

  fetchUser(): Promise<any>;

  login(): Promise<any>;

  logout?(): Promise<any>;
}