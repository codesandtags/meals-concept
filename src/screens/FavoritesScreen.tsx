import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { RootState } from '../store/reducers/mealsReducer';

type Props = {
  navigation: any;
};

const FavoritesScreen = (props: Props) => {
  const favoriteMeals = useSelector((state: RootState) => state.meals.favoriteMeals);

  if (favoriteMeals && favoriteMeals.length === 0) {
    return (
      <View style={styles.mealsNotFound}>
        <Image
          source={require('../../assets/images/no_meals.png')}
          style={styles.mealsNotFoundImage}
        />
        <Text>No favorite meals found. Start adding some to see them!</Text>
      </View>
    )
  }

  return (
    <MealList
      displayedMeals={favoriteMeals}
      navigation={props.navigation}
    />
  )
};

FavoritesScreen.navigationOptions = (props: Props) => {
  return {
    title: 'Your favorites',
    headerLeft: (navigationProperties: any) => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Menu'
            iconName="menu"
            onPress={() => {
              console.log('Showing drawer...', props.navigation.toggleDrawer());
              // navigationProperties.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    }
  }
}

const styles = StyleSheet.create({
  mealsNotFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mealsNotFoundImage: {
    width: '50%',
    resizeMode: 'contain'
  }
});

export default FavoritesScreen;