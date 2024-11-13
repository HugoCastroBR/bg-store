export type Restaurant = {
  id: number;
  name: string;
  internalName: string;
  description: string | null;
  liveFlag: number;
  demoFlag: number;
  address1: string;
  address2: string;
  address3: string | null;
  city: string;
  county: string;
  postcode: string;
  country: string;
  timezoneOffset: string;
  locale: string;
  timeZone: string;
  webSettings: {
    id: number;
    venueId: number;
    bannerImage: string;
    backgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    navBackgroundColour: string;
  };
  ccy: string;
  ccySymbol: string;
  currency: string;
};


export type Image = {
  id: number;
  image: string;
};

export type ModifierItem = {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  qty?: number;
  available: boolean;
};

export type Modifier = {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
};

export type MenuItem = {
  id: number;
  name: string;
  description?: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  modifiers?: Modifier[];
  images?: Image[];
  available: boolean;
};

export type Section = {
  id: number;
  name: string;
  description?: string | null;
  position: number;
  visible: number;
  images: Image[];
  items: MenuItem[];
};

export type RestaurantItems = {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Section[];
};

