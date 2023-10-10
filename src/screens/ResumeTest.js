import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Button from '../components/Button'

function ResumeTest({ route, navigation }) {
  const { values } = route?.params;
  const data = Object.entries(values)

  return (
    <View style={styles.mainContainer}>
      <View style={styles.resumeContainer}>
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
          style={styles.generalButton}
          onPress={() => navigation.navigate('SlideOne')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1,
    marginTop: 90,
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
    backgroundColor: '#FFF',
    borderColor: '#663399',
    borderWidth: 2,
    borderRadius: 20
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
  generalButton: {
    borderRadius: 50,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#663399'
  }
});

export default ResumeTest
