import {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CityInfo from './cityInfo';
import CityLink from './cityLink';

const CityTabs = () => {
    const [city, setCity] = useState<'Calgary' | 'Edmonton'>('Calgary');

    const cityInfo = {
        Calgary: {
            image: require('../assets/calgary.jpg'),
            link: 'https://www.calgary.ca/home.html',
            info: 'Calgary trivia here',
        },
        Edmonton: {
            image: require('../assets/edmonton.jpg'),
            link: 'https://www.edmonton.ca/',
            info: 'Edmonton trivia here',
        }
    }

    return (
        <View>
            <View>
                <TouchableOpacity style={[styles.tab, city === 'Calgary' && styles.activeTab]} onPress={() => setCity('Calgary')}>
                    <Text>Calgary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, city === 'Edmonton' && styles.activeTab]} onPress={() => setCity('Edmonton')}>
                    <Text>Edmonton</Text>
                </TouchableOpacity>
            </View>
            <Image source={cityInfo[city].image} style={styles.cityImage} />
            <CityInfo info={cityInfo[city].info} />
            <CityLink link={cityInfo[city].link} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    tabContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    tab: {
      padding: 10,
      marginHorizontal: 10,
      backgroundColor: 'lightgray',
      borderRadius: 5,
    },
    activeTab: {
      backgroundColor: 'gray',
    },
    tabText: {
      fontSize: 16,
    },
    cityImage: {
      width: 300,
      height: 200,
      margin: 10,
      borderRadius: 20,
    },
  });

export default CityTabs;
