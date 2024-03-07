import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

const DoctorCard = ({ doctor }) => {

    // var { name, image, profession, location, rating, price, languages, specialty, education } = doctor;
    var name = "Dr. John Doe";
    var image = require('../assets/doctor1.jpeg');
    var profession = "Psychologist";
    var location = "New York, USA";
    var rating = "4.5";
    var price = "$50";
    var languages = ["English", "Spanish"];
    var specialty = "Depression, Anxiety";
    var education = "PhD in Psychology";


    return (
        <Pressable style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={image} style={styles.profileImage} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profession}>{profession}</Text>
                    <Text style={styles.location}>{location}</Text>
                    <View style={styles.infoContainer}>
                        <Text style={styles.rating}>Rating: {rating}</Text>
                        <Text style={styles.price}>Price: {price}</Text>
                    </View>
                    <Text style={styles.languages}>Languages: {languages.join(', ')}</Text>
                    <Text style={styles.specialty}>Specialty: {specialty}</Text>
                    <Text style={styles.education}>Education: {education}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.bookText}>Book</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.descriptionButton}>
                    <Text style={styles.descriptionText}>More Details</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        margin: 10,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    textContainer: {
        marginLeft: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    profession: {
        fontSize: 16,
    },
    location: {
        fontSize: 14,
        color: '#555',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rating: {
        fontSize: 14,
        color: '#888',
    },
    price: {
        fontSize: 14,
        color: '#888',
    },
    languages: {
        fontSize: 14,
        color: '#888',
    },
    specialty: {
        fontSize: 14,
        color: '#888',
    },
    education: {
        fontSize: 14,
        color: '#888',
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderTopWidth: 1,
        borderColor: '#ddd',
    },
    bookButton: {
        backgroundColor: '#F7813E', // 'orange
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        borderBottomLeftRadius: 10,
    },
    bookText: {
        color: 'white',
        fontWeight: 'bold',
    },
    descriptionButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10,
    },
    descriptionText: {
        color: 'white',
        fontWeight: 'bold',
    },
});


export default DoctorCard;
