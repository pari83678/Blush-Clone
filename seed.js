import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/product.js";

dotenv.config();

const products = [
  {
    name: "Rosy Glow Lip Oil",
    category: "Makeup",
    price: 499,
    oldPrice: 699,
    rating: 4.8,
    badge: "Bestseller",
    description: "A glossy lip oil that gives your lips a soft rosy glow.",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa"
  },
  {
    name: "Dreamy Pink Blush",
    category: "Makeup",
    price: 699,
    oldPrice: 899,
    rating: 4.9,
    badge: "Popular",
    description: "Buildable pink blush for a fresh and natural-looking glow.",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
  },
  {
    name: "Dewy Glow Face Serum",
    category: "Skincare",
    price: 899,
    oldPrice: 1099,
    rating: 4.7,
    badge: "New",
    description: "Lightweight face serum for hydrated and dewy-looking skin.",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
  },
  {
    name: "Rose Petal Cleanser",
    category: "Skincare",
    price: 599,
    oldPrice: 749,
    rating: 4.5,
    badge: "Gentle Care",
    description: "A gentle daily cleanser that leaves skin feeling fresh and clean.",
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8"
  },
  {
    name: "Blushiee Beauty Kit",
    category: "Sets",
    price: 1499,
    oldPrice: 1999,
    rating: 5.0,
    badge: "Gift Pick",
    description: "A cute beauty set with everyday essentials for your routine.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
  },
  {
    name: "Vanilla Cloud Body Mist",
    category: "Fragrance",
    price: 799,
    oldPrice: 999,
    rating: 4.7,
    badge: "Trending",
    description: "A soft vanilla fragrance with a sweet and comforting finish.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601"
  },
  {
    name: "Silky Touch Makeup Brush",
    category: "Accessories",
    price: 349,
    oldPrice: 449,
    rating: 4.4,
    badge: "Everyday",
    description: "Soft and silky makeup brush for smooth everyday application.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },
  {
    name: "Hydra Glow Moisturizer",
    category: "Skincare",
    price: 749,
    oldPrice: 899,
    rating: 4.8,
    badge: "Glow",
    description: "Hydrating moisturizer for soft, smooth and glowing-looking skin.",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd"
  }
];

const seedProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("✅ 8 products added successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed error:", error.message);
    process.exit(1);
  }
};

seedProducts();