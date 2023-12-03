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
import {formatDate} from '../utils/fomatDate';

const navigation = useNavigation();
const ItemPesan = ({item}) => {
  return (
    <TouchableOpacity
      style={beritaLansia.listCard}
      onPress={() => navigation.navigate('DetailPesan', {blogId: item.id})}>
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
              <Text style={beritaLansia.cardCategory}>
                {formatDate(item.createdAt)}
              </Text>
              <Text style={beritaLansia.cardTitle}>{item.nama}</Text>
            </View>
          </View>
          <View style={beritaLansia.cardInfo}>
            <Text style={beritaLansia.cardText}>{item.keluhan}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemPesan;
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
