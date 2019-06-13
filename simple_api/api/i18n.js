const fs = require('fs');
const readline = require('readline');
const path = require('path');

const LOCALE = {
  EN: {
    id: 'en',
    path: path.join(__dirname, '../i18n/i18n.properties')
  },
  RU: {
    id: 'ru',
    path: path.join(__dirname, '../i18n/i18n_ru.properties')
  }
};

class Localei18n {
  constructor() {
    this._locale = LOCALE.EN;
    this._cache = {};
  }

  /**
   * Get default locale
   * @returns {String} locale - current locale
   */
  get locale() {
    return this._locale;
  }

  set locale(locale) {
    switch (locale) {
      case 'EN':
      case 'en': {
        this._locale = LOCALE.EN;
        break;
      }
      case 'RU':
      case 'ru':
      case 'RU_ru': {
        this._locale = LOCALE.RU;
        break;
      }
      default: {
        this._locale = LOCALE.EN;
      }
    }
  }

  get cache() {
    return this._cache;
  }

  get localeData() {
    if (!this.cache[this.locale.id]) {
      this._readLocaleFile(this.locale.path);
    }
    return this.cache[this.locale.id];
  }

  _readLocaleFile(path, force = false) {
    if (this.cache[this.locale.id] && !force) {
      return;
    }

    console.log('Read file', this.locale.path);

    this.cache[this.locale.id] = {};
    const readInterface = readline.createInterface({
      input: fs.createReadStream(path)
      // output: process.stdout,
    });

    readInterface.on('line', line => {
      const [name, value] = line.split('=');
      // prevent some errors
      if (name && value) {
        this.cache[this.locale.id][name.trim()] = value.trim();
      }
    });

    // readInterface.close();
  }
}

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new Localei18n();
    }
  }

  getInstance() {
    return Singleton.instance;
  }
}

module.exports = Singleton;
