import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import SoftSkill from "../screens/SoftSkill";
import HardSkill from "../screens/HardSkill";
import React from "react";

import {styles, configTopBar} from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MainScreen from "../components/MainScreen";

const {Navigator, Screen} = createMaterialTopTabNavigator();

const cor = 'rgba(255,255,255,0.6)';
const TabsTopRouter = () => {
  return (<>
    <MainScreen/>
    <Navigator
    screenOptions={configTopBar}
    >
        <Screen name="rocket" component={Home} options={
            {
            title: 'HOME',
            tabBarIcon: ({color}) => (
              <Ionicons name="rocket" size={34} color={cor}
              style={styles.icons} 
              />  
            )
        }}/>
        <Screen name="softskill" component={SoftSkill} options={
            {
            title: 'SOFT SILL',
            tabBarIcon: ({color}) => (
                <Foundation name="social-skillshare" size={34} color={cor}
                style={styles.icons} 
                />
            )
        }}/>
        <Screen name="hardskill" component={HardSkill} options={
          {
          title: '',
          tabBarIcon: ({color}) => (
              <MaterialIcons  name="local-fire-department" size={34} color={cor}
              style={styles.icons}
              />
          )
        }}/>
    </Navigator>
      
  </>
  )
}

export default TabsTopRouter;