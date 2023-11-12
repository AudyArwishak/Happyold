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
  Health,
  People,
  Activity,
  Call,
  Setting,
} from 'iconsax-react-native';
import {fontType, colors} from '../../theme';
import {BlogList} from '.../../../data';
import {ItemBerita} from '../../components';

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const handleSearchPress = text => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1}}>
          <Text style={styles.title}>HAPPYOLD.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Notification
            style={{marginRight: 15}}
            color={colors.black()}
            variant="Linear"
            size={24}
          />
          <Setting color={colors.black()} variant="Linear" size={24} />
        </View>
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
    // justifyContent: 'space-between',
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
    gap: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemCat: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
  textCat: {
    color: 'black',
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
                uri: 'https://i.pinimg.com/564x/58/23/ba/5823ba24d2cce6ce325ba2f44623cf35.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    {/* Exploring the World of Electric Cars */}
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/564x/a6/ab/bc/a6abbc87d5be92ed35da01d5ba2b733c.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    {/* Exploring the World of Electric Cars */}
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View></View>
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
                <View></View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/564x/8e/11/d5/8e11d50d6099c433205ad7cb55e1ca15.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    {/* Baking 101: Mastering the Art of Baking */}
                  </Text>
                  {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
                </View>
                <View></View>
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
                <View></View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>

        <View>
          <Text
            style={{
              color: 'black',
              paddingHorizontal: 24,
              fontSize: 20,
              fontFamily: fontType['Pjs-Bold'],
            }}>
            KATEGORI
          </Text>
        </View>
        <View style={{...category.item, marginLeft: 10}}>
          <View>
            <View style={category.itemCat}>
              <Health size={38} variant="Bulk" style={{color: '#618264'}} />
            </View>
            <View style={{alignItems: 'center', paddingTop: 10}}>
              <Text style={category.textCat}>CEK UP</Text>
            </View>
          </View>
          <View>
            <View style={category.itemCat}>
              <People size={38} variant="Bulk" style={{color: '#618264'}} />
            </View>
            <View style={{alignItems: 'center', paddingTop: 10}}>
              <Text style={category.textCat}>DOKTER</Text>
            </View>
          </View>
          <View>
            <View style={category.itemCat}>
              <Activity size={38} variant="Bulk" style={{color: '#618264'}} />
            </View>
            <View style={{alignItems: 'center', paddingTop: 10}}>
              <Text style={category.textCat}>DATA</Text>
            </View>
          </View>
          <View>
            <View style={category.itemCat}>
              <Call size={38} variant="Bulk" style={{color: '#618264'}} />
            </View>
            <View style={{alignItems: 'center', paddingTop: 10}}>
              <Text style={category.textCat}>LAYANAN</Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              paddingHorizontal: 24,
              fontSize: 20,
              fontFamily: fontType['Pjs-Bold'],
            }}>
            PAKET LAYANAN
          </Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 14}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={{width: 200, height: 300, borderRadius: 5}}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/564x/2f/d3/6e/2fd36e1138dfe9c62557abeaf43c2544.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Paket Olahraga</Text>
                  <Text style={itemHorizontal.cardText}></Text>
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={{width: 200, height: 300, borderRadius: 5}}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/564x/19/62/34/1962345b7829feba6d4259b6823a3378.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Paket Fasilitas Alat Bantu
                  </Text>
                  <Text style={itemHorizontal.cardText}></Text>
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={{width: 200, height: 300, borderRadius: 5}}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/474x/1e/10/42/1e1042c6696094639a5fb55673085769.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Paket Hiburan</Text>
                  <Text style={itemHorizontal.cardText}></Text>
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={{width: 200, height: 300, borderRadius: 5}}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/474x/51/89/4d/51894d14d3c6626a89bffd67d510870d.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Paket Hobi</Text>
                  <Text style={itemHorizontal.cardText}></Text>
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={{width: 200, height: 300, borderRadius: 5}}
              resizeMode="cover"
              imageStyle={{borderRadius: 50}}
              source={{
                uri: 'https://i.pinimg.com/474x/24/00/eb/2400ebf0c5faa5cc0556e4bc3e079efe.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Paket Refreshing</Text>
                  <Text style={itemHorizontal.cardText}> </Text>
                </View>
                <View></View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View style={{paddingHorizontal: 24, paddingTop: 16}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: fontType['Pjs-Bold'],
            }}>
            FOR YOU
          </Text>
          <View>
            {BlogList.map((item, index) => (
              <ItemBerita item={item} key={index} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const beritaLansia = StyleSheet.create({
  listCard: {
    paddingVertical: 10,
  },
  cardItem: {
    backgroundColor: 'rgba(168, 107, 71, 0.05)',
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: 'rgba(168, 107, 71, 1)',
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
    color: 'rgba(168, 107, 71, 0.6)',
  },
  cardImage: {
    width: 100,
    height: 'auto',
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
    width: 380,
    height: 265,
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
