import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientInputProps {
  children?: React.ReactNode;
}

const ColorFullBorder: React.FC<GradientInputProps> = ({ children }) => {
  const [angle, setAngle] = useState(45); 
  const angleStep = 1; 
  const colors = [
    '#000000', '#F8012D', '#E50914', '#F72525', '#DC050C', 
    '#FF3131', '#FF2400', '#FF6666', '#FF6B6B', '#FF8787', '#FFFFFF',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAngle((prevAngle) => (prevAngle + angleStep) % 360);
    }, 100); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <LinearGradient
      colors={colors}
      useAngle
      angle={angle}
      angleCenter={{ x: 0.5, y: 0.5 }}
      style={styles.gradient}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    padding: 2,
    borderRadius: 10,
  },
});

export default ColorFullBorder;
