import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {React, useRef, useState} from 'react';
import bannerImg from '../Images/newBanner.jpg';
import ProductCard from '../common/ProductCard';

const Main = ({category, allProduct, productLoading}) => {
  const scrollViewRef = useRef(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleCategoryItemClick = index => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        y: index * 300, // Adjust the value to scroll to the desired position
        animated: true,
      });
    }
  };

  const handleRefresh = () => {
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        ref={scrollViewRef}
        style={{marginBottom: 100}}>
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
