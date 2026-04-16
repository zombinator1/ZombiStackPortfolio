export const categoriesQuery = `
  *[_type == "portfolioCategory"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    coverImage,
    photoCount
  }
`;

export const categoryWithPhotosQuery = `
  *[_type == "portfolioCategory" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "photos": *[_type == "portfolioPhoto" && references(^._id)] | order(order asc) {
      _id,
      image,
      alt
    }
  }
`;
