import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  Notification,
  Receipt21,
  Clock,
  Message,
  SearchNormal,
} from 'iconsax-react-native';
import {fontType, colors} from './src/theme';

export default function App() {
  const [searchText, setSearchText] = useState('');
  const handleSearchPress = text => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HAPPYOLD.</Text>
        <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={{paddingHorizontal: 24, marginTop: 10}}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Cari"
            onChangeText={handleSearchPress}
            value={searchText}
            placeholderTextColor="grey"
          />
          <View style={styles.searchButtonContainer}>
            <TouchableOpacity style={styles.searchButton}>
              <SearchNormal
                color={colors.black()}
                variant="Linear"
                size={24}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.listCategory}></View>
      <ListBlog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(240,255,240)',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  searchButtonContainer: {
    paddingLeft: 14,
  },
  searchButton: {},
  icon: {
    margin: 8,
    // marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 2,
    color: 'black',
    height: 45,
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
});

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 14}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/564x/b1/46/03/b1460331b4ad6040e2a52b6c1eca19f2.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    {/* Exploring the World of Electric Cars */}
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.black()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/564x/89/38/29/893829c2fec28450729da0f27ce05062.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    {/* Exploring the World of Electric Cars */}
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.black()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/564x/89/be/e6/89bee6abfa7316b2d8088fc332c72ef0.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    {/* Exploring the World of Electric Cars */}
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.black()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/564x/a7/be/8d/a7be8dcb9281e1be1a43063156a99ee9.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    {/* Baking 101: Mastering the Art of Baking */}
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.black()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/474x/cb/9a/3b/cb9a3bd879a93b1932bff38124ec7219.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    {/* Rediscovering Vinyl: The Resurgence of Analog */}
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}> </Text> */}
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21
                      color={colors.black()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
       
      </View>
    </ScrollView>
  );
};

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 'auto',
  },
  cardImage: {
    width: 350,
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.white(),
  },
  cardText: {
    fontSize: 10,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});
