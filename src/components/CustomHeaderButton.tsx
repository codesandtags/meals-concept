import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

type Props = {
};

const CustomHeaderButton = (props: Props) => {
    return (
        <HeaderButton
          title='Hello'
          {...props}
          IconComponent={MaterialIcons}
          iconSize={24}
          color={Colors.primaryColor}
        />
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CustomHeaderButton;