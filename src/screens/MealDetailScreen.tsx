import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;