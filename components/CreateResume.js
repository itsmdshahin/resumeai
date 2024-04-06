import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const CreateResume = ({ navigation }) => {

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState('');
  const [achievement, setAchievement] = useState('');



  const handleSubmit = () => {
    const resumeData = { fullname, email, phone, summary, education, experience, skills, projects, achievement };
    navigation.navigate('DownloadResume', { resumeData })
    navigation.navigate('ResumeScreen', { resumeData });

    Alert.alert('Preview', 'Your resume will be previewed here.' + fullname, [
      // You can add more buttons for different actions
      { text: 'OK', onPress: () => console.log('OK Pressed' + fullname) }
    ]);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Create Resume</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput style={styles.input} placeholder='Enter your full name'
          onChangeText={setFullname} value={fullname}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Email Address:</Text>
        <TextInput style={styles.input} placeholder='Enter your email' keyboardType='email-address'
          onChangeText={setEmail} value={email}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput style={styles.input} placeholder='Enter your phone number' keyboardType='phone-pad'
          onChangeText={setPhone} value={phone}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Professional Summary:</Text>
        <TextInput style={[styles.input, styles.textArea]} placeholder='Lntroduce yourself' multiline={true} numberOfLines={4}
          onChangeText={setSummary} value={summary}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Education:</Text>
        <TextInput style={[styles.input, styles.textArea]} placeholder='List your educational background' multiline={true} numberOfLines={4}
          onChangeText={setEducation} value={education}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Work Experience:</Text>
        <TextInput style={[styles.input, styles.textArea]} placeholder='Detail your work experience' multiline={true} numberOfLines={4}
          onChangeText={setExperience} value={experience}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Skills:</Text>
        <TextInput style={[styles.input, styles.textArea]} placeholder='React Native,React,Nodejs,Express' multiline={true} numberOfLines={4}
          onChangeText={setSkills} value={skills}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Projects:</Text>
        <TextInput style={[styles.input, styles.textArea]} placeholder='Project Name: {\n}Project Description: \nTechnologies Used:' multiline={true} numberOfLines={6}
          onChangeText={setProjects} value={projects}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Achievement:</Text>
        <TextInput style={[styles.input, styles.textArea]} placeholder='Achievement' multiline={true} numberOfLines={6}
          onChangeText={setAchievement} value={achievement}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Preview Resume</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateResume;

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#367cff',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    height: 40,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Align text to top in Android
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: '#367cff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
