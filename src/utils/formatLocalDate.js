// /**
//  * Génère le format de date local à partir d'une date au format ISO.
//  * @param {string} isoDate - La date au format ISO (ex: "2023-09-25").
//  * @returns {string} - La date formatée au format local.
//  */
// export const formatLocalDate = (isoDate) => {
//   const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
//   const userLocale = navigator.language;

//   return new Date(isoDate)
//     .toLocaleDateString(userLocale, options)
//     .replace(/\//g, "-"); // Remplace les slashs par des tirets pour les autres locales, y compris en US
// };


/**
 * Génère le format de date local à partir d'une date au format ISO.
 * @param {string} isoDate - La date au format ISO (ex: "2023-09-25").
 * @returns {string} - La date formatée au format local.
 */
export const formatLocalDate = (isoDate) => {
  const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
  const locale = navigator.language;

  switch (locale) {
    case "fr-FR": // Locale française
      return new Date(isoDate)
        .toLocaleDateString(locale, options)
        .replace(/-/g, "/"); // Remplace les tirets par des slashs pour la locale française
    default:
      return new Date(isoDate)
        .toLocaleDateString(locale, options)
        .replace(/\//g, "-"); // Remplace les slashs par des tirets pour les autres locales, y compris en US
  }
};


