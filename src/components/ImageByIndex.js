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

const image4_1 = "/images/portfolio/ducting_and_extraction_systems/slide1.jpg";
const image4_2 = "/images/portfolio/ducting_and_extraction_systems/slide2.jpg";
const image4_3 = "/images/portfolio/ducting_and_extraction_systems/slide3.jpg";
const image4_4 = "/images/portfolio/ducting_and_extraction_systems/slide4.jpg";
const image4_5 = "/images/portfolio/ducting_and_extraction_systems/slide5.jpg";

const image5_1 = "/images/portfolio/machine_guards/slide1.jpg";
const image5_2 = "/images/portfolio/machine_guards/slide2.jpg";
const image5_3 = "/images/portfolio/machine_guards/slide3.jpg";
const image5_4 = "/images/portfolio/machine_guards/slide4.jpg";

const image6_1 = "/images/portfolio/pipework/slide1.jpg";
const image6_2 = "/images/portfolio/pipework/slide2.jpg";
const image6_3 = "/images/portfolio/pipework/slide3.jpg";
const image6_4 = "/images/portfolio/pipework/slide4.jpg";
const image6_5 = "/images/portfolio/pipework/slide5.jpg";
const image6_6 = "/images/portfolio/pipework/slide6.jpg";
const image6_7 = "/images/portfolio/pipework/slide7.jpg";

const image7_1 = "/images/portfolio/bespoke_fabrication/slide1.jpg";
const image7_2 = "/images/portfolio/bespoke_fabrication/slide2.jpg";
const image7_3 = "/images/portfolio/bespoke_fabrication/slide3.jpg";
const image7_4 = "/images/portfolio/bespoke_fabrication/slide4.jpg";
const image7_5 = "/images/portfolio/bespoke_fabrication/slide5.jpg";

const image8_1 = "/images/portfolio/installation/slide1.jpg";
const image8_2 = "/images/portfolio/installation/slide2.jpg";
const image8_3 = "/images/portfolio/installation/slide3.jpg";
const image8_4 = "/images/portfolio/installation/slide4.jpg";
const image8_5 = "/images/portfolio/installation/slide5.jpg";

export const images1 = [image1_1, image1_2, image1_3, image1_4, image1_5];
export const images2 = [image2_1, image2_2, image2_3, image2_4, image2_5];
export const images3 = [image3_1, image3_2, image3_3, image3_4, image3_5];
export const images4 = [image4_1, image4_2, image4_3, image4_4, image4_5];
export const images5 = [image5_1, image5_2, image5_3, image5_4];
export const images6 = [
  image6_1,
  image6_2,
  image6_3,
  image6_4,
  image6_5,
  image6_6,
  image6_7,
];
export const images7 = [image7_1, image7_2, image7_3, image7_4, image7_5];
export const images8 = [image8_1, image8_2, image8_3, image8_4, image8_5];

const imageByIndex1 = (index) => images1[index % images1.length];
const imageByIndex2 = (index) => images2[index % images2.length];
const imageByIndex3 = (index) => images3[index % images3.length];
const imageByIndex4 = (index) => images4[index % images4.length];
const imageByIndex5 = (index) => images5[index % images5.length];
const imageByIndex6 = (index) => images6[index % images6.length];
const imageByIndex7 = (index) => images7[index % images7.length];
const imageByIndex8 = (index) => images8[index % images8.length];

export {
  imageByIndex1,
  imageByIndex2,
  imageByIndex3,
  imageByIndex4,
  imageByIndex5,
  imageByIndex6,
  imageByIndex7,
  imageByIndex8,
};
