export interface NetworksType {
  name: string;
  shortName: string;
  icon: string;
  id: number;
}

export const NETWORKS: NetworksType[] = [
  {
    name: "Vkontakte",
    shortName: "vk",
    icon: "icon-vk-circle",
    id: 1
  },
  {
    name: "facebook",
    shortName: "facebook",
    icon: "icon-facebook-circle",
    id: 2
  }
];