import { Network } from "@/api/Network";
import { ApiNetworkMethods } from "@/struct/api/ApiNetworksMethods";

export class ApiVk extends Network implements ApiNetworkMethods {
  fetchChat(): Promise<any> {
    return Promise.resolve(undefined);
  }

  fetchUser(): Promise<any> {
    return Promise.resolve(undefined);
  }

  fetchWallMessages(): Promise<any> {
    return Promise.resolve(undefined);
  }

  async login(login:string, password:string, code?:string): Promise<any> {
    console.log(login, password, code);
    console.log("start login");
    return Promise.resolve(undefined);
  }

  logout(): Promise<any> {
    return Promise.resolve(undefined);
  }

  sendMessage(): Promise<any> {
    return Promise.resolve(undefined);
  }

}

