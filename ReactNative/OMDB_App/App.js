import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios"; // Import the axios library

const API_KEY = "f9d55ac1"; // Replace with your actual OMDB API Key
const BASE_URL = "http://www.omdbapi.com/";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load all movies when the component mounts
    loadAllMovies();
  }, []);

  const loadAllMovies = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=`);
      const data = response.data;
      if (data.Search) {
        setSearchResults(data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}?apikey=${API_KEY}&s=${searchQuery}`
      );
      const data = response.data;
      if (data.Search) {
        setSearchResults(data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  const handleSelectMovie = async (imdbID) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}?i=${imdbID}&apikey=${API_KEY}`
      );
      const data = response.data;
      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
    setIsLoading(false);
  };

  const handleClear = () => {
    setSearchResults([]);
    setSelectedMovie(null);
  };

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSelectMovie(item.imdbID)}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Image
          source={{ uri: item.Poster }}
          style={{ width: 50, height: 75, marginRight: 10 }}
        />
        <Text>{item.Title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Enter movie title"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />

      {isLoading && (
        <ActivityIndicator
          style={{ marginTop: 20 }}
          size="large"
          color="#0000ff"
        />
      )}

      {selectedMovie ? (
        <View>
          <Image
            source={{ uri: selectedMovie.Poster }}
            style={{ width: 200, height: 300, marginBottom: 10 }}
          />
          <Text>Title: {selectedMovie.Title}</Text>
          <Text>Year: {selectedMovie.Year}</Text>
          <Text>Plot: {selectedMovie.Plot}</Text>
          <Text>Ratings: {selectedMovie.imdbRating}</Text>
          <Button
            title="Back to Search"
            onPress={() => setSelectedMovie(null)}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.imdbID}
          renderItem={renderMovieItem}
        />
      )}

      {searchResults.length > 0 && (
        <Button title="Clear Results" onPress={handleClear} />
      )}
    </View>
  );
};

export default App;
