import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  
  // Datos del producto (en una app real esto vendría de una API o estado global)
  const product = {
    id: '1',
    name: 'YOGURT GRIEGO CON FRUTILLA',
    description: 'Nuestro yogurt griego con frutilla es una deliciosa mezcla de cremoso yogurt griego y frutillas frescas y maduras. Cada cucharada ofrece una explosión de dulzura natural y un toque refrescante, haciéndolo perfecto para un snack saludable o desayuno.',
    image: require('../../assets/images/product.png'),
    nutrition: {
      calories: 150,
      fat: '5g',
      protein: '30g',
      carbs: '15g'
    },
    ingredients: 'Yogurt Griego (Leche Pasteurizada, Cultivos Vivos), Frutillas, Endulzante Natural (Miel o Jarabe de Arce).'
  };

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          headerShown: false 
        }} 
      />
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <FaArrowLeft size={24} color="#0e151b" />
          </TouchableOpacity>
          <Text style={styles.title}>BRACCO</Text>
          <TouchableOpacity style={styles.cartButton}>
            <FaShoppingCart size={24} color="#0e151b" />
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <Image 
          source={product.image} 
          style={styles.productImage}
          resizeMode="contain"
        />

        {/* Product Info */}
        <View style={styles.content}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          
          {/* Nutrition Info */}
          <Text style={styles.sectionTitle}>INFORMACIÓN NUTRICIONAL</Text>
          <View style={styles.nutritionGrid}>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{product.nutrition.calories}</Text>
              <Text style={styles.nutritionLabel}>Calorías</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{product.nutrition.fat}</Text>
              <Text style={styles.nutritionLabel}>Grasas</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{product.nutrition.protein}</Text>
              <Text style={styles.nutritionLabel}>Proteínas</Text>
            </View>
            <View style={styles.nutritionItem}>
              <Text style={styles.nutritionValue}>{product.nutrition.carbs}</Text>
              <Text style={styles.nutritionLabel}>Carbohidratos</Text>
            </View>
          </View>
          
          {/* Ingredients */}
          <Text style={styles.sectionTitle}>INGREDIENTES</Text>
          <Text style={styles.ingredients}>{product.ingredients}</Text>
          
          {/* Delivery Info */}
          <View style={styles.deliveryCard}>
            <MdLocationOn size={24} color="#47a1ea" />
            <View style={styles.deliveryInfo}>
              <Text style={styles.deliveryText}>Disponible para entrega o retiro</Text>
              <Text style={styles.deliverySubtext}>CHACABUCO 1625, TUCUMÁN</Text>
            </View>
          </View>
          
          {/* Add to Cart Button */}
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartText}>AGREGAR AL CARRITO</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    color: '#0e151b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartButton: {
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
  },
  content: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 10,
  },
  productName: {
    color: '#0e151b',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
  },
  productDescription: {
    color: '#4e7697',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 25,
  },
  sectionTitle: {
    color: '#0e151b',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
    marginTop: 20,
  },
  nutritionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  nutritionItem: {
    width: '48%',
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  nutritionValue: {
    color: '#0e151b',
    fontSize: 20,
    fontWeight: '700',
  },
  nutritionLabel: {
    color: '#4e7697',
    fontSize: 14,
  },
  ingredients: {
    color: '#4e7697',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  deliveryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  deliveryInfo: {
    marginLeft: 10,
  },
  deliveryText: {
    color: '#0e151b',
    fontSize: 16,
    fontWeight: '600',
  },
  deliverySubtext: {
    color: '#4e7697',
    fontSize: 14,
  },
  addToCartButton: {
    backgroundColor: '#47a1ea',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProductDetail;