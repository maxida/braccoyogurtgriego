import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView, Linking, Image } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function Layout() {
  const handleOrderPress = () => {
    Linking.openURL('https://wa.me/3816679776');
  };

  const openInstagram = () => {
    Linking.openURL('https://instagram.com/cocochomeneces');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      <Stack.Screen options={{ headerShown: false }} />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>BRACCO</Text>
          {/* <TouchableOpacity style={styles.cartButton}>
            <FontAwesome5 name="shopping-cart" size={24} color="#0e151b" />
          </TouchableOpacity> */}
        </View>

        {/* Hero Section */}
        <View style={styles.heroContainer}>
          <Image 
            source={require('../assets/images/product.png')} 
            style={styles.productImage}
            resizeMode="contain"
          />
          
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>YOGURT GRIEGO ARTESANAL</Text>
            <Text style={styles.heroSubtitle}>
              100% ARTESANAL, SIN ADITIVOS NI CONSERVANTES, LIBRE DE GLUTEN (SIN T.A.C.C.), 33g DE PROTEÍNA POR PORCIÓN.
            </Text>
            
            <View style={styles.productDetails}>
              <View style={styles.detailItem}>
                <MaterialIcons name="date-range" size={20} color="#4e7697" />
                <Text style={styles.detailText}>CONSUMO: 17.06</Text>
              </View>
              <View style={styles.detailItem}>
                <MaterialIcons name="fitness-center" size={20} color="#4e7697" />
                <Text style={styles.detailText}>33g PROTEÍNA</Text>
              </View>
              <View style={styles.detailItem}>
                <MaterialIcons name="all-inclusive" size={20} color="#4e7697" />
                <Text style={styles.detailText}>SIN T.A.C.C</Text>
              </View>
              <View style={styles.detailItem}>
                <MaterialIcons name="scale" size={20} color="#4e7697" />
                <Text style={styles.detailText}>300 GR</Text>
              </View>
            </View>
            
            <TouchableOpacity 
              style={styles.orderButton}
              onPress={handleOrderPress}
            >
              <Text style={styles.orderButtonText}>HACÉ TU PEDIDO</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>BENEFICIOS</Text>
          
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <MaterialIcons name="favorite" size={24} color="#0e151b" />
              <Text style={styles.featureTitle}>Saludable</Text>
              <Text style={styles.featureText}>Bajo en grasa y colesterol, ideal para una dieta balanceada</Text>
            </View>
            
            <View style={styles.featureCard}>
              <MaterialIcons name="whatshot" size={24} color="#0e151b" />
              <Text style={styles.featureTitle}>Proteico</Text>
              <Text style={styles.featureText}>33g de proteína por porción para tu recuperación muscular</Text>
            </View>
            
            <View style={styles.featureCard}>
              <MaterialIcons name="spa" size={24} color="#0e151b" />
              <Text style={styles.featureTitle}>Natural</Text>
              <Text style={styles.featureText}>Elaborado con ingredientes 100% naturales sin aditivos</Text>
            </View>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CONTACTO</Text>
          
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={() => Linking.openURL('tel:+543816679776')}
          >
            <MaterialIcons name="phone" size={24} color="#47a1ea" />
            <Text style={styles.contactText}>381 6679776</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.contactItem}
            onPress={openInstagram}
          >
            {/* <MaterialIcons name="instagram" size={24} color="#47a1ea" /> */}
            <Text style={styles.contactText}>@cocochomeneces</Text>
          </TouchableOpacity>
        </View>

        {/* Location Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DÓNDE ENCONTRARNOS</Text>
          
          <View style={styles.locationCard}>
            <MaterialIcons name="location-on" size={24} color="#47a1ea" />
            <Text style={styles.locationText}>CHACABUCO 1625, TUCUMÁN</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink}>Contacto</Text>
          <Text style={styles.footerLink}>Acerca de Nosotros</Text>
          <Text style={styles.footerLink}>Preguntas Frecuentes</Text>
        </View>
        
        <View style={styles.socialIcons}>
          <MaterialIcons name="facebook" size={24} color="#4e7697" />
          {/* <MaterialIcons name="twitter" size={24} color="#4e7697" /> */}
          {/* <MaterialIcons name="instagram" size={24} color="#4e7697" /> */}
        </View>
        
        <Text style={styles.copyright}>@2024 BRACCO. Todos los derechos reservados.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    paddingBottom: 120,
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
  heroContainer: {
    minHeight: 500,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: 250,
    marginBottom: 16,
  },
  heroContent: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  heroTitle: {
    color: '#0e151b',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    color: '#4e7697',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
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
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 32,
    minWidth: 180,
  },
  orderButtonText: {
    color: '#0e151b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    color: '#0e151b',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '100%',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  featureTitle: {
    color: '#0e151b',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
  },
  featureText: {
    color: '#4e7697',
    fontSize: 14,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  contactText: {
    color: '#0e151b',
    fontSize: 16,
    marginLeft: 8,
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: '#f8fafc',
    borderRadius: 8,
  },
  locationText: {
    color: '#0e151b',
    fontSize: 16,
    marginLeft: 8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f8fafc',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
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