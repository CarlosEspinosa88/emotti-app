import React from 'react'
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform
} from 'react-native'


const DATA = Array.from(
  { length: 1000 },
  (_, index) => ({ 
    id: index.toString(), 
    text: `Item ${index}`
  })
)

function ItemComponent({ item }) {
  return (
    <View style={{ height: 50 }}>
      <Text>{item.text}</Text>
    </View>
  )
}

function Testing() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Header Info</Text>
      </View>
      <FlatList
        data={DATA}
        windowSize={3}
        initialNumToRender={2}
        maxToRenderPerBatch={2}
        style={styles.flatListContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemComponent key={item.id} item={item} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    // paddingTop: 100,
    // marginTop: Platform.OS === 'ios' ? 100 : 50,
    ...Platform.select({
      ios: {
        marginTop: 100,
      },
      android: {
        marginTop: 50,
      }
    })
  },
  flatListContainer: { 
    flex: 1,
    padding: 20,
    // width: '100%',
    backgroundColor: '#D1D1D1'
  },
  headerContainer: {
    // height: 50,
    padding: 20,
    backgroundColor: '#E3E3E3', 
    width: '100%'
  },
  headerText: { 
    fontWeight: 'bold',
  }
})

export default Testing
