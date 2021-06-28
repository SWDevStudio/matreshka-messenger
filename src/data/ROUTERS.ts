
export interface RoutersType {
  [key: string]: string;
  readonly settings: string;
  readonly wall: string
}

export const ROUTERS: RoutersType = {
  settings: "/settings",
  wall: '/wall'
};
