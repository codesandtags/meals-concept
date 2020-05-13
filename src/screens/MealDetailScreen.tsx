import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { Meal } from '../models/Meal';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

type Props = {
  navigation: StackNavigationProp;
};

const MealDetailScreen = (props: Props) => {
    const goToHome = () => {
      props.navigation.popToTop();
    }

    return (
        <View style={styles.screen}>
            <Text>Welcome to this MealDetailScreen</Text>
          <Button title="Go to Home" onPress={goToHome}/>
        </View>
    )
};

MealDetailScreen.navigationOptions = (props: Props) => {
  const meal: Meal = props.navigation.getParam('meal');

  return {
    title: meal.title,
    headerRight: () => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Favorite'
            iconName="favorite"
            onPress={() => {
              console.log('Favorite Pressed')
            }}
          />
        </HeaderButtons>
      )
    }
  }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;