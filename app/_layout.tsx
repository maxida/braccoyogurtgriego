import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Linking, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { FaShoppingCart, FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdDateRange, MdFitnessCenter, MdAllInclusive, MdScale } from 'react-icons/md';
import { GiHeartBeats, GiMuscleUp, GiStrong } from 'react-icons/gi';

export default function Layout() {
  const carouselRef = useRef(null);
  const deliveryPointsRef = useRef(null);

  const products = [
    {
      id: '1',
      name: 'YOGURT GRIEGO NATURAL',
      description: 'Clásico y cremoso, perfecto para cualquier ocasión',
      image: require('../assets/images/product.png')
    },
    {
      id: '2',
      name: 'YOGURT GRIEGO CON FRUTILLA',
      description: 'Delicioso sabor a frutilla natural',
      image: require('../assets/images/product.png')
    },
    {
      id: '3',
      name: 'YOGURT GRIEGO CON MIEL',
      description: 'Endulzado naturalmente con miel pura',
      image: require('../assets/images/product.png')
    }
  ];

  const deliveryPoints = [
    { id: '1', name: 'CHACABUCO 1625, TUCUMÁN', hours: 'Lunes a Viernes 9-18hs' },
    { id: '2', name: 'MERCADO DEL NORTE, STAND 45', hours: 'Martes a Domingo 8-14hs' },
    { id: '3', name: 'FERIA DE SIMOCA', hours: 'Sábados 7-13hs' }
  ];

  const handleOrderPress = () => {
    Linking.openURL('https://wa.me/3816679776');
  };

  const openInstagram = () => {
    Linking.openURL('https://instagram.com/cocochomeneces');
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} resizeMode="contain" />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
    </View>
  );

  const renderDeliveryPoint = ({ item }) => (
    <View style={styles.deliveryCard}>
      <MdLocationOn size={24} color="#47a1ea" />
      <View style={styles.deliveryInfo}>
        <Text style={styles.deliveryName}>{item.name}</Text>
        <Text style={styles.deliveryHours}>{item.hours}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>BRACCO</Text>
          <TouchableOpacity style={styles.cartButton}>
            <FaShoppingCart size={24} color="#0e151b" />
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image
            source={require('../assets/images/product.png')}
            style={styles.mainProductImage}
            resizeMode="contain"
          />
          <Text style={styles.heroTitle}>YOGURT GRIEGO BRACCO</Text>
          <Text style={styles.heroSubtitle}>ARTESANAL • NATURAL • PREMIUM</Text>

          <View style={styles.productDetails}>
            <View style={styles.detailItem}>
              <MdDateRange size={20} color="#4e7697" />
              <Text style={styles.detailText}>CONSUMO: 17.06</Text>
            </View>
            <View style={styles.detailItem}>
              <MdFitnessCenter size={20} color="#4e7697" />
              <Text style={styles.detailText}>33g PROTEÍNA</Text>
            </View>
            <View style={styles.detailItem}>
              <MdAllInclusive size={20} color="#4e7697" />
              <Text style={styles.detailText}>SIN T.A.C.C</Text>
            </View>
            <View style={styles.detailItem}>
              <MdScale size={20} color="#4e7697" />
              <Text style={styles.detailText}>300 GR</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.orderButton}
            onPress={handleOrderPress}
          >
            <Text style={styles.orderButtonText}>HACÉ TU PEDIDO</Text>
            <FaWhatsapp size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Our Story */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NUESTRA HISTORIA</Text>
          <Text style={styles.storyText}>
            En BRACCO, nos apasiona elaborar auténtico yogurt griego utilizando métodos tradicionales.
            Nuestro viaje comenzó con un simple deseo: compartir la riqueza y cremosidad del verdadero
            yogurt griego con nuestra comunidad. Utilizamos los mejores ingredientes y seguimos técnicas
            artesanales para crear un producto delicioso y nutritivo.
          </Text>
        </View>

        {/* Products Carousel */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NUESTROS PRODUCTOS</Text>
          <FlatList
            ref={carouselRef}
            data={products}
            renderItem={renderProductItem}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContainer}
          />
        </View>

        {/* Benefits Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>BENEFICIOS</Text>
          <View style={styles.benefitsGrid}>
            <View style={styles.benefitCard}>
              <GiHeartBeats size={32} color="#47a1ea" />
              <Text style={styles.benefitTitle}>Saludable</Text>
              <Text style={styles.benefitText}>Bajo en grasa y colesterol, ideal para una dieta balanceada</Text>
            </View>
            <View style={styles.benefitCard}>
              <GiMuscleUp size={32} color="#47a1ea" />
              <Text style={styles.benefitTitle}>Proteico</Text>
              <Text style={styles.benefitText}>33g de proteína por porción para tu recuperación muscular</Text>
            </View>
            <View style={styles.benefitCard}>
              <GiStrong size={32} color="#47a1ea" />
              <Text style={styles.benefitTitle}>Natural</Text>
              <Text style={styles.benefitText}>Elaborado con ingredientes 100% naturales sin aditivos</Text>
            </View>
          </View>
        </View>

        {/* Delivery Points */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PUNTOS DE ENTREGA</Text>
          <FlatList
            ref={deliveryPointsRef}
            data={deliveryPoints}
            renderItem={renderDeliveryPoint}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.deliveryList}
          />
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CONTACTO</Text>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => Linking.openURL('mailto:info@braccoyogurt.com')}
          >
            <MdEmail size={24} color="#47a1ea" />
            <Text style={styles.contactText}>info@braccoyogurt.com</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => Linking.openURL('tel:+543816679776')}
          >
            <MdPhone size={24} color="#47a1ea" />
            <Text style={styles.contactText}>381 6679776</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactItem}
            onPress={openInstagram}
          >
            <FaInstagram size={24} color="#47a1ea" />
            <Text style={styles.contactText}>@cocochomeneces</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{ height: 30 }} /> */}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Contacto</Text>
          <Text style={styles.footerLink}>Acerca de Nosotros</Text>
          <Text style={styles.footerLink}>Preguntas Frecuentes</Text>
        </View>

        <View style={styles.socialIcons}>
          <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com')}>
            <FaFacebook size={20} color="#4e7697" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')}>
            <FaTwitter size={20} color="#4e7697" />
          </TouchableOpacity>
          <TouchableOpacity onPress={openInstagram}>
            <FaInstagram size={20} color="#4e7697" />
          </TouchableOpacity>
        </View>

        <Text style={styles.copyright}>© 2024 BRACCO. Todos los derechos reservados.</Text>
      </View>
    </View>
  );
}

// Los estilos se mantienen igual que en la versión anterior
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingBottom: 8,
    backgroundColor: '#f8fafc',
  },
  title: {
    color: '#0e151b',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingLeft: 48,
  },
  cartButton: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroSection: {
    backgroundColor: 'white',
    padding: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  mainProductImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  heroTitle: {
    color: '#0e151b',
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 5,
  },
  heroSubtitle: {
    color: '#4e7697',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: '500',
  },
  productDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  detailItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  detailText: {
    color: '#4e7697',
    fontSize: 14,
    marginLeft: 8,
  },
  orderButton: {
    backgroundColor: '#47a1ea',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  orderButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  section: {
    backgroundColor: 'white',
    padding: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  sectionTitle: {
    color: '#0e151b',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  storyText: {
    color: '#4e7697',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  carouselContainer: {
    paddingHorizontal: 10,
  },
  productCard: {
    width: 220,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 20,
    marginRight: 15,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  productName: {
    color: '#0e151b',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
    textAlign: 'center',
  },
  productDescription: {
    color: '#4e7697',
    fontSize: 14,
    textAlign: 'center',
  },
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  benefitCard: {
    width: '100%',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  benefitTitle: {
    color: '#0e151b',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 5,
  },
  benefitText: {
    color: '#64748b',
    fontSize: 14,
    textAlign: 'center',
  },
  deliveryList: {
    paddingHorizontal: 10,
  },
  deliveryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  deliveryInfo: {
    marginLeft: 10,
  },
  deliveryName: {
    color: '#0e151b',
    fontSize: 16,
    fontWeight: '600',
  },
  deliveryHours: {
    color: '#4e7697',
    fontSize: 14,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  contactText: {
    color: '#0e151b',
    fontSize: 16,
    marginLeft: 10,
  },
  footer: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    alignItems: 'center',
  },
  footerLinks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 20,
  },
  footerLink: {
    color: '#4e7697',
    fontSize: 16,
    minWidth: 120,
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 20,
  },
  copyright: {
    color: '#4e7697',
    fontSize: 14,
    textAlign: 'center',
  },
});