/**
 * @fileoverview Firebase Configuration.
 */
import "dotenv/config";

// Cloud Function Configuration
const firebaseConfig = {
  // eslint-disable-next-line no-undef
  getAccountQuota: process.env.ACCOUNT_FUNCTION.replace(/"/g, ""), // Remove quotes if present
  // eslint-disable-next-line no-undef
  getEvents: process.env.EVENTS_FUNCTION.replace(/"/g, ""), // Remove quotes if present
  // eslint-disable-next-line no-undef
  getEventOdds: process.env.EVENT_ODDS_FUNCTION.replace(/"/g, ""), // Remove quotes if present
  // eslint-disable-next-line no-undef
  getSports: process.env.SPORTS_FUNCTION.replace(/"/g, ""), // Remove quotes if present
};

// Initialize similarly to Firebase for a consistent "app" interface across applications
export const app = {
  getAccountQuota: firebaseConfig.getAccountQuota,
  getEvents: firebaseConfig.getEvents,
  getEventOdds: firebaseConfig.getEventOdds,
  getSports: firebaseConfig.getSports,
};
