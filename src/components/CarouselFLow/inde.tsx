import * as React from "react";
import { Text, View, Image, Dimensions, ImageSourcePropType } from "react-native";
import { interpolate } from "react-native-reanimated";
import Carousel, { } from "react-native-reanimated-carousel";

import { BlurView } from "expo-blur";


type Props ={
  Items: any[]
}
type Items = {
  item: {
    name: string;
    imgSoftSkill: ImageSourcePropType
  }
  index: number
}

const CarouselFlow = ({Items}: Props) => {
  const headerHeight = 100;
  const scale = 0.9;

  const RIGHT_OFFSET = Dimensions.get('window').width * (1 - scale);

  const ITEM_WIDTH = Dimensions.get('window').width * scale;
  const ITEM_HEIGHT = 120;

  const PAGE_HEIGHT = Dimensions.get('window').height - headerHeight;
  const PAGE_WIDTH = Dimensions.get('window').width;

  const animationStyle = React.useCallback(
    (value: number) => {
      "worklet";

      const translateY = interpolate(
        value,
        [-1, 0, 1],
        [-ITEM_HEIGHT, 0, ITEM_HEIGHT],
      );
      const right = interpolate(
        value,
        [-1, -0.2, 1],
        [RIGHT_OFFSET / 2, RIGHT_OFFSET, RIGHT_OFFSET / 3],
      );
      return {
        transform: [{ translateY }],
        right,
      };
    },
    [RIGHT_OFFSET],
  );

  return (
    <View style={{ flex: 1}}>
      {/* <Image
        source={}
        style={{
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
          position: "absolute",
        }}
      /> */}
      <BlurView
        intensity={80}
        tint="dark"
        style={{
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
          position: "absolute",
        }}
      />
      <Carousel
        snapEnabled={true}
        autoPlay={true}
        loop={true}
        autoPlayInterval={2500}
        vertical
        style={{
            alignItems: 'center',
          justifyContent: "center",
          width: PAGE_WIDTH,
          height: PAGE_HEIGHT,
        }}
        width={ITEM_WIDTH}
        pagingEnabled={false}
        height={ITEM_HEIGHT}
        data={Items}
        renderItem={({item, index }: Items) => {
          return (
              <View
              key={index} 
                style={{
                  alignItems: "center",
                  flex: 1,
                  justifyContent: "space-between",
                  flexDirection: "row",
                  borderRadius: 20,
                  paddingHorizontal: 10
                }}
              >
                                <View
                  style={{
                    width: ITEM_WIDTH * 0.6,
                    height: ITEM_HEIGHT - 20,
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{
                      width: ITEM_WIDTH * 0.3,
                      height: ITEM_HEIGHT - 20,
                      borderRadius: 10,
                      marginRight: 5,
                      resizeMode: 'contain'
                    }}
                    source={item.imgSoftSkill}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    
                  }}
                >
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      borderRadius: 10,
                      marginRight: 5,
                      resizeMode: 'cover'
                    }}
                    source={item.imgSoftSkill}
                  />
                  <Text
                    numberOfLines={1}
                    style={{
                      maxWidth: ITEM_WIDTH * 0.5 - 10,
                      fontFamily: 'Open-Sans',
                      color: 'rgba(255,255,255,0.6)'
                    }}
                  >
                    {item.name}
                  </Text>
                </View>

              </View>
          );
        }}
        customAnimation={animationStyle}
      />
    </View>
  );
}

export default CarouselFlow;