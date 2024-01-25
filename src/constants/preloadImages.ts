import { ImageSourcePropType } from "react-native";

export type ImageKeys =
  | 'bannerBander'
  | 'logoBander'
  | 'americanGangster'
  | 'breakingBad'
  | 'starwarsJedi'
  | 'guardians2'
  | 'darkKnight'
  | 'blackPanther'
  | 'peakyBlinders'
  | 'goodWillHunting'
  | 'johnMulaneyKG'
  | 'mask'
  | 'penguin'
  | 'robot';

interface ImageMap {
  [key: string]: string;
}
const images: ImageMap & Record<ImageKeys, ImageSourcePropType> = {
  bannerBander: require('../assets/images/content/black-mirror-bandersnatch.jpg'),
  logoBander: require('../assets/images/content/bandersnatch-logo.jpg'),
  americanGangster: require('../assets/images/content/circle_american-gangster.png'),
  breakingBad: require('../assets/images/content/circle_breaking-bad.png'),
  starwarsJedi: require('../assets/images/content/circle_star-wars-the-last-jedi.png'),
  guardians2: require('../assets/images/content/circle_guardians-vol2.png'),
  darkKnight: require('../assets/images/content/circle_the-dark-knight.png'),
  blackPanther: require('../assets/images/content/circle_black-panther.png'),
  peakyBlinders: require('../assets/images/content/peaky-blinders.jpg'),
  goodWillHunting: require('../assets/images/content/good-will-hunting.jpg'),
  johnMulaneyKG: require('../assets/images/content/john-mulaney-kid-gorgeous.jpg'),
  mask: require('../assets/user-icons/mask.jpg'),
  penguin: require('../assets/user-icons/purple-penguin.jpg'),
  robot: require('../assets/user-icons/robot.jpg'),
};

export default images;
