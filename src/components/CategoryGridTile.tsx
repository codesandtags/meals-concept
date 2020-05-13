import React from 'react';
import { ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  title: string;
  color: string;
  icon: string;
  image: string;
  onSelect: any;
}

const imagesMap:any = {
  'asian': require('../../assets/images/asian.png'),
  'italy': require('../../assets/images/italy.png'),
  'exotic': require('../../assets/images/exotic.png'),
  'hamburger': require('../../assets/images/hamburger.png'),
  'light': require('../../assets/images/light.png'),
  'france': require('../../assets/images/france.png'),
  'german': require('../../assets/images/german.png'),
  'summer': require('../../assets/images/summer.png'),
  'default': require('../../assets/images/plate.png'),
}

const CategoryGridTile = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onSelect}
      style={styles.gridItem}>
      <ImageBackground
        style={styles.imageContainer}
        source={imagesMap[props.image]}>
        <View style={{...styles.container}}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  gridItem: {
    borderRadius: 10,
    flex: 1,
    margin: 10,
    marginVertical: 15,
    height: 100,
    width: 150,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
  },
  imageContainer: {
    elevation: 0,
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: Colors.gray,
    resizeMode: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: Colors.whiteWithOpacity,
    borderWidth: 0,
    borderColor: Colors.gray,
    paddingHorizontal: 8,
    paddingVertical: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'right',
    fontSize: 12
  }
});

export default CategoryGridTile;