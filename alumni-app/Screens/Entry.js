// import React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { NavigationContainer }from '@react-navigation/native';
// const Entry=()=>{

//   const navigation=useNavigation()
//   const press=()=>{
//     navigation.navigate('Registration')
//   }
//   return(
//     <View style={styles.container}>
//         <View style={styles.row}>
//             <Image
//       style={[styles.images,{marginRight:30}]}
//       source={{
//         uri:'https://media.istockphoto.com/id/1097305476/photo/close-up-of-registration-desk-in-front-of-conference-center-with-businessman-writing-on-the.jpg?s=612x612&w=0&k=20&c=q6Lh_mkJ5HN330zCF9brJJgvbk1tTX4xsu4bhp9PgY0='
//       }}
//       />
//       <TouchableOpacity onPress={press}>
//         <Text style={styles.link}>Single Registration</Text>
//       </TouchableOpacity>
//       </View>
//       <View style={styles.row}>
//       <Image
//       style={[styles.images,{marginLeft:20}]}
//       source={{
//         uri:'https://media.istockphoto.com/id/869283118/photo/register-online.jpg?s=612x612&w=0&k=20&c=G9FeU0sYw0pJMr3FKVuCqRqgOnqcupdDpbq5sqdqMRc='
//       }}
//       />
//       <TouchableOpacity onPress={press}>
//         <Text style={styles.link} >Bulk Registration</Text>
//       </TouchableOpacity>
//       </View>
//     </View>
//   )
// }

// export default Entry;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection:'row',
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   images:{
//     width:100,
//     height:100,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     width: '100%', 
//     marginBottom: 20, 
//   },
//   link: {
//     marginTop: 10,
//     fontSize: 16,
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });



import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Entry = () => {
  const navigation = useNavigation();

  const press = () => {
    navigation.navigate('Registration');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://media.istockphoto.com/id/1097305476/photo/close-up-of-registration-desk-in-front-of-conference-center-with-businessman-writing-on-the.jpg?s=612x612&w=0&k=20&c=q6Lh_mkJ5HN330zCF9brJJgvbk1tTX4xsu4bhp9PgY0='
          }}
        />
        <TouchableOpacity onPress={press}>
          <Text style={styles.link}>Single Registration</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://media.istockphoto.com/id/869283118/photo/register-online.jpg?s=612x612&w=0&k=20&c=G9FeU0sYw0pJMr3FKVuCqRqgOnqcupdDpbq5sqdqMRc='
          }}
        />
        <TouchableOpacity onPress={press}>
          <Text style={styles.link}>Bulk Registration</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    width: '100%', 
    marginBottom: 20, 
  },
  image: {
    width: 100,
    height: 100,
  },
  link: {
    marginTop: 10,
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Entry;


