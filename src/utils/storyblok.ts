import { useStoryblokApi } from '@storyblok/astro';
import type { ISbStory, ISbStories, ISbStoriesParams } from '@storyblok/astro';
const storyblokApi = useStoryblokApi();

import { locales } from './locales';
const version = import.meta.env.DEV ? 'draft' : 'published';

export async function get(slug: string, params?: ISbStoriesParams): Promise<ISbStory> {
  const data = await storyblokApi.get(slug, {
    version,
    ...params
  });
  return data;
}

export async function getStory(slug: string, params?: ISbStoriesParams): Promise<ISbStory> {
  const data = await storyblokApi.getStory(slug, {
    version,
    ...params
  });
  return data;
}

export async function getLocalesStory(slug: string, params?: ISbStoriesParams, languages?: string[],): Promise<any[]> {
  const allStories = [];
  for (const lang of languages || locales) {
    const { data }: ISbStory = await storyblokApi.getStory( slug, {
      version,
      fallback_lang: 'default',
      language: lang,
      ...params
    });

    allStories.push(data.story);
  }
  return allStories;
}

export async function getStories(params: ISbStoriesParams): Promise<ISbStories> {
  const data = await storyblokApi.getStories({
    version,
    ...params
  });
  return data;
}

export async function getLocalesStories( params: ISbStoriesParams, languages?: string[]): Promise<any[]> {
  const allStories = [];
  for (const lang of languages || locales) {
    const { data }: ISbStories = await storyblokApi.getStories({
      version,
      fallback_lang: 'default',
      language: lang,
      ...params
    });

    const stories = Object.values(data.stories).map(story => ({
      ...story,
      lang
    }));

    allStories.push(...stories);
  }
  return allStories;
}