
export interface RoutersType {
  [key: string]: string;
  readonly settings: string;
  readonly wall: string;
  readonly chat: string
}

export const ROUTERS: RoutersType = {
  settings: "/settings",
  wall: '/WallPage',
  chat: '/chat'
};
