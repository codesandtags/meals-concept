import React from 'react';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

import { CategoryMeals } from '../navigation/routes';
import { CATEGORIES } from '../../mocks/categories';
import { Category } from '../models/Category';

import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

type Props = {
  navigation: any;
};

const CategoriesScreen = (props: Props) => {
  const goToCategoryMeals = (category: Category) => {
    props.navigation.navigate(CategoryMeals, {
      category
    });
  };
  const renderGridItem = (itemInfo: ListRenderItemInfo<Category>) => {
    return (
      <CategoryGridTile
        title={itemInfo.item.title}
        color={itemInfo.item.color}
        icon={itemInfo.item.icon}
        image={itemInfo.item.image}
        onSelect={() => goToCategoryMeals(itemInfo.item)}
      />
    )
  };

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={CATEGORIES}
        renderItem={renderGridItem}
      />
    </View>
  )
};

CategoriesScreen.navigationOptions = (props: Props) => {
  return {
    title: 'Meal Categories',
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;