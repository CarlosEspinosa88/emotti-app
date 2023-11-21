import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';
import { useTheme } from 'react-native-paper';
import Button from '../components/Button'

function ResumeTest({ route, navigation }) {
  const theme = useTheme();
  const { values } = route?.params;
  const data = Object.entries(values)

  return (
    <SafeAreaView style={[
      styles.safeArea,
      { backgroundColor: theme.colors.primary }
    ]}>
      <View style={styles.mainContainer}>
        <View style={[
          styles.resumeContainer, 
          { 
            borderColor: theme.colors.inversePrimary,
            backgroundColor: theme.colors.custom1,
          }
        ]}>
          <View style={styles.resumeText}>
            <Text style={[styles.mainText, styles.underlineText]}>
              Resumen del test
            </Text>
          </View>
          <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
            <FlatList
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (() => ( <View style={{ height: '1.2%', backgroundColor: '#9c9c9c', marginTop: 10 }} />))
              }
              data={data}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={{ marginBottom: 10}}>
                  <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize' }}>{item[0]}: {' '}</Text>
                    <Text style={{ fontSize: 20 }}>{item[1] === true ? 'SI' : 'NO'}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.generalButtonContainer}>
          <Button
            title='Volver al test'
            mode="contained"
            testID='primary-button-yes'
            style={[
              styles.button,
              { backgroundColor: theme.colors.inversePrimary }
            ]}
            labelStyle={styles.buttonLabel}
            textColor={theme.colors.onSecondaryContainer}
            onPress={() => navigation.navigate('SlideOne')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: { 
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 22
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  resumeContainer: {
    flex: 0.9,
    borderWidth: 2,
    borderRadius: 20,
  },
  generalButtonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resumeText: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '100%',
    borderRadius: 50,
    padding: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 8},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
        shadowColor: '#52006A',
      }
    })
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default ResumeTest
