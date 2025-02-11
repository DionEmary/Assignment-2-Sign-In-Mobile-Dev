import { Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

interface LinkTextProps {
  link: string;
}

const CityLink: React.FC<LinkTextProps> = ({ link }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <Text style={styles.linkText}>Go to city page</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkText: {
    marginTop: 2,
    paddingHorizontal: 4,
    marginBottom: 10,
    color: '#006080',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});

export default CityLink;