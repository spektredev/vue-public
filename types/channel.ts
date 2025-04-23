export interface Channel {
  id: number;
  title: string;
  description?: string;
  cat_id: number;
  link: string;
  subs?: number;
  img_link?: string;
}
