import astroConfig from '../../astro.config.mjs';
import type { AstroUserConfig } from 'astro';

function getLocales(config?: AstroUserConfig): string[] {
    if (!config || !config.i18n) {
        return ['default'];
    }

    const { defaultLocale, locales } = config.i18n;

    return locales.map(locale => {
        if (typeof locale === 'string') {
            return locale === defaultLocale ? 'default' : locale;
        } else if (locale.codes.includes(defaultLocale)) {
            return 'default';
        } else {
            return locale.codes[0]; // 假设取第一个 code，或者根据需要调整
        }
    });
}

export const locales = getLocales(astroConfig);
