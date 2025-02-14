import { View, Text, Image, StyleSheet } from 'react-native';
import CityInfo from '../components/cityInfo';
import CityLink from '../components/cityLink';

export default function CalgaryScreen() {
  const cityData = {
    image: require('../assets/calgary.jpg'),
    link: 'https://www.calgary.ca/home.html',
    info: 'Calgary, Alberta, is known as "Cowtown" due to its deep-rooted connection to the cattle industry and its world-famous Calgary Stampede, an annual rodeo and exhibition that attracts over a million visitors. Calgary is a hub for innovation and economic growth, particularly in the energy sector.',
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
