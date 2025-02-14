import { View, Text, Image, StyleSheet } from 'react-native';
import CityInfo from '../components/cityInfo';
import CityLink from '../components/cityLink';

export default function EdmontonScreen() {
  const cityData = {
    image: require('../assets/edmonton.jpg'),
    link: 'https://www.edmonton.ca/',
    info: 'Edmonton, the capital city of Alberta, Canada, is often called the "Gateway to the North" due to its strategic location as a hub for oil and gas industries and its proximity to the northern wilderness. Check out the Edmonton International Fringe Festival which attracts artists and visitors from all over the globe.',
  };

  return (
    <View style={styles.container}>
      <Image source={cityData.image} style={styles.cityImage} />
      <CityInfo info={cityData.info} />
      <CityLink link={cityData.link} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  cityImage: {
    width: 300,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
});