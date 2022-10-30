import { I18nManager } from 'react-native';
import * as RNLocalize from "react-native-localize"
import i18n from "i18n-js"

const en = require( "./en" )
const ar = require( "./ar" )

i18n.fallbacks = true
i18n.translations = { en, ar }

const fallback = { languageTag: "ar", isRTL: true }

const { languageTag } =
  RNLocalize.findBestAvailableLanguage( Object.keys( i18n.translations ) ) || fallback
// i18n.locale = languageTag
