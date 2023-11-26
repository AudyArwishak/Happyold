import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Receipt21, Clock, Message, UserAdd} from 'iconsax-react-native';
import React, {useState} from 'react';
import {fontType, colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();
const ItemDoc = ({item}) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };

  return (
    <TouchableOpacity
      style={beritaLansia.listCard}
      onPress={() => navigation.navigate('DokterDetail', {blogId: item.id})}>
      <View style={beritaLansia.cardItem}>
        <Image
          style={beritaLansia.cardImage}
          source={{
            uri: item.image,
          }}
        />
        <View style={beritaLansia.cardContent}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{gap: 5, width: '70%'}}>
              <Text style={beritaLansia.cardCategory}>{item.no}</Text>
              <Text style={beritaLansia.cardTitle}>{item.nama}</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('ContactDoc')}>
              <UserAdd color={'brown'} variant={'Linear'} size={25} />
            </TouchableOpacity>
          </View>
          <View style={beritaLansia.cardInfo}>
            <Text style={beritaLansia.cardText}>{item.desc}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemDoc;
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
