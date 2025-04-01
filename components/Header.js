import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
      <View style={styles.content}>
        <Text style={styles.subtitle}>This is the Header component</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'rgba(239,187,75,255)',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  
    top: 0,
    left: 0,
    width: '100%',
    height: '13%',
    padding: 20,
    marginBottom: 50,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'rgba(249,251,244,255)',
    flex: 1,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(249,251,244,255)',
    textAlign: 'right',
  },
});

export default Header;