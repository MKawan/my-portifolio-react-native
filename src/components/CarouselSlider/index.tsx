import * as React from "react";
import { Dimensions, View, StyleSheet, Image } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { ImageSourcePropType } from "react-native";
import FlipAnimation from "../FlipAnimation";

import styles from "./styles";
import { listImage } from "./listImage";
import Card2 from "../Card2";

const PAGE_WIDTH = Dimensions.get('window').width;
const PAGE_HEIGHT = Dimensions.get('window').height; // Adicionando altura total da tela

type Props = {
  item: {
    id: string;
    color1: string;
    color2: string
    img: ImageSourcePropType;
    descrition: string[];
    about?: string;
  }
  index: number
}

function CarouselSlider() {
  const [isVertical, setIsVertical] = React.useState(false);
  const progress = useSharedValue<number>(0);
  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: PAGE_WIDTH * 0.86, // Ajuste a largura conforme necessário
        height: PAGE_HEIGHT * 0.95, // Ajuste a altura conforme necessário
      } as const)
    : ({
        vertical: false,
        width: PAGE_WIDTH * 0.86, // Ajuste a largura conforme necessário
        height: PAGE_HEIGHT * 0.95, // Ajuste a altura conforme necessário
      } as const);

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };
  
  return (
    <Carousel
      ref={ref}
      {...baseOptions}
      style={{
        flex: 1,
        width: PAGE_WIDTH,
        height: '100%',
        justifyContent: 'center',
      }}
      pagingEnabled={true}
      snapEnabled={true}
      autoPlay={true}
      loop={true}
      autoPlayInterval={2500}
      mode="parallax"
      modeConfig={{
        parallaxScrollingScale: 0.84,
        parallaxScrollingOffset: 50,
      }}
      data={listImage}
      renderItem={({ item, index }: Props) => (
        <View style={styles.container} key={index}>
          <FlipAnimation card2={<Card2 color1={item.color1} 
          color2={item.color2}/>} 
          id={index} front={item.img} text={item.descrition} about={item.about}/>
        </View>
      )}
    />
  );
}

export default CarouselSlider;