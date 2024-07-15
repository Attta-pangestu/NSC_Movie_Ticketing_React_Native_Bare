import {StyleSheet} from 'react-native';
import { COLORS, FONTSIZE } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 600,
    height: 600,
    resizeMode: 'contain',
  },
});
