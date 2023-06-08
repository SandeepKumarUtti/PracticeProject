import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/theme.interface';
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    component: {
      backgroundColor: theme.color.primary,
      display: 'flex',
      flexDirection: 'row',
      height: 60,
      paddingHorizontal: theme.spacing.base,
      width: '100%',
      marginTop: 30,
      padding: 10,
      justifyContent: 'space-between',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  return styles;
};
export default createStyles;
