import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import React, {useState} from 'react';
import {fontType, colors} from '../theme';

const ItemBerita = ({item}) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };

  return (
    <View style={beritaLansia.listCard}>
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
              <Text style={beritaLansia.cardCategory}>{item.category}</Text>
              <Text style={beritaLansia.cardTitle}>{item.title}</Text>
            </View>
            <TouchableOpacity onPress={() => toggleBookmark(item.id)}>
              <Receipt21
                color={'brown'}
                variant={bookmark.includes(item.id) ? 'Bold' : 'Linear'}
                size={25}
              />
            </TouchableOpacity>
          </View>
          <View style={beritaLansia.cardInfo}>
            <Clock size={10} variant="Linear" color={colors.grey(0.6)} />
            <Text style={beritaLansia.cardText}>{item.createdAt}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemBerita;
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
