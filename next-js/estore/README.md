Working with layout
Creating constants: /lib/constants/index.ts.
Check public app name from .env first - if not, default to what's written
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'EStore'
