    import { useEffect, useState } from 'react';
    import AsyncStorage from '@react-native-async-storage/async-storage';
    import useToastMessage from './useToastMessage';
    import { StatusEnum } from '../../utils/colorUtil';

    const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [storedValue, setStoredValue] = useState<T>(initialValue);
    const { showToast } = useToastMessage();

    useEffect(() => {
        const loadStoredValue = async () => {
        try {
            const storedItem = await AsyncStorage.getItem(key);
            if (storedItem !== null) {
            setStoredValue(JSON.parse(storedItem));
            }
        } catch (error) {
            console.error('Error loading data from AsyncStorage:', error);
        }
        };

        loadStoredValue();
    }, [key]);

    const setValue = async (value: T) => {
        try {
        const valueToStore = JSON.stringify(value);
        await AsyncStorage.setItem(key, valueToStore);
        setStoredValue(value);
        showToast(StatusEnum.SUCCESS, 'Success', 'Value updated!');
        } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
        showToast(StatusEnum.ERROR, 'Error', 'Failed to update value');
        }
    };

    const getValue = async () => {
        try {
        const storedItem = await AsyncStorage.getItem(key);
        if (storedItem !== null) {
            return JSON.parse(storedItem);
        }
        } catch (error) {
        console.error('Error getting data from AsyncStorage:', error);
        }
        return null;
    };

    const removeValue = async () => {
        try {
        await AsyncStorage.removeItem(key);
        setStoredValue(initialValue);
        showToast(StatusEnum.SUCCESS, 'Success', 'Value removed!');
        } catch (error) {
        console.error('Error removing data from AsyncStorage:', error);
        showToast(StatusEnum.ERROR, 'Error', 'Failed to remove value');
        }
    };

    const clearAllLocalStorage = async () => {
        try {
        await AsyncStorage.clear();
        showToast(StatusEnum.SUCCESS, 'Success', 'All data removed!');
        } catch (error) {
        console.error('Error clearing all data from AsyncStorage:', error);
        showToast( StatusEnum.ERROR, 'Error', 'Failed to clear all data');
        }
    };

    return { storedValue, setValue, getValue, removeValue, clearAllLocalStorage };
    };

    export default useLocalStorage;
