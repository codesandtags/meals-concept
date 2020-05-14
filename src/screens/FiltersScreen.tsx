import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Switch } from 'react-native-paper';

import { FONT_BOLD } from '../constants/Fonts';
import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors';
import { Filters } from '../models/Filters';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/mealsActions';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

type Props = {
  navigation: any;
};

const FiltersScreen = (props: Props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(true);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const navigation: StackNavigationProp  = props.navigation;

  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters: Filters = {
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree
    }

    console.log('Saving Filters with: ', appliedFilters);
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

  useEffect(() => {
    navigation.setParams({
      save: saveFilters
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.filterTitle}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-free</Text>
        <Switch
          trackColor={{true: Colors.primaryColor, false: Colors.gray}}
          value={isGlutenFree}
          onValueChange={setIsGlutenFree}/>
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{true: Colors.primaryColor, false: Colors.gray}}
          value={isVegan}
          onValueChange={setIsVegan}/>
      </View>
      <View style={styles.filterContainer}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{true: Colors.primaryColor, false: Colors.gray}}
          value={isVegetarian}
          onValueChange={setIsVegetarian}/>
      </View>
      <View style={styles.filterContainer}>
        <Text>Lactose-free</Text>
        <Switch
          trackColor={{true: Colors.primaryColor, false: Colors.gray}}
          value={isLactoseFree}
          onValueChange={setIsLactoseFree}/>
      </View>
    </View>
  )
};

FiltersScreen.navigationOptions = (props: Props) => {
  return {
    title: 'Filters',
    headerLeft: (navigationProperties: any) => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Menu'
            iconName="menu"
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    },
    headerRight: (navigationProperties: any) => {
      return (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title='Save'
            iconName="save"
            onPress={props.navigation.getParam('save')}
          />
        </HeaderButtons>
      )
    }
  }
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  filterTitle: {
    fontFamily: FONT_BOLD,
    fontSize: 20,
    marginBottom: 15,
  },
  filterContainer: {
    width: '80%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5
  }
});

export default FiltersScreen;