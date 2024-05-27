import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList } from 'react-native';
import Constants from 'expo-constants';

// https://pokeapi.co/docs/v2#resource-listspagination-section

const fetchPokemonsAPI = async () => {
  try {
      const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
      const parsedResponse = await result.json()
      return parsedResponse;
  } catch(e) {
    console.log('Ups: ' + e.message);
    return { count: 0, results: [], error: true }
  }
}

export default function Testing() {
  const [pokemons, setPokemons] = useState([])
  const [filterPokemon, setFilterPokemon] = useState([])

  const handlePokemons = useCallback((pokemonInput) => {
    console.log(pokemonInput)
    if (pokemonInput) {
      const findPokemon = pokemons.filter((pokemon) => pokemon.name.includes(pokemonInput))
      setFilterPokemon(findPokemon)
    } else {
      setFilterPokemon(pokemons)
    }
  }, [pokemons]) 


  useEffect(() => {
    async function getPokemons() {
      const data = await fetchPokemonsAPI()
      setPokemons(data.results)
      setFilterPokemon(data.results)
    }

    getPokemons()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.happyText}>
        Catch'em all
      </Text>
      <TextInput
        autoCapitalize="none"
        onSubmitEditing={(e) => handlePokemons(e.nativeEvent.text)}  
        style={styles.searchInput}
      />
      <Text style={styles.happyText}>
        HERE SHOULD BE THE POKEMONS LIST
      </Text>
      {filterPokemon.length > 0 ? (
        <FlatList 
          data={filterPokemon} 
          keyExtractor={(item) => item.name} 
          renderItem={({ item }) => (
            <View key={item.name}>
              <Text>
                {item.name}
              </Text>
            </View>
          )} 
        />
      ) : (
        <View style={styles.noPokemonsContainer}>
          <Text style={styles.sorryText}>
            🥺 Sorry!
          </Text>
          <Text style={styles.noMatchText}> 
            There're not Pokemons matches.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  noPokemonsContainer: { 
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center', 
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 10,
  },
  sorryText: { 
    fontWeight: "normal",
    fontSize: 25,
    color: "#FFFFFF"
  },
  noMatchText: {
    fontWeight: "normal",
    fontSize: 19,
    color: "#000000"
  },
  happyText: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
