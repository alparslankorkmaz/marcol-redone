const image1_1 = "/images/portfolio/scrubbing_systems/slide1.jpg";
const image1_2 = "/images/portfolio/scrubbing_systems/slide2.jpg";
const image1_3 = "/images/portfolio/scrubbing_systems/slide3.jpg";
const image1_4 = "/images/portfolio/scrubbing_systems/slide4.jpg";
const image1_5 = "/images/portfolio/scrubbing_systems/slide5.jpg";

export const images1 = [image1_1, image1_2, image1_3, image1_4, image1_5];

const imageByIndex1 = (index) => images1[index % images1.length];

export default imageByIndex1;
