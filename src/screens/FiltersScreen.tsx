import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FiltersScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Welcome to this FilterScreen</Text>
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

export default FiltersScreen;