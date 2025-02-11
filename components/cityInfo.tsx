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
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

export default CityInfo;