import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAllLocalStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Error clearing all data from AsyncStorage:', error);
  }
};

export const getLocalStorageItem = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.error('Error getting data from AsyncStorage:', error);
    return null;
  }
};

export const setLocalStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error('Error saving data to AsyncStorage:', error);
  }
};

export const removeLocalStorageByKey = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error clearing ' + key + ' data from AsyncStorage:', error);
  }
};
