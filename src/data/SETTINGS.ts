interface SettingBlock {
  icon?: string;
  text: string;
}

export interface SettingBlockLink extends SettingBlock {
  link: string;
}

export interface SettingBlockToggle extends SettingBlock {
  checked: boolean;
}

export interface SettingSelect extends SettingBlock {
  selected: string | number
}

export interface SettingRange extends SettingBlock {
  range: number;
}

export interface SETTINGS {
  title: string;
  blocks: SettingBlockLink[] | SettingBlockToggle[] | SettingSelect[] | SettingRange[]
}

export const SETTINGS: SETTINGS[] = [
  {
    title: "Важное",
    blocks: [
      {
        icon: "icon-logo",
        text: "О проекте",
        link: "/"
      }
    ]
  },
  {
    title: "Основные",
    blocks: [
      {
        icon: "icon-share",
        text: "Режим offline ",
        checked: false
      }
    ]
  },
  {
    title: "Интерфейс",
    blocks: [
      {
        text: "Закругление превью",
        range: 0
      }
    ]
  }
];
