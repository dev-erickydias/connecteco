'use client';

import PostBlog from "./PostBlog";
import postBlogContain from "../../constants/postBlogContain";
import { motion } from "framer-motion";

export default function PostsBlog() {
  const first = postBlogContain.filter((blog, i) => i <= 2);
  const firstOneColumn = first.filter((blog, i) => i <= 0);
  const firstItemsTwoColumn = first.filter((blog, i) => i > 0);
  const secondItems = postBlogContain.filter((blog, i) => i > 2);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="w-full px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Featured Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Large Featured Post */}
          {firstOneColumn.map((post) => (
            <motion.div key={post.titulo} variants={itemVariants} className="lg:col-span-2">
              <PostBlog
                title={post.titulo}
                src={post.imagem}
                alt={post.titulo}
                content={post.descricao}
                large={post.large}
                link={post.link}
              />
            </motion.div>
          ))}

          {/* Side by Side Posts */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            {firstItemsTwoColumn.map((post) => (
              <div key={post.titulo} className="h-full">
                <PostBlog
                  title={post.titulo}
                  src={post.imagem}
                  alt={post.titulo}
                  content={post.descricao}
                  large={false}
                  link={post.link}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grid Section */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {secondItems.map((post) => (
            <motion.div key={post.titulo} variants={itemVariants}>
              <PostBlog
                title={post.titulo}
                src={post.imagem}
                alt={post.titulo}
                content={post.descricao}
                large={false}
                link={post.link}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
