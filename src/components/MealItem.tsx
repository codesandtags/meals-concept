import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { Meal } from '../models/Meal';
import { FONT_BOLD, FONT_HEADER_SIZE } from '../constants/Fonts';

type Props = {
  meal: Meal
  onSelectMeal: any
};

const MealItem = (props: Props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <ImageBackground source={{uri: props.meal.imageUrl}} style={styles.mealImage}>
              <Text style={styles.mealTitle} numberOfLines={1}>{props.meal.title}</Text>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.meal.duration} Min</Text>
            <Text>{props.meal.complexity.toUpperCase()}</Text>
            <Text>{props.meal.affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  mealItem: {
    marginVertical: 10,
    width: '100%',
    height: 280,
    backgroundColor: Colors.white,
    shadowColor: Colors.white,
    shadowOffset: {width: 2, height: 3},
    shadowRadius: 10,
    shadowOpacity: 1,
    borderRadius: 10,
    overflow: 'hidden'
  },
  mealImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealTitle: {
    fontFamily: FONT_BOLD,
    fontSize: FONT_HEADER_SIZE,
    color: Colors.white,
    backgroundColor: Colors.blackWithOpacity,
    padding: 10,
    textAlign: 'center'
  },
  mealDetail: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default MealItem;