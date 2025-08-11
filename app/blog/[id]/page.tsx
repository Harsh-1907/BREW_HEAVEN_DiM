import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BlogPostClient from './BlogPostClient';

interface PageProps {
  params: { id: string };
}

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

export default function BlogPost({ params }: PageProps) {
  const { id } = params;

  const blogPosts: Record<string, any> = {
    '1': {
      id: 1,
      title: "The Art of Pour-Over: Mastering Manual Brewing",
      content: `<p>Pour-over coffee represents the pinnacle of manual brewing craftsmanship...</p>`,
      image: "https://readdy.ai/api/search-image?query=Step%20by%20step%20pour%20over%20coffee%20brewing...",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Brewing Tips",
      author: "Alex Rodriguez"
    },
    '2': {
      id: 2,
      title: "From Farm to Cup: Our Ethiopian Coffee Journey",
      content: `<p>Our recent expedition to the highlands of Ethiopia...</p>`,
      image: "https://readdy.ai/api/search-image?query=Ethiopian%20coffee%20farmers...",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Origin Stories",
      author: "Maria Santos"
    },
    '3': {
      id: 3,
      title: "Latte Art Fundamentals: Creating Beautiful Designs",
      content: `<p>Latte art transforms a simple cup of coffee...</p>`,
      image: "https://readdy.ai/api/search-image?query=Barista%20hands%20creating%20intricate...",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Tutorials",
      author: "David Kim"
    },
    '4': {
      id: 4,
      title: "Sustainable Coffee: Our Environmental Commitment",
      content: `<p>At Brew Haven, sustainability isn't just a buzzword...</p>`,
      image: "https://readdy.ai/api/search-image?query=Sustainable%20coffee%20shop...",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Sustainability",
      author: "Maria Santos"
    },
    '5': {
      id: 5,
      title: "Cold Brew vs. Iced Coffee: What's the Difference?",
      content: `<p>Many coffee lovers use the terms "cold brew" and "iced coffee" interchangeably...</p>`,
      image: "https://readdy.ai/api/search-image?query=Side%20by%20side%20comparison...",
      date: "February 22, 2024",
      readTime: "4 min read",
      category: "Coffee Science",
      author: "Alex Rodriguez"
    },
    '6': {
      id: 6,
      title: "Community Coffee Cupping: Tasting Notes Workshop",
      content: `<p>Our monthly coffee cupping sessions have become a beloved community tradition...</p>`,
      image: "https://readdy.ai/api/search-image?query=Professional%20coffee%20cupping...",
      date: "February 18, 2024",
      readTime: "3 min read",
      category: "Events",
      author: "David Kim"
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="bg-amber-600 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-all duration-300"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return <BlogPostClient post={post} />;
}
