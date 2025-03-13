export interface WeatherDataProps {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface SearchBarProps {
  placeholder: string;
  className: string;
  input: string;
  setSearch: (e: string) => void;
  search?: string;
  onKeyDownCapture?: (e: any) => void;
}

export interface MenuItemsListProps {
  Menu: MenuProps[];
}

export interface MenuProps {
  text: string;
  id: number;
}

export interface DropdownMenuitemProps {
  name: string;
  page: string;
}

export interface ParagraphProps {
  id: number;
  text: string;
  images: Array<ParagraphImagesProps>;
  quote: string | undefined;
}

interface ParagraphImagesProps {
  src: string;
}

export interface MagazineArticleItemProps {
  imgSrc: string;
  description: string;
  header: string;
  user_initials: string;
  user_name: string;
  likes: number | undefined;
  dislikes: number | undefined;
  comments: number | undefined;
  tags?: Array<Tags>;
  id: number;
}

export interface MagazineArticleProps {
  imgSrcFullSize: string;
  description: string;
  header: string;
  user_name: string;
  likes?: number | undefined;
  dislikes?: number | undefined;
  comments?: number | undefined;
  tags?: Array<Tags>;
  id?: number;
  paragraphs: Array<ParagraphProps>;
}

export type Tags =
  | "MTB"
  | "ROAD"
  | "SERVICE"
  | "INTRO"
  | "GRAVEL"
  | "ALL"
  | "TRAINING";
