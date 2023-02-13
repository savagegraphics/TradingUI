import { SafeAreaView, StyleSheet, View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import SPACING from './SPACING';
import colors from './colors';
import MainScreen from './MainScreen';

// const { width } = Dimensions.get("window");

// const ITEM_WIDTH = width / 2 - SPACING * 3;



const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView>
            <View
                style={ {
                    padding: SPACING * 2,
                } }>
                <View>
                    <Text
                        style={ {
                            color: colors.blue2,
                            paddingLeft: SPACING * 1.5,
                            marginTop: SPACING * 14,
                            fontSize: SPACING * 3,
                            fontWeight: "700",
                            fontFamily: 'Cochin',
                        } }>Transferwise.</Text>
                </View>

                <View style={ {
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: SPACING * 2,
                } }>
                    <Text
                        style={ {
                            fontSize: SPACING * 7,
                            fontWeight: "500",
                            padding: SPACING,
                        } }>
                        We allow you to simplify payments
                    </Text>
                    <View>
                        <Text
                            style={ {
                                padding: SPACING * 2,
                                color: `#808080`,
                            } }>Digtal wallets enable users to make purchase
                            easily from their devices</Text>
                    </View>

                </View>

                <View
                    style={ {
                        paddingTop: SPACING * 3,
                        paddingLeft: SPACING * 2,
                        flexDirection: 'row',
                        paddingRight: SPACING * 2,
                    } }>
                    <AntDesign name="rightcircleo" size={ 24 } style={ { paddingRight: SPACING, color: colors.blue2, } } />
                    <AntDesign name="rightcircleo" size={ 24 } color='#d3d3d3' style={ { paddingRight: SPACING } } />
                    <AntDesign name="rightcircleo" size={ 24 } color='#d3d3d3' style={ { paddingRight: SPACING } } />

                </View>

                <View
                    style={ {
                        paddingTop: SPACING * 12,
                    } }>
                    <Pressable
                        style={ styles.button }>
                        <Button
                            title="Get Started"
                            color="#fff"
                            onPress={ () => navigation.navigate("Main") }
                        />
                        <MaterialIcons name="arrow-right-alt" size={ 24 } color="white" />
                    </Pressable>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default HomeScreen


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 5,
        elevation: 3,
        backgroundColor: colors.blue2,
        flexDirection: 'row',
    },

});