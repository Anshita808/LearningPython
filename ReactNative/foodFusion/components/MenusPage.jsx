import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const MenuPage = ({ addToCart }) => {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => response.json())
      .then((data) => {
        setDishes(data.meals);
        setFilteredDishes(data.meals);
      })
      .catch((error) => console.error(error));
  }, []);

  const applyFilter = (filter) => {
    setActiveFilter(filter);

    if (filter === null) {
      setFilteredDishes(dishes);
    } else {
      const filtered = dishes.filter((item) => item.strCategory === filter);
      setFilteredDishes(filtered);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.dishContainer}>
      <Image source={{ uri: item.strMealThumb }} style={styles.dishImage} />
      <Text style={styles.dishName}>{item.strMeal}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterButtons}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === null && styles.activeFilterButton,
          ]}
          onPress={() => applyFilter(null)}
        >
          <Text style={styles.filterButtonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            activeFilter === "Seafood" && styles.activeFilterButton,
          ]}
          onPress={() => applyFilter("Seafood")}
        >
          <Text style={styles.filterButtonText}>Seafood</Text>
        </TouchableOpacity>
        {/* Add more filter buttons for other categories */}
      </View>
      <FlatList
        data={filteredDishes}
        renderItem={renderItem}
        keyExtractor={(item) => item.idMeal}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  filterButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 8,
  },
  activeFilterButton: {
    backgroundColor: "#FF5722",
  },
  filterButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  dishContainer: {
    flex: 1,
    margin: 8,
    alignItems: "center",
  },
  dishImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  dishName: {
    marginTop: 8,
    textAlign: "center",
  },
  addToCartButton: {
    marginTop: 8,
    backgroundColor: "#FF5722",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default MenuPage;