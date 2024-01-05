const MAX_REFRESH_TOKEN_LIFETIME = 1000 * 60 * 60 * 24 * 30; // 30 days
const MAX_ACCESS_TOKEN_LIFETIME = 1000 * 60 * 60 * 10; // 10 minutes
const ACCESS_TOKEN_COOKIE_OPTIONS = { maxAge: MAX_ACCESS_TOKEN_LIFETIME, httpOnly: true, sameSite: 'none' }
const REFRESH_TOKEN_COOKIE_OPTIONS = { maxAge: MAX_REFRESH_TOKEN_LIFETIME, httpOnly: true, sameSite: 'none' }

module.exports = { 
  ACCESS_TOKEN_COOKIE_OPTIONS,
  REFRESH_TOKEN_COOKIE_OPTIONS, 
  MAX_ACCESS_TOKEN_LIFETIME,
  MAX_REFRESH_TOKEN_LIFETIME
}