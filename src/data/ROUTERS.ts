
export interface RoutersType {
  [key: string]: string;
  readonly settings: string;
  readonly wall: string;
  readonly chat: string;
  readonly login: string;
}

export const ROUTERS: RoutersType = {
  settings: "/settings",
  wall: '/wallPage',
  chat: '/chat',
  login: '/login'
};
