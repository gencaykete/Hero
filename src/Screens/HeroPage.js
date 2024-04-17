import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'

const HeroPage = ({route}) => {
    const {superhero} = route.params;

    const renderProgressBar = (percent,text) => {
        let color = '#ff0000';
        if (percent >= 26 && percent <= 75) {
            color = '#ffa500';
        } else if (percent > 75) {
            color = '#35b935';
        }

        return (
            <View>
                <ProgressCircle
                    percent={percent}
                    radius={40}
                    borderWidth={8}
                    color={color}
                    shadowColor="#999"
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 18 }}>
                        {percent}%
                    </Text>
                </ProgressCircle>
                <Text style={{ fontSize: 16, marginTop: 5, textAlign: "center" }}>
                    {text}
                </Text>
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    key="hero-image"
                    source={{uri: superhero.images.lg}}
                    style={styles.image}
                />
            </View>
            <View>
                <View style={styles.powerstatsContainer}>
                    {renderProgressBar(superhero.powerstats.intelligence,'İstihbarat')}
                    {renderProgressBar(superhero.powerstats.strength, 'Kuvvet')}
                    {renderProgressBar(superhero.powerstats.speed, 'Hız')}
                </View>
                <View style={styles.powerstatsContainer}>
                    {renderProgressBar(superhero.powerstats.durability, 'Dayanıklılık')}
                    {renderProgressBar(superhero.powerstats.power, 'Güç')}
                    {renderProgressBar(superhero.powerstats.combat, 'Dövüş')}
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.column}>
                    <Text style={styles.title}>Tam Adı</Text>
                    <Text style={styles.text}>{superhero.biography.fullName}</Text>
                    <Text style={styles.title}>Egolar</Text>
                    <Text style={styles.text}>{superhero.biography.alterEgos}</Text>
                    <Text style={styles.title}>Takma adlar</Text>
                    <Text style={styles.text}>{superhero.biography.aliases.join(', ')}</Text>
                    <Text style={styles.title}>Doğum yeri</Text>
                    <Text style={styles.text}>{superhero.biography.placeOfBirth}</Text>
                    <Text style={styles.title}>İlk Görünüm</Text>
                    <Text style={styles.text}>{superhero.biography.firstAppearance}</Text>
                    <Text style={styles.title}>Yayımcı</Text>
                    <Text style={styles.text}>{superhero.biography.publisher}</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.title}>Hizalama</Text>
                    <Text style={styles.text}>{superhero.biography.alignment}</Text>
                    <Text style={styles.title}>Meslek</Text>
                    <Text style={styles.text}>{superhero.work.occupation}</Text>
                    <Text style={styles.title}>Temel</Text>
                    <Text style={styles.text}>{superhero.work.base}</Text>
                    <Text style={styles.title}>Grup Bağlantısı</Text>
                    <Text style={styles.text}>{superhero.connections.groupAffiliation}</Text>
                    <Text style={styles.title}>Akrabalar</Text>
                    <Text style={styles.text}>{superhero.connections.relatives}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
    },
    powerstatsContainer: {
        marginBottom: 25,
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
});

export default HeroPage;
