export interface MessageItemProp {
  readonly img?: string;
  readonly userName: string;
  readonly userId: number | string;
  readonly lastMessage?: string;
  readonly unreadMessage?: boolean;
  readonly lastTimeMessage?: string;
}