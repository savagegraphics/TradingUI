import { View, Text, SafeAreaView, } from 'react-native'
import React from 'react'
import SPACING from './SPACING'
import { Octicons, Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './colors'




const tasks = [
    {
        task: 'Bitcoin',
        icon: 'currency-btc',
        theme: '#FFC93C',
        stamp: 'BTC',
        fund: '$20,429.27 USD',
        rate: '-0.59%',
    },
    {
        task: 'Ethereum',
        icon: 'ethereum',
        theme: '#495579',
        stamp: 'ETH',
        fund: '$1,559.49 USD',
        rate: '-0.48%',
    }, {
        task: 'Tether',
        icon: 'currency-bdt',
        theme: '#10A19D',
        stamp: 'USDT',
        fund: '$1.02 USD',
        rate: '-0.95%',
    }, {
        task: ' Naira New Note',
        icon: 'currency-ngn',
        theme: '#008b8b',
        stamp: 'NAIJA',
        fund: '$336.74 USD',
        rate: '-3.92%',
    },
]


const Task = ({ task, icon, theme, stamp, fund, rate }) => {
    return (
        <View style={ {
            backgroundColor: colors.light,
            flexDirection: 'row',
            marginVertical: 4,
            marginHorizontal: 16,
            paddingHorizontal: 24,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: SPACING * 1.4,
        } }>
            <View style={ { flexDirection: 'row', alignItems: 'center' } }>
                <MaterialCommunityIcons
                    name={ icon }
                    size={ 30 }
                    style={ { color: theme, marginRight: 5 } }
                />
                <View>
                    <Text style={ {
                        fontSize: 20,
                        fontWeight: '600',
                        paddingBottom: SPACING / 2,
                    } }>{ task }</Text>
                    <Text style={ { color: colors.grey, fontWeight: '500' } }>{ stamp }</Text>
                </View>
            </View>

            <View style={ { flexDirection: 'column', } }>
                <Text style={ {
                    fontSize: 20,
                    fontWeight: '600',
                    paddingBottom: SPACING / 2,
                    textAlign: 'right',
                    paddingEnd: SPACING,
                } }>{ fund }</Text>
                <Text style={ { color: colors.red, fontWeight: '700', paddingLeft: SPACING * 8, } }>{ rate }</Text>

            </View>
        </View>
    )
}



const MainScreen = (props) => {
    return (
        <SafeAreaView>
            <View style={ {
                paddingTop: SPACING * 4,
                paddingLeft: SPACING * 4,
                paddingRight: SPACING * 4,
                justifyContent: 'space-between',
                flexDirection: 'row'
            } }>
                <Octicons name="three-bars" size={ 24 } color="black" />
                <Ionicons name="ios-notifications-outline" size={ 24 } color="black" />
            </View>
            <View style={ {
                padding: SPACING * 4,
                paddingVertical: 12,
                paddingHorizontal: 32,
                margin: 25,
                borderRadius: 15,
                elevation: 3,
                backgroundColor: colors.whitesmoke,
                flexDirection: 'column',
            } }>
                <Text style={ {
                    fontSize: SPACING * 2.7,
                    fontWeight: '600',
                } }>Main Wallet
                    <Entypo name="chevron-small-down" size={ 34 } color="black" />
                </Text>
                <Text style={ {
                    paddingTop: SPACING * 2,
                    color: colors.grey
                } }>My Balance</Text>
                <Text style={ {
                    fontSize: SPACING * 3,
                    fontWeight: '600',
                    paddingTop: SPACING * 1.75,
                    paddingBottom: SPACING * 2,
                } }>$150 000</Text>
            </View>
            <View style={ {
                padding: SPACING * 0.7,
                paddingLeft: SPACING * 2.5,
                border: SPACING * 3,
                borderRadius: SPACING * 5,
                borderColor: colors.blue,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            } }>
                <MaterialCommunityIcons name="arrow-down-circle" size={ 63 } color="#4169e1" style={ { paddingRight: SPACING * 2 } } />
                <MaterialCommunityIcons name="swap-horizontal-circle" size={ 63 } color="#4169e1" style={ { paddingRight: SPACING * 2 } } />
                <MaterialCommunityIcons name="arrow-top-right-thin-circle-outline" size={ 64 } color="#4169e1" style={ { paddingRight: SPACING * 2 } } />
                <Ionicons name="ios-card" size={ 63 } color="#4169e1" style={ { paddingRight: SPACING * 2 } } />
            </View>
            <View style={ {
                paddingRight: SPACING * 7,
                paddingLeft: SPACING * 6,
                borderRadius: SPACING * 5,
                borderColor: colors.grey,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            } }>
                <Text style={ {
                    fontSize: SPACING * 1.6,
                    fontWeight: '400',
                    color: colors.grey,
                } }>Recieve</Text>
                <Text style={ {
                    fontSize: SPACING * 1.6,
                    fontWeight: '400',
                    color: colors.grey,
                    paddingRight: SPACING * 3,
                    paddingLeft: SPACING * 1.5,
                } }>Swap</Text>
                <Text style={ {
                    fontSize: SPACING * 1.6,
                    fontWeight: '400',
                    color: colors.grey,
                    paddingRight: SPACING * 3,
                } }>Send</Text>
                <Text style={ {
                    fontSize: SPACING * 1.6,
                    fontWeight: '400',
                    color: colors.grey,
                } }>Buy</Text>
            </View>
            <View>

                <View style={ {
                    padding: 20,
                    flexDirection: 'row',
                    backgroundColor: colors.background,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTopLeftRadius: 20
                } }>
                    <Text style={ {
                        fontSize: SPACING * 2.2,
                        fontWeight: '600',
                    } }>
                        Last transactions</Text>
                    <Text style={ {
                        fontSize: SPACING * 1.1,
                        fontWeight: '300',
                        color: colors.grey
                    } }>
                        Last Transactions</Text>
                </View>

                <View
                    style={ {
                        backgroundColor: colors.background
                    } }>
                    { tasks.map(task => <Task key={ tasks.id }
                        task={ task.task }
                        icon={ task.icon }
                        theme={ task.theme }
                        stamp={ task.stamp }
                        fund={ task.fund }
                        rate={ task.rate }
                    />) }

                </View>
            </View>
        </SafeAreaView >

    )
}

export default MainScreen