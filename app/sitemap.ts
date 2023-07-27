import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return allPosts.map((post) => ({url: `https://ericventor.com${post.slug}`, lastModified: post.date}));
}