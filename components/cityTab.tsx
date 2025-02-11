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
      justifyContent: "space-between",
      alignItems: 'center',    
      padding: 20,
    },
    tabContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    tab: {
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 20,
      backgroundColor: '#ccf2ff',
      borderRadius: 20,
    },
    activeTab: {
      backgroundColor: '#4dd2ff',
    },
    tabText: {
      fontSize: 16,
    },
    cityImage: {
      width: 300,
      height: 200,
      marginTop: 25,
      marginBottom: 25,
      borderRadius: 20,
    },
    
  });

export default CityTabs;
