import type { Props as MetaProps } from 'components/Meta.astro';
import type { ISbStoryData } from '@storyblok/astro';

interface Seo {
    seo: MetaProps;
}

export function toMeta(story: ISbStoryData): Seo {
    const transformedTitle = story.content.title?.toUpperCase() || 'Please add SEO content';

    const seo: Seo = {
        seo: {
            title: transformedTitle,
            description: story.content.description,
        }
    };

    return seo;
}
