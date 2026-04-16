export type SanityImageAsset = {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
  };
};

export type PortfolioCategory = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: SanityImageAsset;
  photoCount: string;
};

export type PortfolioPhoto = {
  _id: string;
  image: SanityImageAsset;
  alt: string;
};

export type PortfolioCategoryWithPhotos = {
  _id: string;
  title: string;
  description: string;
  photos: PortfolioPhoto[];
};
