/**
 * @fileoverview Firebase Configuration.
 */
import "dotenv/config";

// Cloud Function Configuration
const firebaseConfig = {
  // Query Account Quota
  getAccountQuota: process.env.ACCOUNT_FUNCTION.replace(/"/g, ""), // Remove quotes if present
  // Query Events
  getEvents: process.env.EVENTS_FUNCTION.replace(/"/g, ""), // Remove quotes if present
  // Query Event Odds
  getEventOdds: process.env.EVENT_ODDS_FUNCTION.replace(/"/g, ""), // Remove quotes if present
  // Query Sports
  getSports: process.env.SPORTS_FUNCTION.replace(/"/g, ""), // Remove quotes if present
};

// Initialize similarly to Firebase for a consistent "app" interface across applications
export const app = {
  getAccountQuota: firebaseConfig.getAccountQuota,
  getEvents: firebaseConfig.getEvents,
  getEventOdds: firebaseConfig.getEventOdds,
  getSports: firebaseConfig.getSports,
};
