import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CategoryMealsScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Welcome to this CategoryMealsScreen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;