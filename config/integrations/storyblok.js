import { env } from '..';
import storyblokIntegration from '@storyblok/astro';

export const storyblok = storyblokIntegration({
  accessToken: env.STORYBLOK_TOKEN,
  components: {
    // content-type
    page: 'layouts/ContentType/Page',
    // default
    feature: 'storyblok/Feature',
    grid: 'storyblok/Grid',
    teaser: 'storyblok/Teaser',
    //
    blogPost: 'storyblok/BlogPost',
    blogPostList: 'storyblok/BlogPostList',
  },
  apiOptions: {
    /**
     * eu（默认）：适用于在欧盟创建的空间
     * us：适用于在美国创建的空间
     * ap：适用于在澳大利亚创建的空间
     * ca：适用于在加拿大创建的空间
     * cn：针对在中国创建的空间 (容易 `401` 貌似不稳定)
     */
    region: 'eu',
  },
})