export interface Template {
  id: number;
  name: string;
  backgroundUrl: string;
  textColor: string;
  overlayColor: string;
  fontStyle: string;
  fontBackgroundColor:string;
}

export interface CardData {
  template: Template;
  message: string;
  recipient: string;
  sender: string;
  recipientPhoto?: string;
}