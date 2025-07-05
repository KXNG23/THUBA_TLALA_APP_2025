// Image source configuration for Thuba Tlala
// Now using dedicated fruit photography

export const imageConfig = {
  // African Farmers and Community
  farmers: {
    womanWithVegetables: "/images/community/grocery-team-community.jpg",
    manHarvesting: "/images/farmers/modern-grocery-worker.jpg",
    youthInAgriculture: "/images/farmers/modern-grocery-worker.jpg",
    cooperativeMeeting: "/images/community/produce-vendors-team.jpg",
    farmersInField: "/images/community/produce-vendors-team.jpg",
    farmerWithProduce: "/images/farmers/modern-grocery-worker.jpg",
    butcherWithMeat: "/images/farmers/modern-grocery-worker.jpg",
    communityGathering: "/images/community/grocery-team-community.jpg",
  },

  // Community Images
  community: {
    groceryTeam: "/images/community/grocery-team-community.jpg",
    modernWorker: "/images/farmers/modern-grocery-worker.jpg",
    produceVendors: "/images/community/produce-vendors-team.jpg",
    stockvelMeeting: "/images/community/produce-vendors-team.jpg",
  },

  // Fresh Vegetables - Using produce-focused images
  vegetables: {
    spinach: "/images/grocery/fresh-produce-display.jpg", // Shows leafy greens
    tomatoes: "/images/grocery/fresh-produce-display.jpg", // Shows fresh tomatoes
    carrots: "/images/grocery/fresh-produce-display.jpg", // Shows root vegetables
    cabbage: "/images/grocery/fresh-produce-display.jpg", // Shows leafy vegetables
    mixedVegetables: "/images/grocery/fresh-produce-display.jpg",
    vegetableAssortment: "/images/grocery/modern-grocery-aisle.jpg", // Shows produce section
    freshTomatoes: "/images/products/plated-food-combinations.jpg", // Shows tomatoes in styled presentation
    organicProduce: "/images/grocery/fresh-produce-display.jpg",
    produceSection: "/images/grocery/produce-meat-section.jpg", // Shows produce area
  },

  // Premium Meat - Using meat-focused images
  meat: {
    beefSteak: "/images/grocery/produce-meat-section.jpg", // Shows fresh meat cuts
    chickenBreast: "/images/grocery/produce-meat-section.jpg", // Shows meat display
    lambChops: "/images/products/plated-food-combinations.jpg", // Shows prepared meat
    porkRibs: "/images/products/plated-food-combinations.jpg", // Shows grilled meat
    beefCuts: "/images/grocery/produce-meat-section.jpg", // Shows raw meat cuts
    freeRangeChicken: "/images/grocery/produce-meat-section.jpg",
    meatSelection: "/images/products/plated-food-combinations.jpg",
    grilledMeats: "/images/products/plated-food-combinations.jpg", // Shows cooked meat presentations
    premiumCuts: "/images/grocery/produce-meat-section.jpg",
    meatDisplay: "/images/grocery/modern-grocery-aisle.jpg", // Shows meat section
  },

  // Fresh Fruits - Using dedicated fruit images
  fruits: {
    apples: "/images/fruits/apples-oranges-clean.jpg", // Shows beautiful apples
    bananas: "/images/fruits/mixed-fruit-variety.jpg", // Shows fruit variety including bananas
    oranges: "/images/fruits/citrus-variety-mix.jpg", // Shows fresh oranges and citrus
    grapes: "/images/fruits/mixed-fruit-variety.jpg", // Shows grapes in variety mix
    seasonalFruits: "/images/fruits/mixed-fruit-variety.jpg", // Shows comprehensive fruit selection
    fruitAssortment: "/images/fruits/mixed-fruit-variety.jpg", // Shows complete fruit variety
    citrusFruits: "/images/fruits/citrus-variety-mix.jpg", // Shows oranges, limes, lemons
    mixedFruits: "/images/fruits/mixed-fruit-variety.jpg", // Shows diverse fruit selection
    fruitDisplay: "/images/fruits/apples-oranges-styled.jpg", // Shows styled fruit presentation
    freshApples: "/images/fruits/apples-oranges-clean.jpg", // Shows clean apple varieties
    freshOranges: "/images/fruits/citrus-variety-mix.jpg", // Shows fresh citrus selection
    fruitVariety: "/images/fruits/apples-oranges-styled.jpg", // Shows styled fruit arrangement
  },

  // Dairy Products - Using dairy-focused images
  dairy: {
    freshMilk: "/images/grocery/modern-grocery-aisle.jpg", // Shows milk bottles
    farmEggs: "/images/grocery/fresh-produce-display.jpg", // Shows dairy section
    cheese: "/images/grocery/modern-grocery-aisle.jpg", // Shows cheese display
    yogurt: "/images/grocery/fresh-produce-display.jpg", // Shows dairy products
    dairyAssortment: "/images/grocery/modern-grocery-aisle.jpg",
    dairySection: "/images/grocery/fresh-produce-display.jpg",
  },

  // Hero Images - Using comprehensive grocery displays
  hero: {
    produceDisplay: "/images/grocery/fresh-produce-display.jpg",
    farmToTable: "/images/products/plated-food-combinations.jpg",
    stockvelCommunity: "/images/community/grocery-team-community.jpg",
    modernGrocery: "/images/grocery/modern-grocery-aisle.jpg",
    productShowcase: "/images/products/plated-food-combinations.jpg",
    groceryAisle: "/images/grocery/produce-meat-section.jpg",
    fruitShowcase: "/images/fruits/mixed-fruit-variety.jpg", // New fruit hero image
  },

  // Grocery Store Environment
  grocery: {
    modernAisle: "/images/grocery/modern-grocery-aisle.jpg",
    produceSection: "/images/grocery/fresh-produce-display.jpg",
    meatSection: "/images/grocery/produce-meat-section.jpg",
    fullDisplay: "/images/grocery/modern-grocery-aisle.jpg",
  },

  // Product Catalog Images
  catalog: {
    individualProducts: "/images/products/individual-products-grid.jpg",
    meatAndFruit: "/images/products/meat-fruit-showcase.jpg",
    completeCatalog: "/images/products/complete-food-catalog.jpg",
    groceryDisplay: "/images/hero/modern-grocery-display.jpg",
    platedCombinations: "/images/products/plated-food-combinations.jpg",
    fruitCatalog: "/images/fruits/mixed-fruit-variety.jpg", // New fruit catalog
  },
}

// Enhanced function to get image URLs with category-specific fallbacks
export const getImageUrl = (category: keyof typeof imageConfig, item: string) => {
  const imagePath = (imageConfig[category] as any)?.[item]

  // Return actual image path if it exists, otherwise return descriptive placeholder
  return (
    imagePath ||
    `/placeholder.svg?height=400&width=600&text=${encodeURIComponent(item.replace(/([A-Z])/g, " $1").trim())}`
  )
}

// Helper function to get specific product images by category
export const getProductImage = (productType: string) => {
  const productMap: { [key: string]: string } = {
    // Vegetables & Produce
    vegetables: "/images/grocery/fresh-produce-display.jpg",
    tomatoes: "/images/grocery/fresh-produce-display.jpg",
    produce: "/images/grocery/fresh-produce-display.jpg",
    leafyGreens: "/images/grocery/fresh-produce-display.jpg",

    // Fruits - Now using dedicated fruit images
    fruits: "/images/fruits/mixed-fruit-variety.jpg",
    apples: "/images/fruits/apples-oranges-clean.jpg",
    oranges: "/images/fruits/citrus-variety-mix.jpg",
    citrus: "/images/fruits/citrus-variety-mix.jpg",
    fruitMix: "/images/fruits/mixed-fruit-variety.jpg",
    seasonalFruits: "/images/fruits/apples-oranges-styled.jpg",

    // Meat Products
    meat: "/images/grocery/produce-meat-section.jpg",
    steaks: "/images/grocery/produce-meat-section.jpg",
    ribs: "/images/products/plated-food-combinations.jpg",
    grilledMeat: "/images/products/plated-food-combinations.jpg",
    rawMeat: "/images/grocery/produce-meat-section.jpg",

    // Dairy
    dairy: "/images/grocery/modern-grocery-aisle.jpg",
    milk: "/images/grocery/modern-grocery-aisle.jpg",
    cheese: "/images/grocery/modern-grocery-aisle.jpg",

    // General grocery
    groceryDisplay: "/images/grocery/modern-grocery-aisle.jpg",
    mixedProducts: "/images/grocery/fresh-produce-display.jpg",
    storeAisle: "/images/grocery/produce-meat-section.jpg",
  }

  return productMap[productType] || "/images/grocery/modern-grocery-aisle.jpg"
}

// Category-specific image getters
export const getVegetableImage = () => "/images/grocery/fresh-produce-display.jpg"
export const getFruitImage = () => "/images/fruits/mixed-fruit-variety.jpg"
export const getMeatImage = () => "/images/grocery/produce-meat-section.jpg"
export const getDairyImage = () => "/images/grocery/modern-grocery-aisle.jpg"
export const getGroceryStoreImage = () => "/images/grocery/modern-grocery-aisle.jpg"

// Specific fruit image getters for variety
export const getAppleImage = () => "/images/fruits/apples-oranges-clean.jpg"
export const getOrangeImage = () => "/images/fruits/citrus-variety-mix.jpg"
export const getMixedFruitImage = () => "/images/fruits/mixed-fruit-variety.jpg"
export const getStyledFruitImage = () => "/images/fruits/apples-oranges-styled.jpg"
