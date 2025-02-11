import { View, Text, StyleSheet } from 'react-native';

interface CityInfoProps {
  info: string;
}

const CityInfo: React.FC<CityInfoProps> = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#ccf2ff',
    borderRadius: 20,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CityInfo;