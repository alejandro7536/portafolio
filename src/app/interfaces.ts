export interface InformationRow {
  title : string;
  description: any;
}

export interface Image {
  id:                       string;
  created_at:               Date;
  updated_at:               Date;
  promoted_at:              null;
  width:                    number;
  height:                   number;
  color:                    string;
  blur_hash:                string;
  description:              null;
  alt_description:          string;
  urls:                     Urls;
  links:                    ImageLinks;
  categories:               any[];
  likes:                    number;
  liked_by_user:            boolean;
  current_user_collections: any[];
  sponsorship:              null;
  topic_submissions:        TopicSubmissions;
  user:                     User;
  statistics:               Statistics;
}

export interface ImageLinks {
  self:              string;
  html:              string;
  download:          string;
  download_location: string;
}

export interface Statistics {
  downloads: Downloads;
  views:     Downloads;
  likes:     Downloads;
}

export interface Downloads {
  total:      number;
  historical: Historical;
}

export interface Historical {
  change:     number;
  resolution: string;
  quantity:   number;
  values:     Value[];
}

export interface Value {
  date:  Date;
  value: number;
}

export interface TopicSubmissions {
}

export interface Urls {
  raw:     string;
  full:    string;
  regular: string;
  small:   string;
  thumb:   string;
}

export interface User {
  id:                 string;
  updated_at:         Date;
  username:           string;
  name:               string;
  first_name:         string;
  last_name:          string;
  twitter_username:   null;
  portfolio_url:      null;
  bio:                string;
  location:           string;
  links:              UserLinks;
  profile_image:      ProfileImage;
  instagram_username: string;
  total_collections:  number;
  total_likes:        number;
  total_photos:       number;
  accepted_tos:       boolean;
  for_hire:           boolean;
  social:             Social;
}

export interface UserLinks {
  self:      string;
  html:      string;
  photos:    string;
  likes:     string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small:  string;
  medium: string;
  large:  string;
}

export interface Social {
  instagram_username: string;
  portfolio_url:      null;
  twitter_username:   null;
  paypal_email:       null;
}

export interface Certificacion {
  image: string;
  name: string;
  url: string;
}

export interface Project {
  image: string;
  name: string;
  url: string;
  fechaInicio: string;
  fechaFin: string;
}

export interface Empresa {
  image: string;
  name: string;
  puesto: string;
  fechaInicio: string;
  fechaFin?: string;
  url?: string;
}

export interface Moneda {
  image: string;
  name: string;
  shortName: string;
  porcentaje: number;
}
