// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${Math.floor(1000 + Math.random() * (10000 - 1000))}`
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.ceil(41000 + Math.random() * (41999 - 41000))
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let classes = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"]
  return classes[Math.floor(0 + Math.random() * (10 - 0))] 
}
