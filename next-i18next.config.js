const i18n = require('./.i18nrc');

/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: i18n.entryLocale,
    locales: [i18n.entryLocale, ...i18n.outputLocales],
  },
};