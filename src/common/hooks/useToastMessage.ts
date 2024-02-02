import { useCallback } from 'react';
import Toast, { ToastShowParams } from 'react-native-toast-message';

const useToastMessage = () => {
  const showToast = useCallback(
    (options: ToastShowParams) => {
      Toast.show({
        visibilityTime: 3000, // Toast'un ekranda kalma süresi
        autoHide: true,
        position:'bottom',
        ...options
      });
    },
    [],
  );
  return { showToast };
};

export default useToastMessage;
