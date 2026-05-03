// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  let date = now ? new Date(now) : new Date()
  date.setDate(date.getDate() + days)
  return date 
}
  

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  return appointmentDate.toISOString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let date = new Date(timestamp)
  console.log(date)
  return {year: date.getFullYear(), month: date.getMonth(), date: date.getDate(), hour: date.getHours(), minute: date.getMinutes()}
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  let appointment = getAppointmentDetails(timestamp)
  for(let key in options){
    appointment[key] = options[key]
  }
  let newAppointment = new Date(appointment["year"], appointment["month"], appointment["date"], appointment["hour"], appointment["minute"])
  newAppointment = getAppointmentDetails(newAppointment)
  return newAppointment
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  let timeA = new Date(timestampA)
  let timeB = new Date(timestampB)
  let result = (timeA > timeB) ? timeA.getTime() - timeB.getTime() : timeB.getTime() - timeA.getTime()
  return Math.round(((timeA > timeB) ? timeA.getTime() - timeB.getTime() : timeB.getTime() - timeA.getTime())/1000)
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  let appointment = new Date(appointmentTimestamp)
  let current = new Date(currentTimestamp)
  return appointment > current
}
