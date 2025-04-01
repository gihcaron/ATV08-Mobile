import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Card = () => {
    return (
      <View style={styles.content}>
          <Text style={styles.title}>🦖</Text>
          <Text style={styles.title}>Card</Text>
          <Text style={styles.subtitle}>Component Card Component Card</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    content :{
        backgroundColor: 'rgba(239,187,75,255)',
        marginTop: 20,
        width: '90%',
        height: '30%',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20,
      },
      
      title: {
        padding: 2,
        fontSize: 24,
        textAlign: 'flex-start',
        fontWeight: '600',
        color: 'rgba(249,251,244,255)',
        marginTop: 5,
      },
      subtitle: {
        padding: 10,
        marginTop:'20',
        fontSize: 16,
        color: 'rgba(249,251,244,255)',
        textAlign: 'flex-start',
      },
})

export default Card;