import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  ArrowLeft,
  Like1,
  Receipt21,
  Message,
  Share,
  More,
} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {BlogList, Doclist} from '../../../data';
import FastImage from 'react-native-fast-image';
import {fontType, colors} from '../../theme';
import {Dokter} from '..';
const DokterDetail = ({route}) => {
  const {blogId} = route.params;
  const [iconStates, setIconStates] = useState({
    liked: {variant: 'Linear', color: colors.grey(0.6)},
    bookmarked: {variant: 'Linear', color: colors.grey(0.6)},
  });
  const selectedBlog = Doclist.find(blog => blog.id === blogId);
  const navigation = useNavigation();
  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? colors.blue()
            : colors.grey(0.6),
      },
    }));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.grey(0.6)} variant="Linear" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 54,
        }}>
        <FastImage
          style={styles.image}
          source={{
            uri: selectedBlog.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}></FastImage>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <Text style={styles.category}>{selectedBlog.category}</Text>
          <Text style={styles.date}>{selectedBlog.createdAt}</Text>
        </View>
        <Text style={styles.title}>Dr Wahyudi Ahmad</Text>
        <Text style={styles.Text}>
          Nama: Dr. Wahyudi Ahmad{'\n'}Tanggal Lahir: 10 Oktober 1975
        </Text>
        <Text style={styles.Text1}>
          {'\n'}Latar Belakang Pendidikan :
          </Text>
          <Text style={styles.Text}>{'\n'} Dr. Wahyudi Ahmad lahir dan dibesarkan
          di Surabaya, Indonesia. Minatnya terhadap kesehatan masyarakat,
          khususnya dalam merawat lansia, muncul selama masa studinya di
          Fakultas Kedokteran Universitas Airlangga. Setelah menyelesaikan
          pendidikan dasar dan menengahnya di Surabaya, Dr. Wahyudi berhasil meraih
          gelar sarjana kedokteran. Spesialisasi dan Pengalaman:
        </Text>
        <Text style={styles.Text1}>
          {'\n'}Spesialisasi dan Pengalaman :
          </Text>
          <Text style={styles.Text}>
          Wahyudi Ahmad
          kemudian melanjutkan pendidikan spesialisasi dalam bidang Geriatri,
          yang merupakan cabang ilmu kedokteran yang fokus pada pelayanan
          kesehatan bagi lansia. Ia menyelesaikan program spesialisasi ini di
          Rumah Sakit Umum Pusat Dr. Sardjito Yogyakarta, tempat di mana ia
          mendapatkan pengalaman luas dalam penanganan berbagai masalah
          kesehatan yang umumnya dialami oleh lansia.
        </Text>
      </ScrollView>
    </View>
  );
};
export default DokterDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: colors.white(),
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 200,
    width: 'auto',
    borderRadius: 15,
  },
  info: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  category: {
    color: colors.blue(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  date: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
  },

  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: -25,
  },
  Text: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
  },
  Text1: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  content: {
    color: colors.grey(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
    lineHeight: 20,
    marginTop: 15,
  },
});
