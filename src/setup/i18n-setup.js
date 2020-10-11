import Vue from 'vue'
import VueI18n from 'vue-i18n'

const requireLang = require.context(
  '@/locales',
  true,
  /\.json$/
);

const messages = {};

for (const file of requireLang.keys()) {
  const path = file.replace(/(\.\/|\.json$)/g, '').split('/');

  path.reduce((o, s, i) => {
    if (o[s]) {
      return o[s];
    }

    o[s] = i + 1 === path.length ? requireLang(file) : {}

    return o[s];
  }, messages);
}

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'ko',
  fallbackLocale: 'ko',
  messages,
  silentTranslationWarn: true
});

export default i18n;