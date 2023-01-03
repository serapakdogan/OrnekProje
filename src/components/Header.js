import React from "react";
import { Text, View } from 'react-native';

const Header = ({HeaderText}) => {
    const { textStyle, viewStyle } = styles;

    return(
        <View style={viewStyle}>
           <Text style={textStyle}>{HeaderText} </Text> 
        </View>  
    );
};

const styles = {
    textStyle: {
        fontSize: 40
    },
    viewStyle: {
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        shadowOffset: { widht: 0, height: 2 },
        shadowOpacity: 0.9,
        
    }
};

export default Header;