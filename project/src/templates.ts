import { Template } from './types';

const IMAGE_URLS = {
  PURPLE_PINK_FLOWERS: "https://images.unsplash.com/photo-1617796993472-7c1a483d3e39?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ELEGANT_BLUE_PURPLE: "https://images.unsplash.com/photo-1619922141822-8972ce55b44b?fm=jpg&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHVycGxlJTIwZmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D",
  BLUE_WATERCOLOR_DREAM: "https://images.unsplash.com/photo-1522518961115-07c922089dd4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  COLORFUL_ABSTRACT: "https://images.unsplash.com/photo-1487147264018-f937fba0c817?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  PINK_FLORAL: "https://plus.unsplash.com/premium_photo-1661427503852-5e2700754174?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const templates: Template[] = [
  {
    id: 1,
    name: "Purple Pink Watercolor Flowers",
    backgroundUrl: IMAGE_URLS.PURPLE_PINK_FLOWERS,
    textColor: "text-purple-900",
    overlayColor: "bg-white/10",
    fontStyle: "font-serif",
    fontBackgroundColor: "bg-white/35"
  },
  {
    id: 2,
    name: "Elegant Blue Purple",
    backgroundUrl: IMAGE_URLS.ELEGANT_BLUE_PURPLE,
    textColor: "text-indigo-50",
    overlayColor: "bg-indigo-900/100",
    fontStyle: "font-serif",
    fontBackgroundColor: "", // Empty string is allowed
  },
  {
    id: 3,
    name: "Blue Watercolor Dream",
    backgroundUrl: IMAGE_URLS.BLUE_WATERCOLOR_DREAM,
    textColor: "text-blue-900", // Updated to a valid Tailwind class
    overlayColor: "bg-blue-900/20",
    fontStyle: "font-sans",
    fontBackgroundColor: "bg-blue-100/35"
  },
  {
    id: 4,
    name: "Colorful Abstract Watercolor",
    backgroundUrl: IMAGE_URLS.COLORFUL_ABSTRACT,
    textColor: "text-purple-900",
    overlayColor: "bg-white/10",
    fontStyle: "font-serif",
    fontBackgroundColor: "bg-yellow-200/30"
  },
  {
    id: 5,
    name: "Pink Floral Watercolor",
    backgroundUrl: IMAGE_URLS.PINK_FLORAL,
    textColor: "text-rose-900",
    overlayColor: "bg-white/10",
    fontStyle: "font-serif",
    fontBackgroundColor: "bg-rose-200/70"
  }
];