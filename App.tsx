// *** NPM ***
import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import axios from 'axios';

// *** OTHERS ***
import AirportList from './src/components/AirportList';
import AirportSearch from './src/components/AirportSearch';
import {AirportListType} from './src/types';

// *** STYLES ***
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
  },
});
