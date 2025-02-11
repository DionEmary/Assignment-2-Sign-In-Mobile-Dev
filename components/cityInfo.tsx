import { View, Text, StyleSheet } from 'react-native';

interface CityInfoProps {
  info: string;
}

const CityInfo: React.FC<CityInfoProps> = ({ info }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tail} />
      <View style={styles.bubble}>
        <Text style={styles.text}>{info}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    left: -10,
  },
  bubble: {
    backgroundColor: '#4dd2ff',
    padding: 15,
    borderRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    maxWidth: '90%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  tail: {
    position: 'absolute',
    top: -10,
    left: 40,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#4dd2ff',
  },
});

export default CityInfo;