import React from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const COLORS = { primary: "#282534", white: "#fff", vert: "#2c9644" };

const slides = [
  {
    id: "1",
    image: require("../../../../assets/onboarding/1.png"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    image: require("../../../../assets/onboarding/2.png"),
    title: "Best Digital Solution",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    image: require("../../../../assets/onboarding/3.png"),
    title: "Achieve Your Goals",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Slide = ({ item }) => {
  return (
    <SafeAreaView style={{ alignItems: "center" }}>
      <Animatable.Image
        animation="slideInDown"
        duraton="1500"
        source={item.image}
        style={{ height: "75%", width, resizeMode: "contain" }}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const Index = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <SafeAreaView
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <Animatable.View style={{ marginBottom: 20 }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{ height: 50, alignItems: "center" }}>
              <LinearGradient
                colors={["#FBAE3C", "#FFFF"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 2.0, y: 2.0 }}
                style={{
                  height: 48,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 300,
                  elevation: 5,
                }}
              >
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.navigate("Inscription")}
                >
                  <Text
                    style={{ fontWeight: "bold", fontSize: 15, color: "white" }}
                  >
                    COMMENCER
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn,
                  {
                    borderColor: "#FBAE3C",
                    borderWidth: 1,
                    backgroundColor: "white",
                    elevation: 10,
                  },
                ]}
                onPress={skip}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "black",
                  }}
                >
                  SAUTER
                </Text>
              </TouchableOpacity>
              <View style={{ width: 15 }} />
              <LinearGradient
                colors={["#FBAE3C", "#FFFF"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 2.0, y: 2.0 }}
                style={{
                  height: 48,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 200,
                  elevation: 10,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={goToNextSlide}
                  style={styles.btn}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 15,
                      color: "white",
                    }}
                  >
                    SUIVANTS
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          )}
        </Animatable.View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FlatList
        nestedScrollEnabled
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        // contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "black",
    fontSize: 13,
    marginTop: 10,
    maxWidth: "70%",
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "#1a1818",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    // backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Index;
