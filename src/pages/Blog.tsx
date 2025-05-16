import React, { useState } from 'react';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import { motion } from 'framer-motion';

// Sample blog posts data
const blogPosts = [
  {
    id: "post1",
    title: "Building Efficient IoT Systems: Lessons Learned",
    excerpt: "Key insights from years of designing and implementing IoT solutions for various industries.",
    date: "May 12, 2023",
    category: "IoT",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    colorClass: "bg-pastel-blue"
  },
  {
    id: "post2",
    title: "Data Visualization Techniques for Complex Datasets",
    excerpt: "How to transform complex data into meaningful visualizations that drive insights.",
    date: "April 3, 2023",
    category: "Data Science",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    colorClass: "bg-pastel-green"
  },
  {
    id: "post3",
    title: "React Performance Optimization Strategies",
    excerpt: "Practical tips for improving the performance of your React applications.",
    date: "March 15, 2023",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    colorClass: "bg-pastel-pink"
  },
  {
    id: "post4",
    title: "The Future of Smart Cities: Technologies and Challenges",
    excerpt: "Exploring the IoT technologies that will power the cities of tomorrow.",
    date: "February 28, 2023",
    category: "IoT",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    colorClass: "bg-pastel-yellow"
  },
  {
    id: "post5",
    title: "Machine Learning for Beginners: Where to Start",
    excerpt: "A guide to help newcomers begin their journey into machine learning and AI.",
    date: "January 20, 2023",
    category: "Data Science",
    imageUrl: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    colorClass: "bg-pastel-blue"
  },
  {
    id: "post6",
    title: "Creating a UI Design System from Scratch",
    excerpt: "Steps to build a comprehensive design system for consistent user interfaces.",
    date: "December 12, 2022",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
    colorClass: "bg-pastel-green"
  }
];

// Categories for filtering
const categories = ["All", "Web Development", "IoT", "Data Science"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      {/* Hero Section with animation */}
      <section className="py-20 bg-neon-blue text-white">
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.h1>
          <motion.p 
            className="text-xl max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Thoughts, insights, and tutorials on web development, IoT, and data science.
          </motion.p>
        </div>
      </section>
      
      {/* Filter and Search */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 border-2 border-black ${
                    activeCategory === category ? 'bg-black text-white' : 'bg-white'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="neo-input w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogCard 
                  key={post.id} 
                  {...post} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-4 font-space-grotesk">No articles found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-pastel-pink">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="neo-card p-8">
            <h2 className="text-3xl font-bold mb-4 font-space-grotesk text-center">Subscribe to my newsletter</h2>
            <p className="text-center mb-6">
              Get the latest articles, tutorials, and updates delivered straight to your inbox.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="neo-input flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="neo-button bg-black text-white"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-4 text-center">
                I respect your privacy. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
