export interface NetworksType {
  name: string;
  shortName: string;
  icon: string;
  id: number;
  baseUrl: string;
}

export const NETWORKS: NetworksType[] = [
  {
    name: "Vkontakte",
    shortName: "vk",
    icon: "icon-vk-circle",
    id: 1,
    baseUrl: ''
  },
  {
    name: "Facebook",
    shortName: "facebook",
    icon: "icon-facebook-circle",
    id: 2,
    baseUrl: ''
  }
];