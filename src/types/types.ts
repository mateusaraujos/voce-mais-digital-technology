export type BannerType = string;
export type TextType = string;
export type UrlType = string;

export interface FormFieldChoice {
  value: string;
  label: string;
}

export interface FormField {
  label: string;
  type: string;
  name: string;
  choices?: FormFieldChoice[];
  placeholder: string;
  required: boolean;
}

export interface FormValues {
  [key: string]: string;
}

export interface HeaderLink {
  url: UrlType;
  text: TextType;
}

export interface ToCourse {
  url: UrlType;
  text: TextType;
}
