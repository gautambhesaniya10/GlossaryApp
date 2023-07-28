import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {React, useRef} from 'react';
import bannerImg from '../Images/newBanner.jpg';
import ProductCard from '../common/ProductCard';

const Main = ({category, allProduct, productLoading}) => {
  const scrollViewRef = useRef(null);

  const handleCategoryItemClick = index => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: index * 300, // Adjust the value to scroll to the desired position
        animated: true,
      });
    }
  };

  // const stories = [
  //   'https://st.depositphotos.com/2069237/4425/i/950/depositphotos_44255511-stock-photo-shopping-women-banner-with-bags.jpg',
  //   'https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg',
  //   'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/clothing-store-banner-design-template-e7332aaf6402c88cb4623bf8eb6f97e2_screen.jpg?ts=1620867237',
  // ];

  return (
    <View style={{flex: 1}}>
      <ScrollView ref={scrollViewRef} style={{marginBottom: 100}}>
        <Image source={bannerImg} style={styles.banner} />

        {productLoading ? (
          <View style={{marginTop: 60}}>
            <ActivityIndicator size={60} />
          </View>
        ) : (
          <>
            <View style={{marginTop: 20}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={category}
                renderItem={({item, index}) => {
                  if (index <= 5) {
                    return (
                      <>
                        <TouchableOpacity
                          onPress={() => handleCategoryItemClick(index)}
                          style={[
                            styles.categoryItem,
                            {backgroundColor: 'pink'},
                          ]}>
                          <Text style={{color: 'black', fontWeight: '500'}}>
                            {item.toUpperCase()}
                          </Text>
                        </TouchableOpacity>
                      </>
                    );
                  }
                }}
              />
            </View>

            <Text style={styles.bottomCat}>
              NEW {category[0]?.toUpperCase()}
            </Text>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={allProduct}
                renderItem={({item, index}) => {
                  if (category[0] === item?.category) {
                    return <ProductCard item={item} />;
                  }
                }}
              />
            </View>

            <Text style={styles.bottomCat}>
              NEW {category[1]?.toUpperCase()}
            </Text>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={allProduct}
                renderItem={({item, index}) => {
                  if (category[1] === item?.category) {
                    return <ProductCard item={item} />;
                  }
                }}
              />
            </View>

            <Text style={styles.bottomCat}>
              NEW {category[2]?.toUpperCase()}
            </Text>
            <View style={{flex: 1}}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={{flexDirection: 'row'}}>
                {allProduct &&
                  allProduct.map((item, index) => {
                    if (category[2] === item?.category) {
                      return (
                        <View key={index}>
                          <ProductCard item={item} />
                        </View>
                      );
                    }
                  })}
              </ScrollView>
            </View>
            <Text style={styles.bottomCat}>
              NEW {category[3]?.toUpperCase()}
            </Text>
            <View style={{flex: 1}}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={{flexDirection: 'row'}}>
                {allProduct &&
                  allProduct.map((item, index) => {
                    if (category[3] === item?.category) {
                      return (
                        <View key={index}>
                          <ProductCard item={item} />
                        </View>
                      );
                    }
                  })}
              </ScrollView>
            </View>
            <Text style={styles.bottomCat}>
              NEW {category[4]?.toUpperCase()}
            </Text>
            <View style={{flex: 1}}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={{flexDirection: 'row'}}>
                {allProduct &&
                  allProduct.map((item, index) => {
                    if (category[4] === item?.category) {
                      return (
                        <View key={index}>
                          <ProductCard item={item} />
                        </View>
                      );
                    }
                  })}
              </ScrollView>
            </View>
            <Text style={styles.bottomCat}>
              NEW {category[5]?.toUpperCase()}
            </Text>
            <View style={{flex: 1}}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={{flexDirection: 'row'}}>
                {allProduct &&
                  allProduct.map((item, index) => {
                    if (category[5] === item?.category) {
                      return (
                        <View key={index}>
                          <ProductCard item={item} />
                        </View>
                      );
                    }
                  })}
              </ScrollView>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  banner: {
    alignItems: 'center',
    height: 200,
    width: '94%',
    borderRadius: 12,
    margin: 10,
  },
  categoryItem: {
    padding: 10,
    marginLeft: 20,
    borderRadius: 20,
    borderWidth: 1,
  },
  bottomCat: {
    marginLeft: 20,
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
  },
});
