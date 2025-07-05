# Thuba Tlala - Image Implementation Guide

## Real Image Requirements

To replace placeholder images with actual photos, you'll need to source and add the following images to your project:

### 📁 Directory Structure
\`\`\`
public/
├── images/
│   ├── farmers/
│   │   ├── african-woman-farmer-vegetables.jpg
│   │   ├── african-man-harvesting-crops.jpg
│   │   ├── african-youth-agriculture.jpg
│   │   ├── african-cooperative-meeting.jpg
│   │   ├── african-farmers-working-fields.jpg
│   │   ├── african-farmer-fresh-produce.jpg
│   │   └── african-butcher-fresh-meat.jpg
│   ├── products/
│   │   ├── fresh-spinach-leaves.jpg
│   │   ├── ripe-red-tomatoes.jpg
│   │   ├── fresh-orange-carrots.jpg
│   │   ├── green-cabbage-head.jpg
│   │   ├── premium-beef-steak.jpg
│   │   ├── fresh-chicken-breast.jpg
│   │   ├── lamb-chops-cuts.jpg
│   │   ├── pork-ribs-fresh.jpg
│   │   ├── red-green-apples.jpg
│   │   ├── ripe-yellow-bananas.jpg
│   │   ├── fresh-oranges-citrus.jpg
│   │   ├── purple-green-grapes.jpg
│   │   ├── fresh-milk-bottles.jpg
│   │   ├── farm-fresh-eggs.jpg
│   │   ├── local-cheese-varieties.jpg
│   │   ├── fresh-yogurt-containers.jpg
│   │   ├── mixed-vegetable-box.jpg
│   │   ├── seasonal-fruit-mix.jpg
│   │   ├── fresh-beef-cuts-display.jpg
│   │   ├── free-range-chicken.jpg
│   │   ├── premium-meat-selection.jpg
│   │   ├── vegetable-assortment-display.jpg
│   │   ├── fresh-fruit-display.jpg
│   │   └── dairy-products-display.jpg
│   ├── hero/
│   │   ├── fresh-produce-display.jpg
│   │   ├── farm-to-table-concept.jpg
│   │   └── stockvel-community-gathering.jpg
│   └── community/
│       └── african-stockvel-meeting.jpg
\`\`\`

### 📸 Image Sourcing Recommendations

#### For African Farmers:
- **Unsplash**: Search "African farmer", "South African agriculture", "African woman farming"
- **Pexels**: Look for "African agriculture", "farming in Africa", "local farmers"
- **Getty Images**: Professional photos of African agricultural workers
- **Local Photography**: Contact South African agricultural organizations for authentic photos

#### For Fresh Produce:
- **Food Photography Sites**: Unsplash, Pexels food categories
- **Local Markets**: Take photos at South African farmers markets
- **Supplier Photos**: Request product photos from actual Thuba Tlala suppliers
- **Stock Photography**: High-quality food photography from Shutterstock

### 🔧 Implementation Steps

1. **Create Directory Structure**:
   \`\`\`bash
   mkdir -p public/images/{farmers,products,hero,community}
   \`\`\`

2. **Download and Optimize Images**:
   - Resize images to appropriate dimensions (300x200 for cards, 500x400 for hero)
   - Optimize for web (use WebP format when possible)
   - Maintain aspect ratios for consistent layout

3. **Update Image Paths**:
   - Replace placeholder URLs in `lib/image-sources.ts`
   - Update all image references throughout the application
   - Test all image loads and fallbacks

4. **SEO Optimization**:
   - Add descriptive alt text for all images
   - Use appropriate file names (kebab-case)
   - Implement lazy loading for performance

### 📱 Mobile Optimization

The current implementation includes:
- Responsive image sizing
- Optimized loading with Next.js Image component
- Proper aspect ratios maintained across devices
- Touch-friendly image gallery with lightbox functionality

### 🎨 Image Gallery Features

- **Interactive Lightbox**: Click any product image to view full-size
- **Navigation Controls**: Previous/next buttons in lightbox
- **Keyboard Support**: Arrow keys for navigation
- **Mobile Gestures**: Swipe support on touch devices
- **Category Organization**: Images grouped by product type

### 🔄 Fallback System

If real images aren't available, the system falls back to descriptive placeholders that clearly indicate the intended content, making it easy to identify which images need to be replaced.

### 📊 Performance Considerations

- Images are lazy-loaded using Next.js Image component
- Automatic format optimization (WebP when supported)
- Responsive image sizing reduces bandwidth on mobile
- Proper caching headers for faster subsequent loads

This structure provides a complete foundation for implementing real product photography while maintaining excellent user experience and performance.
