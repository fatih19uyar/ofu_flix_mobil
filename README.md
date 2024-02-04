# OfuFlix

OfuFlix, TypeScript ve React Native kullanılarak geliştirilmiş bir film izleme platformudur.

## Başlangıç

>**Not**: Devam etmeden önce [React Native - Çevre Kurulumu](https://reactnative.dev/docs/environment-setup) talimatlarını "Yeni bir uygulama oluşturma" adımına kadar tamamladığınızdan emin olun.

### Adım 1: Metro Sunucusunu Başlatın

İlk olarak, React Native ile birlikte gelen JavaScript _bundler_ olan **Metro**'yu başlatmanız gerekecek.

Metro'yu başlatmak için, React Native proje _kökünden_ aşağıdaki komutu çalıştırın:

```bash
# npm kullanarak
npm start

# Yarn kullanarak
yarn start
```

### Adım 2: Uygulamanızı Başlatın

Metro Bundler'ı kendi _terminalinde_ çalıştırın. React Native proje _kökünden_ yeni bir terminal açın ve aşağıdaki komutu çalıştırarak _Android_ veya _iOS_ uygulamanızı başlatın:

#### Android İçin

# npm kullanarak
npm run android

# Yarn kullanarak
yarn android
```

#### iOS İçin

# npm kullanarak
npm run ios

# Yarn kullanarak
yarn ios
```

Her şey doğru bir şekilde ayarlandıysa, uygulamanızı _Android Emulator_ veya _iOS Simulator_'de kısa süre içinde görmelisiniz. Emülatör/simülatörünüzü doğru bir şekilde kurduğunuza emin olun.

Bu, uygulamanızı çalıştırmanın bir yolu — aynı zamanda doğrudan Android Studio ve Xcode içinden de çalıştırabilirsiniz.

### Adım 3: Uygulamanızı Düzenleme

Uygulamayı başarıyla çalıştırdığınıza göre, şimdi onu düzenleyelim.

1. `App.tsx` dosyasını tercih ettiğiniz metin düzenleyicinizde açın ve bazı satırları düzenleyin.
2. **Android için**: Değişikliklerinizi görmek için <kbd>R</kbd> tuşuna iki kez basın veya **Geliştirici Menüsü**'nden **"Yeniden Yükle"**'yi seçin (<kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows ve Linux) veya <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS))!

   **iOS için**: Değişiklikleri görmek için iOS Simulator'da <kbd>Cmd ⌘</kbd> + <kbd>R</kbd>'ye basın ve uygulamayı yeniden yükleyin!

## Kullanılan API'ler 

- **@hookform/resolvers**: React Hook Form için doğrulama çözümleri sağlar.
- **@react-native-async-storage/async-storage**: Verileri asenkron olarak depolamak ve almak için kullanılır.
- **@react-native-community/viewpager**: Android ve iOS için sayfa geçişlerini sağlar.
- **@react-navigation/bottom-tabs**: Alt sekmeli gezinme için bir React Navigation bileşeni.
- **@react-navigation/native**: Ekranlar arası gezinme için temel React Navigation paketi.
- **@react-navigation/native-stack**: Stack tabanlı gezinme için React Navigation paketi.
- **@react-navigation/stack**: Stack tabanlı gezinme için temel React Navigation paketi.
- **@reduxjs/toolkit**: Redux için kullanışlı araçlar sağlayan bir kit.
- **@types/jwt-decode**: JWT token'ları için TypeScript tür tanımlamaları.
- **react-native-dotenv**: Çevresel değişkenleri kullanarak konfigürasyon yönetimi için.
- **react-native-elements**: Önceden tasarlanmış UI bileşenleri sağlar.
- **react-native-gesture-handler**: Dokunmatik etkileşimleri işlemek için kullanılır.
- **react-native-reanimated**: Yüksek performanslı animasyonlar için kullanılan bir kütüphane.
- **react-native-safe-area-context**: Cihazın güvenli bölgelerini kontrol etmek için.
- **react-native-youtube-iframe**: YouTube videolarını oynatmak için kullanılır.
- **styled-components**: CSS-in-JS yaklaşımını benimseyen bir stil kütüphanesi.
- **yup**: Şema tabanlı nesne doğrulama için.

## Tebrikler!

OfuFlix uygulamanızı başarıyla çalıştırdınız ve düzenlediniz. :partying_face:

```