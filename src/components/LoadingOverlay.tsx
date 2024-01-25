import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '../common/hooks/useStore';

const LoadingScreen: React.FC = () => {
  const common = useAppSelector(state => state.common, shallowEqual);
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState('');

  useEffect(() => {
    setLoading(common.loading);
    const interval = setInterval(() => {
      setDots(prevDots => (prevDots === '...' ? '' : `${prevDots}.`));
    }, 500);

    return () => clearInterval(interval); 
  }, [common.loading]);

  if (!loading) return null;

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Image
          style={{ height: 80, width: 80 }}
          source={require('../assets/images/loading.gif')}
        />
        <Text style={styles.text}>Loading{dots}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  overlay: {
    backgroundColor: '#333333',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    marginTop: 10,
  },
});

export default LoadingScreen;
