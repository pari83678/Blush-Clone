import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Product from "./models/product.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, ".env")
});

// ----------------------------------------------------
// 60 BLUSHIEE PRODUCTS
// ----------------------------------------------------

const products = [
  {
    name: "Blushiee Glow Hydrating Serum",
    category: "Skincare",
    price: 699,
    oldPrice: 899,
    rating: 4.7,
    reviews: 328,
    badge: "BESTSELLER",
    description: "Lightweight hydrating serum for soft, fresh and glowing skin.",
    skinType: ["Dry", "Normal", "Combination"],
    suitableFor: "Dry and dull skin",
    benefits: ["Deep hydration", "Glow", "Soft skin"],
    ingredients: ["Hyaluronic Acid", "Vitamin E", "Aloe Vera"],
    howToUse: "Apply 2-3 drops on clean skin and gently massage.",
    stock: 48,
  },
  {
    name: "Blushiee Vitamin C Brightening Serum",
    category: "Skincare",
    price: 749,
    oldPrice: 999,
    rating: 4.8,
    reviews: 412,
    badge: "POPULAR",
    description: "Brightening serum designed to improve the appearance of dull skin.",
    skinType: ["Normal", "Combination", "Oily"],
    suitableFor: "Dull and uneven-looking skin",
    benefits: ["Brightening", "Radiance", "Even-looking tone"],
    ingredients: ["Vitamin C", "Niacinamide", "Vitamin E"],
    howToUse: "Use 2-3 drops after cleansing.",
    stock: 42,
  },
  {
    name: "Blushiee Niacinamide 10% Serum",
    category: "Skincare",
    price: 599,
    oldPrice: 799,
    rating: 4.6,
    reviews: 276,
    badge: "TRENDING",
    description: "Daily serum for a smoother and more balanced-looking complexion.",
    skinType: ["Oily", "Combination", "Normal"],
    suitableFor: "Oily and combination skin",
    benefits: ["Oil balance", "Smooth appearance", "Pore care"],
    ingredients: ["Niacinamide", "Zinc PCA", "Panthenol"],
    howToUse: "Apply a few drops after cleansing.",
    stock: 55,
  },
  {
    name: "Blushiee Hyaluronic Aqua Gel",
    category: "Skincare",
    price: 549,
    oldPrice: 699,
    rating: 4.5,
    reviews: 198,
    badge: "NEW",
    description: "Refreshing water gel that leaves skin hydrated and comfortable.",
    skinType: ["Dry", "Normal", "Combination"],
    suitableFor: "Dehydrated skin",
    benefits: ["Hydration", "Freshness", "Softness"],
    ingredients: ["Hyaluronic Acid", "Aloe Vera", "Glycerin"],
    howToUse: "Apply a thin layer after cleansing.",
    stock: 61,
  },
  {
    name: "Blushiee Rose Face Mist",
    category: "Skincare",
    price: 399,
    oldPrice: 499,
    rating: 4.4,
    reviews: 145,
    badge: "FAVOURITE",
    description: "Refreshing facial mist for an instant boost of freshness.",
    skinType: ["Dry", "Normal", "Combination", "Oily"],
    suitableFor: "All skin types",
    benefits: ["Refreshes skin", "Hydration", "Glow"],
    ingredients: ["Rose Water", "Aloe Vera", "Glycerin"],
    howToUse: "Mist over face whenever skin feels dry.",
    stock: 72,
  },
  {
    name: "Blushiee Gentle Foaming Cleanser",
    category: "Skincare",
    price: 449,
    oldPrice: 599,
    rating: 4.6,
    reviews: 291,
    badge: "BESTSELLER",
    description: "Gentle daily cleanser that removes dirt without a heavy feel.",
    skinType: ["Normal", "Combination", "Oily"],
    suitableFor: "Daily cleansing",
    benefits: ["Cleansing", "Fresh feel", "Non-heavy finish"],
    ingredients: ["Green Tea", "Aloe Vera", "Glycerin"],
    howToUse: "Massage onto wet face and rinse thoroughly.",
    stock: 65,
  },
  {
    name: "Blushiee Barrier Repair Cream",
    category: "Skincare",
    price: 799,
    oldPrice: 999,
    rating: 4.8,
    reviews: 367,
    badge: "EDITOR'S PICK",
    description: "Rich but comfortable cream for a nourished-looking skin barrier.",
    skinType: ["Dry", "Normal", "Sensitive"],
    suitableFor: "Dry and sensitive-feeling skin",
    benefits: ["Nourishment", "Moisture", "Barrier support"],
    ingredients: ["Ceramides", "Shea Butter", "Panthenol"],
    howToUse: "Apply after serum or cleanser.",
    stock: 39,
  },
  {
    name: "Blushiee Oil Control Moisturizer",
    category: "Skincare",
    price: 599,
    oldPrice: 749,
    rating: 4.5,
    reviews: 219,
    badge: "OILY SKIN",
    description: "Lightweight moisturizer made for a fresh, non-greasy finish.",
    skinType: ["Oily", "Combination"],
    suitableFor: "Oily and combination skin",
    benefits: ["Hydration", "Lightweight feel", "Oil care"],
    ingredients: ["Niacinamide", "Green Tea", "Glycerin"],
    howToUse: "Apply a small amount after cleansing.",
    stock: 47,
  },
  {
    name: "Blushiee SPF 50 Glow Sunscreen",
    category: "Skincare",
    price: 649,
    oldPrice: 849,
    rating: 4.7,
    reviews: 489,
    badge: "BESTSELLER",
    description: "Daily sunscreen with a comfortable glow finish.",
    skinType: ["Normal", "Dry", "Combination"],
    suitableFor: "Daily sun protection",
    benefits: ["Sun protection", "Glow finish", "Moisture"],
    ingredients: ["UV Filters", "Vitamin E", "Aloe Vera"],
    howToUse: "Apply generously as the last morning skincare step.",
    stock: 51,
  },
  {
    name: "Blushiee Clay Purifying Mask",
    category: "Skincare",
    price: 499,
    oldPrice: 649,
    rating: 4.4,
    reviews: 173,
    badge: "PURIFY",
    description: "Clay mask for a clean and refreshed-looking complexion.",
    skinType: ["Oily", "Combination"],
    suitableFor: "Oily and combination skin",
    benefits: ["Purifying", "Freshness", "Oil care"],
    ingredients: ["Kaolin Clay", "Green Tea", "Zinc"],
    howToUse: "Apply a thin layer and rinse after 10 minutes.",
    stock: 44,
  },

  {
    name: "Blushiee Velvet Matte Foundation",
    category: "Makeup",
    price: 799,
    oldPrice: 999,
    rating: 4.6,
    reviews: 345,
    badge: "BESTSELLER",
    description: "Buildable foundation with a soft matte finish.",
    skinType: ["Normal", "Combination", "Oily"],
    suitableFor: "Everyday makeup",
    benefits: ["Buildable coverage", "Soft matte finish", "Long wear"],
    ingredients: ["Vitamin E", "Squalane", "Skin-conditioning agents"],
    howToUse: "Apply small amounts and blend evenly.",
    stock: 34,
  },
  {
    name: "Blushiee Dewy Skin Foundation",
    category: "Makeup",
    price: 849,
    oldPrice: 1099,
    rating: 4.7,
    reviews: 287,
    badge: "NEW",
    description: "Lightweight foundation with a fresh dewy-looking finish.",
    skinType: ["Dry", "Normal"],
    suitableFor: "Dry and normal skin",
    benefits: ["Dewy finish", "Comfortable wear", "Natural appearance"],
    ingredients: ["Hyaluronic Acid", "Vitamin E", "Squalane"],
    howToUse: "Blend from the centre of the face outward.",
    stock: 31,
  },
  {
    name: "Blushiee Full Cover Concealer",
    category: "Makeup",
    price: 499,
    oldPrice: 649,
    rating: 4.5,
    reviews: 221,
    badge: "POPULAR",
    description: "Creamy concealer with buildable coverage.",
    skinType: ["Normal", "Combination", "Oily"],
    suitableFor: "Under-eye and spot coverage",
    benefits: ["Buildable coverage", "Smooth finish", "Easy blending"],
    ingredients: ["Vitamin E", "Jojoba Oil", "Emollients"],
    howToUse: "Apply small dots and blend with a sponge or brush.",
    stock: 49,
  },
  {
    name: "Blushiee Cream Blush - Rose",
    category: "Makeup",
    price: 399,
    oldPrice: 499,
    rating: 4.8,
    reviews: 412,
    badge: "FAVOURITE",
    description: "Cream blush that blends easily for a fresh rosy look.",
    skinType: ["Dry", "Normal", "Combination"],
    suitableFor: "Natural everyday makeup",
    benefits: ["Natural flush", "Easy blending", "Buildable colour"],
    ingredients: ["Shea Butter", "Vitamin E", "Jojoba Oil"],
    howToUse: "Tap onto cheeks and blend with fingers or sponge.",
    stock: 67,
  },
  {
    name: "Blushiee Cream Blush - Peach",
    category: "Makeup",
    price: 399,
    oldPrice: 499,
    rating: 4.7,
    reviews: 356,
    badge: "TRENDING",
    description: "Warm peach cream blush for a soft fresh look.",
    skinType: ["Dry", "Normal", "Combination"],
    suitableFor: "Warm everyday looks",
    benefits: ["Peachy colour", "Blendable", "Fresh finish"],
    ingredients: ["Shea Butter", "Vitamin E", "Jojoba Oil"],
    howToUse: "Apply lightly and build the colour.",
    stock: 63,
  },
  {
    name: "Blushiee Nude Lipstick",
    category: "Makeup",
    price: 349,
    oldPrice: 449,
    rating: 4.6,
    reviews: 298,
    badge: "POPULAR",
    description: "Comfortable nude lipstick for everyday looks.",
    skinType: ["All"],
    suitableFor: "Everyday makeup",
    benefits: ["Comfortable colour", "Smooth application", "Easy to wear"],
    ingredients: ["Vitamin E", "Jojoba Oil", "Shea Butter"],
    howToUse: "Apply directly to lips.",
    stock: 75,
  },
  {
    name: "Blushiee Berry Lipstick",
    category: "Makeup",
    price: 349,
    oldPrice: 449,
    rating: 4.7,
    reviews: 261,
    badge: "NEW",
    description: "Rich berry lipstick for a statement lip look.",
    skinType: ["All"],
    suitableFor: "Party and evening looks",
    benefits: ["Rich colour", "Smooth texture", "Statement look"],
    ingredients: ["Vitamin E", "Shea Butter", "Jojoba Oil"],
    howToUse: "Apply evenly from the centre outward.",
    stock: 58,
  },
  {
    name: "Blushiee Glossy Lip Oil",
    category: "Makeup",
    price: 429,
    oldPrice: 549,
    rating: 4.8,
    reviews: 391,
    badge: "BESTSELLER",
    description: "Glossy lip oil that leaves lips looking smooth and juicy.",
    skinType: ["All"],
    suitableFor: "Glossy lip looks",
    benefits: ["Gloss", "Comfort", "Soft-looking lips"],
    ingredients: ["Jojoba Oil", "Vitamin E", "Sweet Almond Oil"],
    howToUse: "Apply directly to lips.",
    stock: 71,
  },
  {
    name: "Blushiee Waterproof Kajal",
    category: "Makeup",
    price: 299,
    oldPrice: 399,
    rating: 4.5,
    reviews: 184,
    badge: "LONG WEAR",
    description: "Smooth kajal pencil designed for defined eye looks.",
    skinType: ["All"],
    suitableFor: "Everyday and evening eye makeup",
    benefits: ["Smooth application", "Defined eyes", "Long-wear feel"],
    ingredients: ["Wax Blend", "Vitamin E", "Pigments"],
    howToUse: "Glide gently along the lash line.",
    stock: 82,
  },
  {
    name: "Blushiee Liquid Eyeliner",
    category: "Makeup",
    price: 379,
    oldPrice: 499,
    rating: 4.6,
    reviews: 205,
    badge: "POPULAR",
    description: "Fine-tip liquid eyeliner for precise lines.",
    skinType: ["All"],
    suitableFor: "Winged and everyday eye looks",
    benefits: ["Precise tip", "Defined line", "Easy control"],
    ingredients: ["Pigments", "Film-forming agents", "Conditioners"],
    howToUse: "Draw a thin line along the lash line.",
    stock: 61,
  },
  {
    name: "Blushiee Lengthening Mascara",
    category: "Makeup",
    price: 499,
    oldPrice: 649,
    rating: 4.7,
    reviews: 326,
    badge: "BESTSELLER",
    description: "Mascara for visibly longer and defined-looking lashes.",
    skinType: ["All"],
    suitableFor: "Daily eye makeup",
    benefits: ["Lengthening look", "Definition", "Easy layering"],
    ingredients: ["Carnauba Wax", "Vitamin E", "Panthenol"],
    howToUse: "Brush from lash roots to tips.",
    stock: 54,
  },
  {
    name: "Blushiee Soft Glam Eyeshadow Palette",
    category: "Makeup",
    price: 899,
    oldPrice: 1199,
    rating: 4.8,
    reviews: 243,
    badge: "EDITOR'S PICK",
    description: "Versatile warm-toned palette for soft glam looks.",
    skinType: ["All"],
    suitableFor: "Everyday and party looks",
    benefits: ["Versatile shades", "Blendable colours", "Soft glam"],
    ingredients: ["Mineral Pigments", "Mica", "Vitamin E"],
    howToUse: "Apply and blend shades using an eyeshadow brush.",
    stock: 27,
  },

  {
    name: "Blushiee Soft Pink Nail Polish",
    category: "Nails",
    price: 249,
    oldPrice: 299,
    rating: 4.5,
    reviews: 151,
    badge: "NEW",
    description: "Soft pink nail colour for a clean elegant manicure.",
    skinType: ["All"],
    suitableFor: "Everyday nails",
    benefits: ["Elegant colour", "Smooth application", "Glossy finish"],
    ingredients: ["Colour Pigments", "Resins", "Solvents"],
    howToUse: "Apply two thin coats.",
    stock: 84,
  },
  {
    name: "Blushiee Cherry Red Nail Polish",
    category: "Nails",
    price: 249,
    oldPrice: 299,
    rating: 4.6,
    reviews: 174,
    badge: "POPULAR",
    description: "Classic cherry red nail colour.",
    skinType: ["All"],
    suitableFor: "Party and festive looks",
    benefits: ["Rich colour", "Glossy finish", "Easy application"],
    ingredients: ["Colour Pigments", "Resins", "Solvents"],
    howToUse: "Apply two thin coats.",
    stock: 79,
  },
  {
    name: "Blushiee Nude Beige Nail Polish",
    category: "Nails",
    price: 249,
    oldPrice: 299,
    rating: 4.4,
    reviews: 126,
    badge: "MINIMAL",
    description: "Elegant nude beige shade for minimalist nails.",
    skinType: ["All"],
    suitableFor: "Minimal everyday manicure",
    benefits: ["Neutral shade", "Glossy look", "Easy to wear"],
    ingredients: ["Colour Pigments", "Resins", "Solvents"],
    howToUse: "Apply two thin coats.",
    stock: 91,
  },
  {
    name: "Blushiee Cuticle Care Oil",
    category: "Nails",
    price: 299,
    oldPrice: 399,
    rating: 4.7,
    reviews: 138,
    badge: "CARE",
    description: "Nourishing oil for neat-looking cuticles.",
    skinType: ["All"],
    suitableFor: "Nail and cuticle care",
    benefits: ["Nourishment", "Soft cuticles", "Healthy-looking nails"],
    ingredients: ["Jojoba Oil", "Vitamin E", "Sweet Almond Oil"],
    howToUse: "Massage a drop into each cuticle.",
    stock: 63,
  },
  {
    name: "Blushiee Glass Shine Top Coat",
    category: "Nails",
    price: 299,
    oldPrice: 399,
    rating: 4.6,
    reviews: 112,
    badge: "SHINE",
    description: "Clear top coat for a glossy manicure finish.",
    skinType: ["All"],
    suitableFor: "Nail finishing",
    benefits: ["Gloss", "Smooth finish", "Manicure care"],
    ingredients: ["Film Formers", "Resins", "Conditioners"],
    howToUse: "Apply over dry nail colour.",
    stock: 73,
  },

  {
    name: "Blushiee Vanilla Body Lotion",
    category: "Body Care",
    price: 449,
    oldPrice: 599,
    rating: 4.6,
    reviews: 286,
    badge: "BESTSELLER",
    description: "Creamy body lotion with a soft vanilla fragrance.",
    skinType: ["Dry", "Normal"],
    suitableFor: "Dry body skin",
    benefits: ["Moisture", "Soft skin", "Comforting fragrance"],
    ingredients: ["Shea Butter", "Glycerin", "Vitamin E"],
    howToUse: "Massage onto clean body skin.",
    stock: 52,
  },
  {
    name: "Blushiee Coconut Body Butter",
    category: "Body Care",
    price: 549,
    oldPrice: 699,
    rating: 4.7,
    reviews: 241,
    badge: "RICH CARE",
    description: "Rich body butter for deeply moisturized-feeling skin.",
    skinType: ["Dry", "Normal"],
    suitableFor: "Very dry body skin",
    benefits: ["Rich moisture", "Softness", "Nourishment"],
    ingredients: ["Coconut Oil", "Shea Butter", "Vitamin E"],
    howToUse: "Apply generously after shower.",
    stock: 38,
  },
  {
    name: "Blushiee Lavender Body Mist",
    category: "Body Care",
    price: 399,
    oldPrice: 499,
    rating: 4.5,
    reviews: 198,
    badge: "FRESH",
    description: "Light body mist with a soft lavender-inspired scent.",
    skinType: ["All"],
    suitableFor: "Daily fragrance",
    benefits: ["Fresh fragrance", "Lightweight", "Easy to carry"],
    ingredients: ["Fragrance", "Aloe Vera", "Glycerin"],
    howToUse: "Mist lightly over body.",
    stock: 66,
  },
  {
    name: "Blushiee Rose Body Scrub",
    category: "Body Care",
    price: 499,
    oldPrice: 649,
    rating: 4.6,
    reviews: 175,
    badge: "GLOW",
    description: "Gentle body scrub for smoother-looking skin.",
    skinType: ["Normal", "Dry", "Combination"],
    suitableFor: "Body exfoliation",
    benefits: ["Smoothness", "Exfoliation", "Fresh feel"],
    ingredients: ["Sugar", "Rose Extract", "Shea Butter"],
    howToUse: "Massage gently onto damp skin and rinse.",
    stock: 47,
  },
  {
    name: "Blushiee Shea Hand Cream",
    category: "Body Care",
    price: 299,
    oldPrice: 399,
    rating: 4.5,
    reviews: 129,
    badge: "HAND CARE",
    description: "Rich hand cream for soft and moisturized-feeling hands.",
    skinType: ["Dry", "Normal"],
    suitableFor: "Dry hands",
    benefits: ["Moisture", "Soft hands", "Comfort"],
    ingredients: ["Shea Butter", "Glycerin", "Vitamin E"],
    howToUse: "Apply whenever hands feel dry.",
    stock: 74,
  },

  {
    name: "Blushiee Argan Hair Serum",
    category: "Hair Care",
    price: 499,
    oldPrice: 649,
    rating: 4.7,
    reviews: 324,
    badge: "BESTSELLER",
    description: "Lightweight hair serum for smooth-looking glossy hair.",
    skinType: ["All"],
    suitableFor: "Dry and frizzy-looking hair",
    benefits: ["Smoothness", "Shine", "Frizz care"],
    ingredients: ["Argan Oil", "Vitamin E", "Jojoba Oil"],
    howToUse: "Apply a small amount to lengths and ends.",
    stock: 49,
  },
  {
    name: "Blushiee Nourishing Hair Mask",
    category: "Hair Care",
    price: 599,
    oldPrice: 799,
    rating: 4.6,
    reviews: 218,
    badge: "CARE",
    description: "Nourishing hair mask for soft and manageable-looking hair.",
    skinType: ["All"],
    suitableFor: "Dry and rough-looking hair",
    benefits: ["Nourishment", "Softness", "Manageability"],
    ingredients: ["Shea Butter", "Coconut Oil", "Keratin"],
    howToUse: "Apply to lengths for 10-15 minutes before rinsing.",
    stock: 41,
  },
  {
    name: "Blushiee Daily Gentle Shampoo",
    category: "Hair Care",
    price: 449,
    oldPrice: 599,
    rating: 4.5,
    reviews: 263,
    badge: "DAILY CARE",
    description: "Gentle everyday shampoo for clean and fresh-feeling hair.",
    skinType: ["All"],
    suitableFor: "Daily hair cleansing",
    benefits: ["Cleansing", "Fresh feel", "Gentle care"],
    ingredients: ["Aloe Vera", "Panthenol", "Green Tea"],
    howToUse: "Massage onto wet scalp and rinse.",
    stock: 58,
  },
  {
    name: "Blushiee Smooth Conditioner",
    category: "Hair Care",
    price: 449,
    oldPrice: 599,
    rating: 4.6,
    reviews: 204,
    badge: "SMOOTH",
    description: "Conditioner for softer and smoother-feeling hair.",
    skinType: ["All"],
    suitableFor: "Dry and tangled hair",
    benefits: ["Softness", "Smoothness", "Easy combing"],
    ingredients: ["Argan Oil", "Shea Butter", "Panthenol"],
    howToUse: "Apply to lengths and rinse after a few minutes.",
    stock: 61,
  },
  {
    name: "Blushiee Scalp Refresh Tonic",
    category: "Hair Care",
    price: 549,
    oldPrice: 699,
    rating: 4.4,
    reviews: 119,
    badge: "NEW",
    description: "Light scalp tonic for a fresh-feeling hair routine.",
    skinType: ["All"],
    suitableFor: "Scalp care",
    benefits: ["Freshness", "Light hydration", "Scalp care"],
    ingredients: ["Rose Water", "Aloe Vera", "Panthenol"],
    howToUse: "Apply lightly to scalp and massage.",
    stock: 44,
  },

  {
    name: "Blushiee Peach Eau De Parfum",
    category: "Fragrance",
    price: 899,
    oldPrice: 1199,
    rating: 4.8,
    reviews: 361,
    badge: "BESTSELLER",
    description: "Fruity floral fragrance with a soft peach character.",
    skinType: ["All"],
    suitableFor: "Daily and date-night fragrance",
    benefits: ["Fruity scent", "Floral character", "Long-lasting feel"],
    ingredients: ["Fragrance", "Alcohol", "Aqua"],
    howToUse: "Spray lightly on pulse points.",
    stock: 29,
  },
  {
    name: "Blushiee Rose Bloom Eau De Parfum",
    category: "Fragrance",
    price: 899,
    oldPrice: 1199,
    rating: 4.7,
    reviews: 297,
    badge: "FAVOURITE",
    description: "Elegant rose-inspired fragrance for feminine everyday styling.",
    skinType: ["All"],
    suitableFor: "Everyday fragrance",
    benefits: ["Floral scent", "Elegant aroma", "Long-lasting feel"],
    ingredients: ["Fragrance", "Alcohol", "Aqua"],
    howToUse: "Spray on pulse points from a short distance.",
    stock: 35,
  },
  {
    name: "Blushiee Vanilla Cloud Perfume",
    category: "Fragrance",
    price: 799,
    oldPrice: 999,
    rating: 4.6,
    reviews: 231,
    badge: "SWEET",
    description: "Warm vanilla fragrance with a soft comforting character.",
    skinType: ["All"],
    suitableFor: "Evening and cozy looks",
    benefits: ["Warm scent", "Sweet aroma", "Comforting feel"],
    ingredients: ["Fragrance", "Alcohol", "Aqua"],
    howToUse: "Spray lightly onto pulse points.",
    stock: 43,
  },
  {
    name: "Blushiee Lavender Mist",
    category: "Fragrance",
    price: 599,
    oldPrice: 749,
    rating: 4.5,
    reviews: 188,
    badge: "CALM",
    description: "Soft lavender fragrance mist for a fresh everyday scent.",
    skinType: ["All"],
    suitableFor: "Daily refreshing fragrance",
    benefits: ["Fresh scent", "Light aroma", "Easy layering"],
    ingredients: ["Fragrance", "Aqua", "Aloe Vera"],
    howToUse: "Mist lightly over body.",
    stock: 57,
  },
  {
    name: "Blushiee Amber Night Perfume",
    category: "Fragrance",
    price: 999,
    oldPrice: 1299,
    rating: 4.8,
    reviews: 214,
    badge: "PREMIUM",
    description: "Warm amber fragrance designed for evening occasions.",
    skinType: ["All"],
    suitableFor: "Evening and special occasions",
    benefits: ["Warm aroma", "Elegant scent", "Premium feel"],
    ingredients: ["Fragrance", "Alcohol", "Aqua"],
    howToUse: "Spray on pulse points.",
    stock: 24,
  },

  {
    name: "Blushiee Rose Lip Balm",
    category: "Lip Care",
    price: 249,
    oldPrice: 299,
    rating: 4.7,
    reviews: 435,
    badge: "BESTSELLER",
    description: "Moisturizing lip balm with a soft rosy tint.",
    skinType: ["All"],
    suitableFor: "Dry lips",
    benefits: ["Moisture", "Soft lips", "Rosy tint"],
    ingredients: ["Shea Butter", "Beeswax", "Vitamin E"],
    howToUse: "Apply whenever lips feel dry.",
    stock: 88,
  },
  {
    name: "Blushiee Cocoa Lip Mask",
    category: "Lip Care",
    price: 349,
    oldPrice: 449,
    rating: 4.6,
    reviews: 213,
    badge: "NIGHT CARE",
    description: "Rich overnight lip mask for soft-looking lips.",
    skinType: ["All"],
    suitableFor: "Dry and rough lips",
    benefits: ["Overnight moisture", "Softness", "Nourishment"],
    ingredients: ["Cocoa Butter", "Shea Butter", "Vitamin E"],
    howToUse: "Apply a generous layer before bedtime.",
    stock: 62,
  },
  {
    name: "Blushiee Sugar Lip Scrub",
    category: "Lip Care",
    price: 299,
    oldPrice: 399,
    rating: 4.5,
    reviews: 146,
    badge: "CARE",
    description: "Gentle sugar lip scrub for smoother-looking lips.",
    skinType: ["All"],
    suitableFor: "Lip exfoliation",
    benefits: ["Smoothness", "Exfoliation", "Soft feel"],
    ingredients: ["Sugar", "Jojoba Oil", "Vitamin E"],
    howToUse: "Massage gently for a few seconds and wipe away.",
    stock: 69,
  },
  {
    name: "Blushiee Tinted Berry Lip Balm",
    category: "Lip Care",
    price: 299,
    oldPrice: 399,
    rating: 4.8,
    reviews: 318,
    badge: "TRENDING",
    description: "Tinted lip balm combining comfortable moisture with berry colour.",
    skinType: ["All"],
    suitableFor: "Everyday tinted lip look",
    benefits: ["Moisture", "Berry tint", "Comfort"],
    ingredients: ["Shea Butter", "Jojoba Oil", "Vitamin E"],
    howToUse: "Swipe directly onto lips.",
    stock: 81,
  },

  {
    name: "Blushiee Makeup Sponge Set",
    category: "Beauty Tools",
    price: 399,
    oldPrice: 499,
    rating: 4.6,
    reviews: 173,
    badge: "TOOLS",
    description: "Soft makeup sponges for foundation and concealer blending.",
    skinType: ["All"],
    suitableFor: "Base makeup application",
    benefits: ["Smooth blending", "Soft texture", "Reusable"],
    ingredients: ["Latex-free Foam"],
    howToUse: "Dampen, squeeze and use by tapping.",
    stock: 46,
  },
  {
    name: "Blushiee Everyday Makeup Brush Set",
    category: "Beauty Tools",
    price: 699,
    oldPrice: 899,
    rating: 4.7,
    reviews: 226,
    badge: "BESTSELLER",
    description: "Complete brush set for everyday face and eye makeup.",
    skinType: ["All"],
    suitableFor: "Complete makeup application",
    benefits: ["Multiple brushes", "Soft bristles", "Easy blending"],
    ingredients: ["Synthetic Fibres", "Wood", "Aluminium"],
    howToUse: "Use each brush according to its intended makeup step.",
    stock: 33,
  },
  {
    name: "Blushiee Rose Gold Mirror",
    category: "Beauty Tools",
    price: 299,
    oldPrice: 399,
    rating: 4.5,
    reviews: 91,
    badge: "ESSENTIAL",
    description: "Compact mirror for makeup touch-ups on the go.",
    skinType: ["All"],
    suitableFor: "Makeup and travel",
    benefits: ["Compact", "Portable", "Clear reflection"],
    ingredients: ["Glass", "ABS Plastic", "Metal"],
    howToUse: "Use for makeup application and touch-ups.",
    stock: 76,
  },
  {
    name: "Blushiee Lash Curler",
    category: "Beauty Tools",
    price: 249,
    oldPrice: 349,
    rating: 4.4,
    reviews: 108,
    badge: "ESSENTIAL",
    description: "Easy-grip eyelash curler for a lifted-looking lash effect.",
    skinType: ["All"],
    suitableFor: "Eye makeup",
    benefits: ["Lash lift", "Easy grip", "Compact"],
    ingredients: ["Stainless Steel", "Silicone"],
    howToUse: "Gently curl lashes before applying mascara.",
    stock: 64,
  },

  {
    name: "Blushiee Self Care Gift Box",
    category: "Gift Sets",
    price: 1299,
    oldPrice: 1699,
    rating: 4.9,
    reviews: 186,
    badge: "GIFT",
    description: "Curated beauty essentials for a complete self-care ritual.",
    skinType: ["All"],
    suitableFor: "Gifting and self-care",
    benefits: ["Multiple essentials", "Gift-ready", "Self-care routine"],
    ingredients: ["Varies by product"],
    howToUse: "Use each included product according to its instructions.",
    stock: 21,
  },
  {
    name: "Blushiee Glow Starter Kit",
    category: "Gift Sets",
    price: 999,
    oldPrice: 1299,
    rating: 4.8,
    reviews: 214,
    badge: "KIT",
    description: "Simple starter collection for a fresh everyday beauty routine.",
    skinType: ["Normal", "Combination"],
    suitableFor: "Beauty routine beginners",
    benefits: ["Easy routine", "Multiple products", "Giftable"],
    ingredients: ["Varies by product"],
    howToUse: "Follow the instructions on each included product.",
    stock: 26,
  },
  {
    name: "Blushiee Pink Beauty Box",
    category: "Gift Sets",
    price: 1099,
    oldPrice: 1399,
    rating: 4.7,
    reviews: 157,
    badge: "GIFT",
    description: "Pretty pink beauty collection for birthdays and celebrations.",
    skinType: ["All"],
    suitableFor: "Gifting",
    benefits: ["Gift-ready", "Beauty essentials", "Pretty packaging"],
    ingredients: ["Varies by product"],
    howToUse: "Use each included product as directed.",
    stock: 19,
  },
  {
    name: "Blushiee Weekend Glow Kit",
    category: "Gift Sets",
    price: 899,
    oldPrice: 1199,
    rating: 4.6,
    reviews: 132,
    badge: "LIMITED",
    description: "Fun beauty essentials for a weekend glow-up routine.",
    skinType: ["All"],
    suitableFor: "Weekend beauty routine",
    benefits: ["Easy routine", "Travel-friendly", "Glow focus"],
    ingredients: ["Varies by product"],
    howToUse: "Use products according to individual instructions.",
    stock: 28,
  },

  {
    name: "Blushiee Gentle Eye Makeup Remover",
    category: "Makeup Remover",
    price: 399,
    oldPrice: 499,
    rating: 4.5,
    reviews: 119,
    badge: "GENTLE",
    description: "Gentle remover designed for everyday eye makeup removal.",
    skinType: ["Normal", "Dry", "Sensitive"],
    suitableFor: "Eye makeup removal",
    benefits: ["Gentle cleansing", "Easy removal", "Comfortable feel"],
    ingredients: ["Micellar Water", "Aloe Vera", "Glycerin"],
    howToUse: "Apply to cotton pad and gently wipe makeup away.",
    stock: 53,
  },
  {
    name: "Blushiee Micellar Cleansing Water",
    category: "Makeup Remover",
    price: 449,
    oldPrice: 599,
    rating: 4.7,
    reviews: 247,
    badge: "BESTSELLER",
    description: "Micellar water for removing makeup and daily impurities.",
    skinType: ["Normal", "Dry", "Combination", "Oily"],
    suitableFor: "Daily makeup removal",
    benefits: ["Cleansing", "Makeup removal", "Fresh feel"],
    ingredients: ["Micelles", "Glycerin", "Aloe Vera"],
    howToUse: "Soak cotton pad and gently wipe face.",
    stock: 59,
  },
];

// ----------------------------------------------------
// UNIQUE LOCAL SVG IMAGE GENERATOR
// ----------------------------------------------------

const colors = [
  ["#F8C8D8", "#E97FA3"],
  ["#FFD7E5", "#F08AAA"],
  ["#E8D5FF", "#A66DCC"],
  ["#D7F3F0", "#62B8B0"],
  ["#FFE0C2", "#E89A62"],
  ["#FFF0B8", "#D9A72C"],
  ["#DCE8FF", "#7095D5"],
  ["#F4D9C8", "#B97A56"],
  ["#FBD0D0", "#D85B6A"],
  ["#E4F1D5", "#83A95B"],
];

const makeSvg = (product, index) => {
  const [bg, accent] = colors[index % colors.length];

  const safeName = product.name
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  const shortName =
    product.name.length > 25
      ? product.name.substring(0, 25) + "..."
      : product.name;

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="700" height="850" viewBox="0 0 700 850">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <linearGradient id="product" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accent}"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <filter id="shadow">
      <feDropShadow dx="0" dy="18" stdDeviation="18" flood-opacity=".18"/>
    </filter>
  </defs>

  <rect width="700" height="850" fill="url(#bg)"/>

  <circle cx="100" cy="110" r="55" fill="#ffffff" opacity=".55"/>
  <circle cx="610" cy="190" r="85" fill="#ffffff" opacity=".45"/>
  <circle cx="570" cy="730" r="110" fill="${accent}" opacity=".10"/>

  <g filter="url(#shadow)">
    ${
      index % 5 === 0
        ? `
      <rect x="230" y="210" width="240" height="330" rx="35" fill="url(#product)"/>
      <rect x="265" y="160" width="170" height="65" rx="18" fill="#eeeeee"/>
      `
        : index % 5 === 1
        ? `
      <rect x="265" y="185" width="170" height="360" rx="28" fill="url(#product)"/>
      <rect x="290" y="145" width="120" height="55" rx="12" fill="#dddddd"/>
      `
        : index % 5 === 2
        ? `
      <ellipse cx="350" cy="375" rx="155" ry="190" fill="url(#product)"/>
      <ellipse cx="350" cy="190" rx="110" ry="32" fill="#eeeeee"/>
      `
        : index % 5 === 3
        ? `
      <rect x="215" y="250" width="270" height="250" rx="28" fill="url(#product)"/>
      <rect x="250" y="190" width="200" height="75" rx="18" fill="#dddddd"/>
      `
        : `
      <rect x="280" y="180" width="140" height="390" rx="60" fill="url(#product)"/>
      <rect x="305" y="120" width="90" height="80" rx="12" fill="#dddddd"/>
      `
    }

    <rect x="250" y="330" width="200" height="90" rx="10" fill="#ffffff" opacity=".9"/>

    <text
      x="350"
      y="365"
      text-anchor="middle"
      font-family="Arial, sans-serif"
      font-size="25"
      font-weight="bold"
      fill="#333333"
    >
      BLUSHIEE
    </text>

    <text
      x="350"
      y="395"
      text-anchor="middle"
      font-family="Arial, sans-serif"
      font-size="13"
      fill="#555555"
    >
      BEAUTY
    </text>
  </g>

  <text
    x="350"
    y="660"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="25"
    font-weight="bold"
    fill="#333333"
  >
    ${safeName}
  </text>

  <text
    x="350"
    y="705"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="17"
    fill="#777777"
  >
    BEAUTY • SKINCARE • SELF CARE
  </text>

  <text
    x="350"
    y="780"
    text-anchor="middle"
    font-family="Arial, sans-serif"
    font-size="14"
    fill="${accent}"
  >
    BLUSHIEE ✦
  </text>
</svg>
`;
};

// ----------------------------------------------------
// CREATE IMAGE FOLDER
// ----------------------------------------------------

const clientProductsDir = path.join(
  __dirname,
  "..",
  "client",
  "public",
  "products"
);

if (!fs.existsSync(clientProductsDir)) {
  fs.mkdirSync(clientProductsDir, { recursive: true });
}

// ----------------------------------------------------
// CREATE 60 UNIQUE IMAGES
// ----------------------------------------------------

products.forEach((product, index) => {
  const imageNumber = String(index + 1).padStart(2, "0");

  const fileName = `product-${imageNumber}.svg`;

  const filePath = path.join(clientProductsDir, fileName);

  fs.writeFileSync(filePath, makeSvg(product, index), "utf8");

  product.image = `/products/${fileName}`;
});

// ----------------------------------------------------
// CONNECT + SEED DATABASE
// ----------------------------------------------------

const seedDatabase = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in server/.env");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected.");

    await Product.deleteMany({});

    console.log("Old products deleted.");

    const insertedProducts = await Product.insertMany(products);

    console.log(
      `✅ ${insertedProducts.length} products inserted successfully.`
    );

    console.log("✅ 60 unique local product images created.");

    await mongoose.connection.close();

    console.log("MongoDB connection closed.");
    console.log("🎀 Blushiee product seeding completed!");
  } catch (error) {
    console.error("❌ Seed error:", error.message);

    try {
      await mongoose.connection.close();
    } catch {}

    process.exit(1);
  }
};

seedDatabase();