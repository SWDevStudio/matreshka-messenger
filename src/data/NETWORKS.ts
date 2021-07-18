import { ApiVk } from "@/api/ApiVk";
import { ApiFacebook } from "@/api/ApiFacebook";
export interface NetworksType {
  [key: string]: any;
  readonly name: string;
  readonly shortName: string;
  readonly icon: string;
  readonly id: number;
  readonly api: ApiVk | ApiFacebook;
}

export const NETWORKS_IDS = {
  vk: 1,
  facebook: 2
};

export const NETWORKS: NetworksType[] = [
  {
    name: "Vkontakte",
    shortName: "vk",
    icon: "icon-vk-circle",
    id: NETWORKS_IDS.vk,
    api: new ApiVk('', {})
  },
  {
    name: "Facebook",
    shortName: "facebook",
    icon: "icon-facebook-circle",
    id: NETWORKS_IDS.facebook,
    baseUrl: "",
    api: new ApiFacebook("")
  }
];

