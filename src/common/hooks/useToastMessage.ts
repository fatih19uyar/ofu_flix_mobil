import { useCallback } from 'react';
import Toast from 'react-native-toast-message';
import { StatusEnum } from '../../utils/colorUtil';

const useToastMessage = () => {
  const showToast = useCallback(
    (status: StatusEnum, text1: string, text2?: string) => {
      let type;
      switch (status) {
        case StatusEnum.ERROR:
          type = 'error';
          break;
        case StatusEnum.SUCCESS:
          type = 'success';
          break;
        case StatusEnum.INFO:
          type = 'info';
          break;
        default:
          type = 'success';
      }

      Toast.show({
        type,
        text1,
        text2,
        visibilityTime: 3000, // Toast'un ekranda kalma süresi
        autoHide: true,
        position:'bottom'
      });
    },
    [],
  );

  return { showToast };
};

export default useToastMessage;
