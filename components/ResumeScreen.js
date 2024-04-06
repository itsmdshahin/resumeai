import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const ResumeScreen = ({ route }) => {
    const { resumeData } = route.params;

    const profilePicUri = 'https://media.licdn.com/dms/image/C5603AQGB1NEIMBlLpQ/profile-displayphoto-shrink_400_400/0/1644937049955?e=1717632000&v=beta&t=TVan-dMFCtLMyRNHa5iNNjefygZFx8QbeI6cwG9vfSE'; // Replace with your image URI
    const createPDF = async () => {
        try {
            let options = {
                // Your other options here...
                html: '<h1>PDF Content</h1>', // Convert your resume data to HTML format
                fileName: 'resume',
                directory: 'Documents',
            };

            const file = await RNHTMLtoPDF.convert(options);
            console.log(file.filePath);
            alert('PDF Downloaded', file.filePath);
        } catch (err) {
            console.error(err);
        }
    };

    const openLink = (url) => {
        Linking.openURL(url);
    };

    return (
        <ScrollView style={styles.page}>
            <View style={styles.headerContainer}>
                <Image source={{ uri: profilePicUri }} style={styles.profilePic} />
                <Text style={styles.name}>{resumeData.fullname}</Text>
                <Text style={styles.title}>Full Stack Developer</Text>
            </View>

            <View style={styles.contactContainer}>
                {/* Contact Information */}
                <Text style={styles.contactText}>📞 01646884879</Text>
                <Text style={styles.contactText}>📧 mdshahinurrahman8@gmail.com</Text>
                <Text style={styles.contactText}>📍 Sylhet, Bangladesh</Text>
                <TouchableOpacity onPress={() => openLink('https://github.com/itsmdshahin')}>
                    <Text style={styles.link}>🔗 github.com/itsmdshahin</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openLink('https://linkedin.com/in/itsmdshahin')}>
                    <Text style={styles.link}>🔗 linkedin.com/in/itsmdshahin</Text>
                </TouchableOpacity>
            </View>

            {/* About Me Section */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>ABOUT ME</Text>
                <Text style={styles.sectionContent}>
                    Experienced web developer with over one year of
                    hands-on expertise in ReactJS, NodeJS, ExpressJS,
                    and MongoDB, complemented by strong problem-solving skills and proficiency in data structures and
                    algorithms. Able to adeptly translate design concepts
                    and wireframes into high-quality code, ensuring optimal
                    performance and efficient development.
                </Text>
            </View>

            {/* Working Experience */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>WORKING EXPERIENCE</Text>
                <Text style={styles.sectionContent}>Full Stack Developer at Butterfly Digital (Jan 2023 – Present)</Text>
            </View>

            {/* Education Section */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>EDUCATION</Text>
                <Text style={styles.sectionContent}>B.Sc in Computer Science & Engineering, Leading University (2019-2023)</Text>
                <Text style={styles.sectionContent}>H.S.C, Science, Sylhet Board (2018)</Text>
                <Text style={styles.sectionContent}>S.S.C, Science, Sylhet Board (2016)</Text>
            </View>

            {/* Skills Section */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>SKILLS</Text>
                <Text style={styles.sectionContent}>Java, Kotlin, Android Widget, Firebase, PHP, MYSQL, Api, Json</Text>
            </View>

            {/* Language Section */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>LANGUAGE</Text>
                <Text style={styles.sectionContent}>English, Bangla</Text>
            </View>

            {/* Course Section */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>COURSE</Text>
                <Text style={styles.sectionContent}>Udemy: Full Stack Web Development</Text>
                <Text style={styles.sectionContent}>Sjinnovation: Mern Stack Development</Text>
                <Text style={styles.sectionContent}>Udemy: React Native Development</Text>
            </View>

            {/* Projects Section */}
            <View style={styles.section}>
                <Text style={styles.sectionHeader}>PROJECTS</Text>
                <TouchableOpacity onPress={() => openLink('https://github.com/itsmdshahin/carselleronline')}>
                    <Text style={styles.projectTitle}>Car Seller Online - MERN Stack (Source Code)</Text>
                </TouchableOpacity>
                <Text style={styles.sectionContent}>
                    Developed a car buying and selling marketplace using the MERN stack and MongoDB database.
                </Text>
            </View>
            <TouchableOpacity onPress={createPDF} style={styles.downloadButton}>
                <Text style={styles.downloadButtonText}>Download as PDF</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
    },
    title: {
        fontSize: 20,
        color: '#555',
        marginBottom: 10,
    },
    contactContainer: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    contactText: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    link: {
        color: '#1e90ff',
        textDecorationLine: 'underline',
        marginBottom: 5,
    },
    section: {
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    sectionContent: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
    projectTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1e90ff',
        marginBottom: 5,
    },
    downloadButton: {
        marginTop: 20,
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#1e90ff',
        alignItems: 'center',
    },
    downloadButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    // Add more styling if needed...
});

export default ResumeScreen;
