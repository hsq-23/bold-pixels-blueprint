
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';

// Sample blog post data - would typically come from an API or CMS
const blogPosts = [
  {
    id: "post1",
    title: "Building Efficient IoT Systems: Lessons Learned",
    content: `
      <p>After years of designing and implementing IoT solutions across various industries, I've gathered valuable insights on creating efficient, reliable systems. This post shares the most important lessons I've learned along the way.</p>
      
      <h2>1. Start with Clear Requirements</h2>
      
      <p>One of the biggest challenges in IoT projects is scope creep. Without clear requirements, projects can easily expand beyond their initial boundaries, leading to delays, cost overruns, and potentially compromised performance. Before selecting hardware or writing a single line of code, document:</p>
      
      <ul>
        <li>The specific problem you're solving</li>
        <li>Required data collection parameters</li>
        <li>Performance expectations</li>
        <li>Environmental constraints</li>
        <li>Security requirements</li>
        <li>Scalability needs</li>
      </ul>
      
      <h2>2. Prioritize Power Efficiency</h2>
      
      <p>Power consumption is often the limiting factor in IoT deployments, especially for battery-operated devices. Optimizing power usage should be a primary concern from day one. Some strategies that have proven effective include:</p>
      
      <ul>
        <li>Implementing aggressive sleep cycles</li>
        <li>Minimizing transmission frequency based on data importance</li>
        <li>Using efficient communication protocols</li>
        <li>Optimizing sensor sampling rates</li>
        <li>Employing edge processing to reduce data transmission</li>
      </ul>
      
      <p>In a recent agricultural project, we extended battery life from 2 weeks to 6 months simply by redesigning the sleep/wake cycles and implementing more intelligent data transmission logic.</p>
      
      <h2>3. Design for Reliability</h2>
      
      <p>IoT devices often operate in challenging environments with limited maintenance opportunities. Reliability should be built into every aspect of the system:</p>
      
      <ul>
        <li>Implement watchdog timers and auto-recovery mechanisms</li>
        <li>Design with redundancy for critical components</li>
        <li>Create robust error handling with fallback modes</li>
        <li>Test extensively in real-world conditions</li>
        <li>Plan for firmware updates and remote management</li>
      </ul>
      
      <h2>4. Security Cannot Be an Afterthought</h2>
      
      <p>The security vulnerabilities of IoT systems are well-documented and potentially devastating. Security must be integrated from the beginning:</p>
      
      <ul>
        <li>Implement secure boot processes</li>
        <li>Use encryption for data at rest and in transit</li>
        <li>Apply the principle of least privilege</li>
        <li>Plan for regular security updates</li>
        <li>Consider hardware security modules for critical applications</li>
        <li>Implement secure commissioning processes</li>
      </ul>
      
      <h2>5. Consider the Entire System Architecture</h2>
      
      <p>While individual devices are important, the overall system architecture determines the success of an IoT deployment. Think holistically about:</p>
      
      <ul>
        <li>Edge vs. cloud processing trade-offs</li>
        <li>Communication protocols and their limitations</li>
        <li>Data storage and retention policies</li>
        <li>Scalability as the system grows</li>
        <li>Integration with existing systems</li>
        <li>User interfaces and experience</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Building efficient IoT systems requires careful planning, a focus on fundamentals, and attention to the unique constraints of connected devices. By applying these lessons, you can create more reliable, secure, and effective IoT solutions that deliver real value.</p>
      
      <p>Have questions about implementing IoT systems? Feel free to <a href="/contact">contact me</a> to discuss your specific challenges.</p>
    `,
    date: "May 12, 2023",
    author: "John Doe",
    category: "IoT",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["IoT", "Systems Design", "Best Practices"]
  }
  // Additional blog post content would be here...
];

// Sample posts for the "Related Posts" section
const relatedPosts = [
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
    id: "post4",
    title: "The Future of Smart Cities: Technologies and Challenges",
    excerpt: "Exploring the IoT technologies that will power the cities of tomorrow.",
    date: "February 28, 2023",
    category: "IoT",
    imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    colorClass: "bg-pastel-yellow"
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-pastel-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-4">
            <Link to="/blog" className="flex items-center font-bold text-lg hover:underline w-fit">
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Blog
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold font-space-grotesk">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4">
              <div className="flex items-center">
                <span className="font-semibold mr-2">By:</span>
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center">
                <span className="font-semibold mr-2">Date:</span>
                <span>{post.date}</span>
              </div>
              
              <div className="flex items-center">
                <span className="font-semibold mr-2">Category:</span>
                <span className="bg-black text-white px-3 py-1">{post.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Image */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="neo-card p-4 md:p-6 mb-12">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-auto border-2 border-black"
            />
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <article className="neo-card p-6">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>
              </article>
              
              {/* Tags */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 font-space-grotesk">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-block border-2 border-black px-3 py-1"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Author Box */}
              <div className="neo-card p-6 mt-8">
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                  <div className="w-24 h-24 border-2 border-black overflow-hidden flex-shrink-0">
                    <img 
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                      alt="John Doe" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-space-grotesk">About the Author</h3>
                    <p className="mb-3">
                      John Doe is a full-stack developer, IoT engineer, and data scientist with over 8 years of industry experience. He specializes in creating innovative technology solutions for complex problems.
                    </p>
                    <Link to="/about" className="font-bold underline">Read more about John</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              {/* Related Posts */}
              <div className="neo-card p-6">
                <h3 className="text-xl font-bold mb-4 font-space-grotesk">Related Posts</h3>
                
                <div className="space-y-4">
                  {relatedPosts.map(relatedPost => (
                    <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`} className="block">
                      <div className="group">
                        <div className="mb-2 overflow-hidden border-2 border-black">
                          <img 
                            src={relatedPost.imageUrl} 
                            alt={relatedPost.title} 
                            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <h4 className="font-bold group-hover:underline">{relatedPost.title}</h4>
                        <p className="text-sm mt-1">{relatedPost.date} · {relatedPost.category}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link to="/blog" className="neo-button block text-center">
                    View All Posts
                  </Link>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="neo-card p-6 mt-6">
                <h3 className="text-xl font-bold mb-4 font-space-grotesk">Subscribe to my newsletter</h3>
                <p className="mb-4">
                  Get the latest articles, tutorials, and updates delivered straight to your inbox.
                </p>
                
                <form>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="neo-input w-full"
                      required
                    />
                    <button
                      type="submit"
                      className="neo-button bg-black text-white w-full"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
