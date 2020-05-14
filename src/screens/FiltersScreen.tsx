import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Switch } from 'react-native-paper';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { FONT_BOLD } from '../constants/Fonts';
import Colors from '../constants/Colors';

type Props = {
  navigation: any;
};

const FiltersScreen = (props: Props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(true);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const saveFilters = () => {
    const appliedFilters = {
      isGlutenFree,
      isVegan,
      isVegetarian,
      isLactoseFree
    }
  }

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
              console.log('Showing drawer...', props.navigation.toggleDrawer());
              // navigationProperties.navigation.toggleDrawer();
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
            onPress={() => {
              console.log('Saving changes...');
            }}
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