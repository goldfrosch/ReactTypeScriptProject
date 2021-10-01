export enum Pallete {
  primary = "#296043",
  header = "rgba(1, 98, 65, 1)",
  tertiary = "#94C377",
  gray = "#828282",
  lightGray = "#eee",
  white = "#fff",
  pagingNumColor = "#00AAFF",
}

type ButtonOption = {
  backgroundColor: Pallete;
  color: Pallete;
  border: Pallete;
}

export enum ThemeColor {
  ButtonSample1 = "ButtonSample1",
  ButtonSample2 = "ButtonSample2",
  ButtonSample3 = "ButtonSample3",
}

export const buttonThemeMap: { [key in ThemeColor]: ButtonOption} = {
  ButtonSample1: {
    backgroundColor: Pallete.tertiary,
    color: Pallete.white,
    border: Pallete.white,
  },
  ButtonSample2: {
    backgroundColor: Pallete.tertiary,
    color: Pallete.white,
    border: Pallete.gray,
  },
  ButtonSample3: {
    backgroundColor: Pallete.primary,
    color: Pallete.white,
    border: Pallete.lightGray,
  }
}