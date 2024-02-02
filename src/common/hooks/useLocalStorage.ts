import AsyncStorage from '@react-native-async-storage/async-storage';
import { device } from '../../constants';
import { ContentItem } from '../../store/content/type';

export const clearAllLocalStorage = async () => {
  try {
    device.iOS
      ? await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
      : await AsyncStorage.clear();
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
export const updateLocalStorageByKey = async (key: string, newItem: ContentItem, process: 'add'|'remove') => {
  try {
    const existingData = await AsyncStorage.getItem(key);
    if (process === 'add')
    if (existingData) {
      const existingArray = JSON.parse(existingData);
      existingArray.push(newItem);
      await AsyncStorage.setItem(key, JSON.stringify(existingArray));
    } else {
      const newArray = [newItem];
      await AsyncStorage.setItem(key, JSON.stringify(newArray));
    }
    else if (process === 'remove'){
      if (!existingData) return;
      const existingArray: ContentItem[] = JSON.parse(existingData);
      const newArray = existingArray.filter(item => item.id !== newItem.id);
      await AsyncStorage.setItem(key, JSON.stringify(newArray));
    }
  } catch (error) {
    console.error('Error updating ' + key + ' data in AsyncStorage:', error);
  }
}
