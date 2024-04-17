import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [superheroes, setSuperheroes] = useState([]);
    const [filteredSuperheroes, setFilteredSuperheroes] = useState([]);

    useEffect(() => {
        fetch('https://akabab.github.io/superhero-api/api/all.json')
            .then(response => response.json())
            .then(data => {
                setSuperheroes(data);
                setFilteredSuperheroes(data);
            })
            .catch(error => {
                console.error('Hata: ', error);
            });
    }, []);

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filtered = superheroes.filter(hero => hero.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredSuperheroes(filtered);
    };

    const handleHeroPress = (superhero) => {
        navigation.navigate('HeroPage', { superhero });
    };

    const renderSuperheroItem = ({ item }) => (
        <TouchableOpacity style={styles.superheroItem} onPress={() => handleHeroPress(item)}>
            <Image source={{ uri: item.images.sm }} style={styles.superheroImage} />
            <Text style={styles.superheroName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/11/Marvel-Emblem.png' }}
                style={styles.logo}
            />
            <TextInput
                style={styles.searchInput}
                placeholder="Süper kahraman ara..."
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <FlatList
                data={filteredSuperheroes}
                keyExtractor={item => item.id}
                renderItem={renderSuperheroItem}
                numColumns={2}
                contentContainerStyle={styles.superheroList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 50,
        marginBottom: 16,

    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 16,
        width: '100%',
    },
    superheroList: {
        justifyContent: 'space-between',
        width: '100%',
    },
    superheroItem: {
        width: '48%',
        aspectRatio: 1,
        marginBottom: 16,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    superheroImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'cover',
        borderRadius: 10,
    },
    superheroName: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomePage;
