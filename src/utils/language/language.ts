/**
 * Detects and returns the default language of the user's browser.
 *
 * The function accesses the `navigator.language` property to obtain
 * the preferred language code of the user. This code usually follows
 * the ISO 639-1 format, and can be used to adjust the application's
 * language as needed.
 *
 * @return {string} The default browser language code (e.g., 'en-US', 'pt-BR').
 */
export const detectUserLanguage: () => string = () => {
  const userLanguage = navigator.language;

  return userLanguage;
};
