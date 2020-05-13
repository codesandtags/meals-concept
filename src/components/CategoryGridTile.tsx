import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from '../constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

interface Props {
  title: string;
  color: string;
  icon: string;
  onSelect: any;
}

const CategoryGridTile = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={props.onSelect}
      style={styles.gridItem}>
      <View style={{...styles.container}}>
        <MaterialCommunityIcons name={props.icon} size={32} color="black" />
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    height: 90,
    width: 150,
    overflow: Platform.OS === 'android'? 'hidden': 'visible'
  },
  container: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
    padding: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: Colors.darkGray,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.3,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'right'
  }
});

export default CategoryGridTile;