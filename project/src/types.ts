export enum FontStyle {
  Serif = "font-serif",
  Sans = "font-sans",
  Mono = "font-mono",
}

export enum TextColor {
  Purple = "text-purple-900",
  Indigo = "text-indigo-50",
  Blue = "text-blue-500",
  Rose = "text-rose-900",
}

export interface Template {
  id: number;
  name: string;
  backgroundUrl: string;
  textColor: TextColor; // Use enum
  overlayColor: string;
  fontStyle: FontStyle; // Use enum
  fontBackgroundColor: string;
}