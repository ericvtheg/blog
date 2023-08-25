import { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({url: `https://ericventor.com${post.slug}`, lastModified: post.date}));
  return [
    ...posts,
    {
      url: 'https://ericventor.com',
      lastModified: new Date().toISOString(),
    },
    {
      url: 'https://ericventor.com/about',
      lastModified: new Date().toISOString(),
    }
  ];
}