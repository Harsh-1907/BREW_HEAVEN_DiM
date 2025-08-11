
import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPostClient from './BlogPostClient';

export async function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ];
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const blogPosts = {
    '1': {
      id: 1,
      title: "The Art of Pour-Over: Mastering Manual Brewing",
      content: `
        <p>Pour-over coffee represents the pinnacle of manual brewing craftsmanship. This method allows complete control over every variable in the brewing process, from water temperature to pour technique, resulting in a cup that truly showcases the unique characteristics of your chosen beans.</p>
        
        <h2>Understanding the Basics</h2>
        <p>The pour-over method involves slowly pouring hot water over coffee grounds in a circular motion. The key lies in the controlled extraction that highlights the coffee's natural flavors while avoiding over-extraction that can lead to bitterness.</p>
        
        <h2>Essential Equipment</h2>
        <ul>
          <li>V60 dripper or similar pour-over device</li>
          <li>Gooseneck kettle for precise pouring</li>
          <li>Digital scale for accuracy</li>
          <li>Quality paper filters</li>
          <li>Freshly ground coffee beans</li>
        </ul>
        
        <h2>The Perfect Technique</h2>
        <p>Start with a 1:16 coffee-to-water ratio. Heat your water to 195-205°F. Begin with a bloom pour, using twice the weight of water as coffee. Wait 30 seconds, then continue with slow, circular pours.</p>
        
        <p>The entire brewing process should take 3-4 minutes. Practice makes perfect, and soon you'll be creating exceptional cups that rival any coffee shop.</p>
      `,
      image: "https://readdy.ai/api/search-image?query=Step%20by%20step%20pour%20over%20coffee%20brewing%20process%2C%20V60%20dripper%20with%20coffee%20grounds%2C%20gooseneck%20kettle%20pouring%20in%20circular%20motion%2C%20timer%20showing%20brewing%20time%2C%20professional%20coffee%20setup%20with%20scale&width=800&height=400&seq=pourover-detailed-process&orientation=landscape",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Brewing Tips",
      author: "Alex Rodriguez"
    },
    '2': {
      id: 2,
      title: "From Farm to Cup: Our Ethiopian Coffee Journey",
      content: `
        <p>Our recent expedition to the highlands of Ethiopia was nothing short of transformative. Walking through the birthplace of coffee, we witnessed firsthand the dedication and passion that goes into every single bean that eventually makes its way to your cup at Brew Haven.</p>
        
        <h2>The Birthplace of Coffee</h2>
        <p>Ethiopia's coffee culture dates back over 1,000 years. The high-altitude regions provide ideal growing conditions, with rich volcanic soil and perfect climate conditions that create beans with incredible complexity and floral notes.</p>
        
        <h2>Meeting the Farmers</h2>
        <p>We spent time with third-generation coffee farmers who shared their traditional cultivation methods. Their knowledge, passed down through generations, ensures that each harvest maintains the highest quality standards.</p>
        
        <h2>Sustainable Practices</h2>
        <p>What impressed us most was the commitment to environmental stewardship. These farmers use shade-growing techniques that preserve biodiversity while producing exceptional coffee. Their methods align perfectly with our values at Brew Haven.</p>
        
        <p>The result of this partnership is our new Ethiopian single-origin offering, now available in our shop. Every sip tells the story of these incredible farmers and their dedication to their craft.</p>
      `,
      image: "https://readdy.ai/api/search-image?query=Ethiopian%20coffee%20farmers%20working%20in%20high%20altitude%20plantation%2C%20traditional%20coffee%20processing%20methods%2C%20mountainous%20landscape%20with%20coffee%20trees%2C%20cultural%20heritage%20and%20coffee%20cultivation%20traditions&width=800&height=400&seq=ethiopian-coffee-story&orientation=landscape",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Origin Stories",
      author: "Maria Santos"
    },
    '3': {
      id: 3,
      title: "Latte Art Fundamentals: Creating Beautiful Designs",
      content: `
        <p>Latte art transforms a simple cup of coffee into a work of art. While it may look effortless when our baristas create beautiful designs, mastering latte art requires understanding milk science, practice, and patience.</p>
        
        <h2>The Science of Milk</h2>
        <p>Perfect latte art starts with properly steamed milk. The goal is to create microfoam – tiny, velvety bubbles that integrate seamlessly with the milk, creating a paint-like consistency perfect for pouring designs.</p>
        
        <h2>Essential Techniques</h2>
        <p>Temperature control is crucial. Steam milk to 140-150°F for optimal texture. The steaming wand should create a whirlpool motion that incorporates air evenly throughout the milk.</p>
        
        <h2>Basic Patterns</h2>
        <ul>
          <li><strong>Heart:</strong> Start with a steady pour from height, then bring the pitcher close to create the base</li>
          <li><strong>Rosetta:</strong> Multiple controlled pours with wrist movements create the leaf pattern</li>
          <li><strong>Tulip:</strong> Sequential pours building layers from bottom to top</li>
        </ul>
        
        <p>Remember, latte art is about practice and muscle memory. Start with basic shapes and gradually work toward more complex designs. Most importantly, have fun with the process!</p>
      `,
      image: "https://readdy.ai/api/search-image?query=Barista%20hands%20creating%20intricate%20latte%20art%20design%2C%20milk%20being%20poured%20into%20espresso%20creating%20rosetta%20pattern%2C%20detailed%20foam%20art%20formation%2C%20professional%20coffee%20artistry%20demonstration&width=800&height=400&seq=latte-art-creation&orientation=landscape",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Tutorials",
      author: "David Kim"
    },
    '4': {
      id: 4,
      title: "Sustainable Coffee: Our Environmental Commitment",
      content: `
        <p>At Brew Haven, sustainability isn't just a buzzword – it's fundamental to everything we do. From sourcing practices to waste reduction, we're committed to minimizing our environmental impact while supporting coffee communities worldwide.</p>
        
        <h2>Ethical Sourcing</h2>
        <p>We work exclusively with farms that practice sustainable agriculture. This means supporting shade-grown coffee that preserves forest ecosystems, using organic farming methods, and ensuring fair wages for farmers.</p>
        
        <h2>Waste Reduction Initiatives</h2>
        <ul>
          <li>Compostable cups and straws made from plant-based materials</li>
          <li>Coffee ground recycling program with local gardens</li>
          <li>Reusable cup discount program for customers</li>
          <li>Minimal packaging on retail products</li>
        </ul>
        
        <h2>Energy Efficiency</h2>
        <p>Our roasting facility uses energy-efficient equipment and solar panels to reduce our carbon footprint. We've reduced energy consumption by 30% over the past year through equipment upgrades and operational changes.</p>
        
        <h2>Community Impact</h2>
        <p>Sustainability extends beyond environmental concerns. We support coffee farming communities through direct trade relationships, educational programs, and infrastructure development projects.</p>
        
        <p>Every cup you enjoy at Brew Haven represents our commitment to a more sustainable future for coffee and the planet.</p>
      `,
      image: "https://readdy.ai/api/search-image?query=Sustainable%20coffee%20shop%20with%20solar%20panels%2C%20eco%20friendly%20packaging%2C%20reusable%20cups%2C%20compost%20bins%2C%20green%20plants%2C%20environmental%20responsibility%20practices%20in%20modern%20coffee%20shop&width=800&height=400&seq=sustainable-practices&orientation=landscape",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Sustainability",
      author: "Maria Santos"
    },
    '5': {
      id: 5,
      title: "Cold Brew vs. Iced Coffee: What's the Difference?",
      content: `
        <p>Many coffee lovers use the terms "cold brew" and "iced coffee" interchangeably, but these are distinctly different beverages with unique preparation methods and flavor profiles. Understanding the differences can help you choose the perfect cold coffee for your taste preferences.</p>
        
        <h2>The Brewing Process</h2>
        <p><strong>Iced Coffee:</strong> Regular hot coffee that's brewed strong and then cooled down, typically by pouring over ice. The brewing process is fast, using hot water extraction.</p>
        
        <p><strong>Cold Brew:</strong> Coffee grounds steeped in cold water for 12-24 hours. This slow extraction method creates a completely different flavor profile.</p>
        
        <h2>Flavor Differences</h2>
        <ul>
          <li><strong>Iced Coffee:</strong> Brighter acidity, more pronounced coffee flavors, can become bitter when diluted</li>
          <li><strong>Cold Brew:</strong> Smoother, less acidic, naturally sweeter, more concentrated</li>
        </ul>
        
        <h2>Caffeine Content</h2>
        <p>Cold brew typically contains more caffeine due to the longer steeping time and higher coffee-to-water ratio used in brewing. However, it's often diluted before serving, which can affect the final caffeine content.</p>
        
        <h2>Which Should You Choose?</h2>
        <p>If you prefer bright, acidic flavors and want something quick, iced coffee is your choice. If you enjoy smoother, less acidic coffee with natural sweetness, cold brew is perfect for you.</p>
        
        <p>Visit Brew Haven to try both and discover your preference!</p>
      `,
      image: "https://readdy.ai/api/search-image?query=Side%20by%20side%20comparison%20of%20cold%20brew%20and%20iced%20coffee%20in%20tall%20glasses%2C%20different%20brewing%20equipment%2C%20ice%20cubes%2C%20coffee%20beans%2C%20summer%20beverages%20presentation%20with%20brewing%20equipment&width=800&height=400&seq=cold-brew-comparison&orientation=landscape",
      date: "February 22, 2024",
      readTime: "4 min read",
      category: "Coffee Science",
      author: "Alex Rodriguez"
    },
    '6': {
      id: 6,
      title: "Community Coffee Cupping: Tasting Notes Workshop",
      content: `
        <p>Our monthly coffee cupping sessions have become a beloved community tradition at Brew Haven. These educational workshops bring coffee enthusiasts together to explore flavor profiles, develop palates, and share the joy of coffee discovery.</p>
        
        <h2>What is Coffee Cupping?</h2>
        <p>Coffee cupping is the industry-standard method for evaluating coffee quality and flavor characteristics. It involves a systematic tasting process that allows you to experience the full range of flavors and aromas in different coffees.</p>
        
        <h2>The Cupping Process</h2>
        <ol>
          <li><strong>Fragrance:</strong> Smell the dry grounds</li>
          <li><strong>Aroma:</strong> Inhale after adding hot water</li>
          <li><strong>Breaking the crust:</strong> Stir and smell the released aromas</li>
          <li><strong>Tasting:</strong> Slurp the coffee to aerate and taste</li>
          <li><strong>Evaluation:</strong> Assess acidity, body, flavor, and aftertaste</li>
        </ol>
        
        <h2>Developing Your Palate</h2>
        <p>Regular cupping helps you identify subtle differences between origins, processing methods, and roast levels. Common flavor notes include fruity, floral, nutty, chocolatey, and spicy characteristics.</p>
        
        <h2>Join Our Next Session</h2>
        <p>Our cupping workshops are held the first Saturday of each month at 2 PM. No experience necessary – just bring your curiosity and enthusiasm for great coffee. We provide all materials and guide you through the entire process.</p>
        
        <p>Space is limited to ensure personalized attention. Reserve your spot by calling or visiting Brew Haven!</p>
      `,
      image: "https://readdy.ai/api/search-image?query=Professional%20coffee%20cupping%20session%20with%20multiple%20cups%20arranged%20in%20rows%2C%20people%20tasting%20coffee%20with%20spoons%2C%20cupping%20forms%20and%20pencils%2C%20educational%20workshop%20atmosphere%2C%20community%20learning&width=800&height=400&seq=cupping-workshop&orientation=landscape",
      date: "February 18, 2024",
      readTime: "3 min read",
      category: "Events",
      author: "David Kim"
    }
  };

  const post = blogPosts[params.id];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog" className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-all duration-300">
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return <BlogPostClient post={post} />;
}
