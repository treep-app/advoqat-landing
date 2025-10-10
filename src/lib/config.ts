// API Configuration
export const API_CONFIG = {
  // Backend API base URL
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001',
  
  // API endpoints
  ENDPOINTS: {
    CONTACT_SUBMIT: '/api/contact/submit',
    HEALTH: '/api/health',
  }
} as const;

// Helper function to get full API URL
export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
