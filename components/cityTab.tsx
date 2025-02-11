import {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import CityInfo from './cityInfo';
import CityLink from './cityLink';

const CityTabs = () => {
    const [city, setCity] = useState<'Calgary' | 'Edmonton'>('Calgary');

    const cityInfo = {
        Calgary: {
            image: require('../assets/calgary.jpg'),
            link: 'https://www.calgary.ca/home.html',
            info: 'Calgary, Alberta, is known as "Cowtown" due to its deep-rooted connection to the cattle industry and its world-famous Calgary Stampede, an annual rodeo and exhibition that attracts over a million visitors. Calgary is a hub for innovation and economic growth, particularly in the energy sector.',
        },
        Edmonton: {
            image: require('../assets/edmonton.jpg'),
            link: 'https://www.edmonton.ca/',
            info: 'Edmonton, the capital city of Alberta, Canada, is often called the "Gateway to the North" due to its strategic location as a hub for oil and gas industries and its proximity to the northern wilderness. The city\'s rich cultural scene includes the Edmonton International Fringe Festival, one of the largest fringe theater festivals in the world, attracting artists and visitors from all over the globe.',
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TouchableOpacity style={[styles.tab, city === 'Calgary' && styles.activeTab]} onPress={() => setCity('Calgary')}>
                    <Text style={[styles.tabText, city === 'Calgary' && styles.activeText]}>Calgary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.tab, city === 'Edmonton' && styles.activeTab]} onPress={() => setCity('Edmonton')}>
                    <Text style={[styles.tabText, city === 'Edmonton' && styles.activeText]}>Edmonton</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
              <Image source={cityInfo[city].image} style={styles.cityImage} />
              <CityInfo info={cityInfo[city].info} />
              <CityLink link={cityInfo[city].link} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: "center",
      gap: 5,
    },
    tab: {
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 20,
      backgroundColor: '#ccf2ff',
      borderRadius: 20,
      marginBottom: 5,
      marginTop: 5,
      width: 120
    },
    activeTab: {
      backgroundColor: '#4dd2ff',
      color: '#fff'
    },
    tabText: {
      fontSize: 16,
    },
    activeText: {
      color: '#fff',
    },
    cityImage: {
      width: 300,
      height: 200,
      marginTop: 25,
      marginBottom: 20,
      borderRadius: 20,
    },
    
  });

export default CityTabs;
