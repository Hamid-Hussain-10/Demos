// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";

// // Utility functions (arrow + destructuring)
// const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
// const getTotalPrice = ({ price, quantity }) => price * quantity;
// const adultCheck = ({ age }) => age >= 18;
// const getProductDescription = ({ name, price }) =>
//   `The Product is ${name} and costs $${price}`;
// const reverseString = (str) => str.split("").reverse().join("");

// // Find most expensive product price
// const findLargestNumber = (products) =>
//   Math.max(...products.map(({ price }) => price));

// // Sample data
// const users = [
//   { firstName: "Ali", lastName: "Khan", age: 23 },
//   { firstName: "Hohn", lastName: "Ali", age: 17 },
//   { firstName: "Usman", lastName: "Shah", age: 30 },
// ];

// const products = [
//   { name: "Laptop", price: 1500, quantity: 2 },
//   { name: "Phone", price: 800, quantity: 1 },
//   { name: "Headphones", price: 150, quantity: 3 },
// ];

// export default function App() {
//   const [message, setMessage] = useState("Loading...");

//   // Calculations
//   const totalAllProducts = products.reduce(
//     (sum, product) => sum + getTotalPrice(product),
//     0
//   );

//   const mostExpensivePrice = findLargestNumber(products);

//   // Fake API
//   const fetchFakeData = async () =>
//     new Promise((resolve) =>
//       setTimeout(() => resolve({ message: "Data loaded successfully" }), 2000)
//     );

//   const getData = async () => {
//     try {
//       const data = await fetchFakeData();
//       setMessage(data.message);
//     } catch {
//       setMessage("Something went wrong");
//     }
//   };

//   useEffect(() => {
//     getData();
//   });

//   return (
//     <ScrollView style={styles.container}>
//       {/* USERS */}
//       <Text style={styles.header}>Users</Text>
//       {users.map((user) => (
//         <View key={user.firstName} style={styles.item}>
//           <Text style={styles.text}>Full Name: {getFullName(user)}</Text>
//           <Text style={styles.text}>
//             Is Adult: {adultCheck(user) ? "Yes" : "No"}
//           </Text>
//           <Text style={styles.text}>
//             Reversed Name: {reverseString(user.firstName)}
//           </Text>
//         </View>
//       ))}

//       {/* PRODUCTS */}
//       <Text style={styles.header}>Products</Text>
//       {products.map((product) => (
//         <View key={product.name} style={styles.item}>
//           <Text style={styles.text}>{getProductDescription(product)}</Text>
//           <Text style={styles.text}>
//             Total Price: ${getTotalPrice(product)}
//           </Text>
//         </View>
//       ))}

//       {/* MOST EXPENSIVE */}
//       <View style={[styles.item, { backgroundColor: "#ffe8cc" }]}>
//         <Text style={[styles.text, { fontWeight: "bold" }]}>
//           Most Expensive Price: ${mostExpensivePrice}
//         </Text>
//       </View>

//       {/* ADULT USERS */}
//       <Text style={styles.header}>Adults</Text>
//       {users.filter(adultCheck).map((user) => (
//         <View key={user.firstName + "_adult"} style={styles.item}>
//           <Text style={styles.text}>Full Name: {getFullName(user)}</Text>
//         </View>
//       ))}

//       {/* TOTAL */}
//       <View style={[styles.item, { backgroundColor: "#d1f7d6" }]}>
//         <Text style={[styles.text, { fontWeight: "bold" }]}>
//           Total of All Products: ${totalAllProducts}
//         </Text>
//       </View>

//       {/* API STATUS */}
//       <View style={[styles.item, { backgroundColor: "#e0f0ff" }]}>
//         <Text style={styles.text}>API Status: {message}</Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#e3e3e3",
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginVertical: 12,
//   },
//   item: {
//     marginBottom: 10,
//     padding: 10,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#002d64",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   text: {
//     fontSize: 18,
//     marginVertical: 4,
//   },
// });

import { View } from "react-native";
import React from "react";
import FirstScreen from "../components/FirstScreen.jsx";
const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <FirstScreen />
    </View>
  );
};

export default index;
