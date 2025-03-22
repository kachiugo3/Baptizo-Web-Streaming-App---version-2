export const PasswordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

export const API_STATES = {
  IDLE: "IDLE",
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  REVALIDATING: "REVALIDATING",
  STALE_IF_ERROR: "STALE_IF_ERROR",
};
