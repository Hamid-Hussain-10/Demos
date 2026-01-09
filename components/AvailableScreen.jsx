// import React, { useRef, useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   FlatList,
//   Pressable,
//   Dimensions,
// } from "react-native";
// import FontAwesome from "@expo/vector-icons/FontAwesome";

// const { width } = Dimensions.get("window");

// /* ---------------- DATA ---------------- */
// const DATA = [
//   {
//     id: "1",
//     doctor: "Dr. Matthew Smith",
//     date: "November 17",
//     time: "10:15 a.m",
//   },
//   {
//     id: "2",
//     doctor: "Dr. John Khan",
//     date: "January 09",
//     time: "10:20 a.m",
//   },
//   {
//     id: "3",
//     doctor: "Dr. Sara Ahmed",
//     date: "February 02",
//     time: "09:00 a.m",
//   },
// ];

// /* ---------------- SCREEN ---------------- */
// export default function AvailableScreen() {
//   const listRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goNext = () => {
//     if (currentIndex < DATA.length - 1) {
//       listRef.current.scrollToIndex({
//         index: currentIndex + 1,
//         animated: true,
//       });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Next Appointment</Text>

//       <FlatList
//         ref={listRef}
//         data={DATA}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item.id}
//         onMomentumScrollEnd={(e) => {
//           const index = Math.round(e.nativeEvent.contentOffset.x / width);
//           setCurrentIndex(index);
//         }}
//         renderItem={({ item }) => (
//           <View style={styles.slide}>
//             <View style={styles.card}>
//               <View style={styles.leftBg} />

//               <View style={styles.content}>
//                 <View style={styles.leftSection}>
//                   <Image
//                     source={require("../assets/images/calender.png")}
//                     style={styles.image}
//                     resizeMode="contain"
//                   />

//                   <View style={styles.textContainer}>
//                     <Text style={styles.doctor}>{item.doctor}</Text>
//                     <Text style={styles.date}>{item.date}</Text>
//                     <Text style={styles.time}>{item.time}</Text>
//                   </View>
//                 </View>

//                 <Pressable style={styles.iconCircle} onPress={goNext}>
//                   <FontAwesome name="angle-right" size={18} color="#000" />
//                 </Pressable>
//               </View>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// /* ---------------- STYLES ---------------- */
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#4CB2B3",
//     paddingTop: 10,
//   },

//   heading: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginLeft: 16,
//     marginBottom: 12,
//   },

//   slide: {
//     width,
//     paddingHorizontal: 6,
//   },

//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 30,
//     overflow: "hidden",
//   },

//   leftBg: {
//     position: "absolute",
//     left: -40,
//     top: -10,
//     bottom: 0,
//     width: 140,
//     height: 170,
//     backgroundColor: "#2ec4b6",
//     transform: [{ skewY: "-15deg" }],
//     borderRightWidth: 5,
//     borderRightColor: "#000",
//   },

//   content: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: 16,
//   },

//   leftSection: {
//     flexDirection: "row",
//     alignItems: "center",
//   },

//   image: {
//     width: 100,
//     height: 100,
//     // marginRight: 14,
//   },

//   textContainer: {
//     justifyContent: "center",
//   },

//   doctor: {
//     fontSize: 16,
//     fontWeight: "600",
//   },

//   date: {
//     fontSize: 14,
//     color: "#777",
//     marginTop: 2,
//   },

//   time: {
//     fontSize: 20,
//     fontWeight: "600",
//     marginTop: 4,
//   },

//   iconCircle: {
//     backgroundColor: "#f2f2f2",
//     width: 44,
//     height: 44,
//     borderRadius: 22,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AvailableScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Next Appointment</Text>

      <View style={styles.card}>
        {/* Background shape */}
        <View style={styles.leftBg} />

        {/* Card content */}
        <View style={styles.content}>
          {/* Left section */}
          <View style={styles.leftSection}>
            <View style={styles.imageWrapper}>
              <Image
                source={require("../assets/images/calender.png")}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.doctor}>Dr. John Khan</Text>
              <Text style={styles.date}>January 09</Text>
              <Text style={styles.time}>10:20 am</Text>
            </View>
          </View>

          {/* Right icon */}
          <View style={styles.iconCircle}>
            <FontAwesome name="angle-right" size={20} color="#121111" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#4CB2B3",
    // padding: 8,
  },

  heading: {
    fontSize: 20,
    fontWeight: "600",
    color: "#010101",
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#f1e8e8",
    borderRadius: 20,
    overflow: "hidden",
  },

  leftBg: {
    position: "absolute",
    left: -40,
    top: -10,
    bottom: 0,
    width: 140,
    height: 170,
    backgroundColor: "#2ec4b6",
    transform: [{ skewY: "-15deg" }],
    borderRightWidth: 3,
    borderRightColor: "#a1b616",
  },

  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  imageWrapper: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },

  image: {
    width: 130,
    height: 130,
  },

  textContainer: {
    marginLeft: 16,
  },

  doctor: {
    fontSize: 16,
    fontWeight: "600",
  },

  date: {
    fontSize: 14,
    color: "#666",
  },

  time: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 6,
  },

  iconCircle: {
    backgroundColor: "#e7e1e1",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
