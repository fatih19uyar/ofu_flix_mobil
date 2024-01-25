import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import preloadImages from './preloadImages';

// cache fonts
const cacheFonts = () =>
  Promise.all([
    Icon.loadFont(), // Bu satır ile Ionicons font dosyasını yükleyebilirsiniz
    // İhtiyaç duyduğunuz diğer fontları buraya ekleyebilirsiniz
  ]);

// Image prefetch için URL veya require ile sağlanan sayı tipindeki kaynakları içeren bir nesne
type ImageAsset = string | number;

// cache images
const cacheImages = (images: { [key: string]: ImageAsset }) =>
  Object.values(images).map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else if (typeof image === 'number') {
      return Image.prefetch(image.toString());
    }
    // Eğer başka bir tip kullanılıyorsa, gerektiğinde onu işle
  });

// preload async
const loadAssetsAsync = async () => {
  // preload assets
  const fontAssets = cacheFonts();
  const imageAssets = cacheImages(preloadImages);

  // promise load all
  return Promise.all([fontAssets, ...imageAssets]);
};

export default {
  cacheFonts,
  cacheImages,
  loadAssetsAsync
};
