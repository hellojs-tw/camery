import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  title: 'HelloJS',
  tabBarLabel: '探索',
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  title: 'HelloJS',
  tabBarLabel: '拍照',
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  title: 'HelloJS',
  tabBarLabel: '帳號',
};

const tabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: '#F2F2F2',
    inactiveTintColor: '#F2F2F2',
    labelStyle: {
      color: '#000',
    },
    indicatorStyle: {
      backgroundColor: '#FB2746',
    },
    style: {
      backgroundColor: '#F2F2F2',
      ...Platform.OS === 'ios' ? {
        paddingTop: 20,
      } : {},
    },
  }
}


// 文件
// https://reactnavigation.org/docs/en/material-top-tab-navigator.html
export default createMaterialTopTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
}, tabNavigatorConfig);
