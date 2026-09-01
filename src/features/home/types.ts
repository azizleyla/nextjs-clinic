export type HeroLocalizedText = Record<string, string>;

export type HeroSlide = {
  id: string;
  title: HeroLocalizedText;
  description: HeroLocalizedText;
  image_url?: string | null;
  is_active?: boolean;
  order_index?: number;
};
