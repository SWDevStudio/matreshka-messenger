import { Network } from "@/api/Network";
import { ApiNetworkMethods } from "@/struct/api/ApiNetworksMethods";

export class ApiFacebook extends Network implements ApiNetworkMethods {
  fetchChat(): Promise<any> {
    return Promise.resolve(undefined);
  }

  fetchUser(): Promise<any> {
    return Promise.resolve(undefined);
  }

  fetchWallMessages(): Promise<any> {
    return Promise.resolve(undefined);
  }

  login(login:string, password:string, code?:string): Promise<any> {
    return Promise.resolve(undefined);
  }

  logout(): Promise<any> {
    return Promise.resolve(undefined);
  }

  sendMessage(): Promise<any> {
    return Promise.resolve(undefined);
  }

}
