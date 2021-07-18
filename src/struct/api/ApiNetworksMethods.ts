export interface ApiNetworkMethods {
  sendMessage(): Promise<any>;

  fetchWallMessages(): Promise<any>;

  fetchChat(): Promise<any>;

  fetchUser(): Promise<any>;

  login(login: string, password: string, code?: string): Promise<any>;

  logout(): Promise<any>;
}