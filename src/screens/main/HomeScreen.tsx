import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MainStackParamList } from '../../navigation/types';
import { colors } from '../../theme/colors';
import { Typography } from '../../components/Typography';

type Props = BottomTabScreenProps<MainStackParamList, 'Home'>;

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Typography variant="h4">Trang chủ</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.default,
  },
}); 