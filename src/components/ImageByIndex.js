const image1_1 = "/images/portfolio/scrubbing_systems/slide1.jpg";
const image1_2 = "/images/portfolio/scrubbing_systems/slide2.jpg";
const image1_3 = "/images/portfolio/scrubbing_systems/slide3.jpg";
const image1_4 = "/images/portfolio/scrubbing_systems/slide4.jpg";
const image1_5 = "/images/portfolio/scrubbing_systems/slide5.jpg";

const image2_1 = "/images/portfolio/enclosures/slide1.jpg";
const image2_2 = "/images/portfolio/enclosures/slide2.jpg";
const image2_3 = "/images/portfolio/enclosures/slide3.jpg";
const image2_4 = "/images/portfolio/enclosures/slide4.jpg";
const image2_5 = "/images/portfolio/enclosures/slide5.jpg";

const image3_1 = "/images/portfolio/tanks_and_bunds/slide1.jpg";
const image3_2 = "/images/portfolio/tanks_and_bunds/slide2.jpg";
const image3_3 = "/images/portfolio/tanks_and_bunds/slide3.jpg";
const image3_4 = "/images/portfolio/tanks_and_bunds/slide4.jpg";
const image3_5 = "/images/portfolio/tanks_and_bunds/slide5.jpg";

export const images1 = [image1_1, image1_2, image1_3, image1_4, image1_5];
export const images2 = [image2_1, image2_2, image2_3, image2_4, image2_5];
export const images3 = [image3_1, image3_2, image3_3, image3_4, image3_5];

const imageByIndex1 = (index) => images1[index % images1.length];
const imageByIndex2 = (index) => images2[index % images2.length];
const imageByIndex3 = (index) => images3[index % images3.length];

export { imageByIndex1, imageByIndex2, imageByIndex3 };
