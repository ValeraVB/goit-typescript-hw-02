export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  description: string | null;
  likes: number;
  views: number;
  downloads: number;
}
