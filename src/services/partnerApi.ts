import axios from 'axios';
import { Partner, PartnerCreateDto, PartnerUpdateDto, PartnerCombo, ApiResponse } from '../types/partner.types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://localhost:7000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const partnerApi = {
  // Get all partners
  getAll: async (): Promise<Partner[]> => {
    const response = await apiClient.get<ApiResponse<Partner[]>>('/partners');
    return response.data.data || [];
  },

  // Get partner by ID
  getById: async (id: number): Promise<Partner | null> => {
    try {
      const response = await apiClient.get<ApiResponse<Partner>>(`/partners/${id}`);
      return response.data.data || null;
    } catch (error: any) {
      if (error.response?.status === 404) {
        return null;
      }
      throw error;
    }
  },

  // Create partner
  create: async (partner: PartnerCreateDto): Promise<Partner> => {
    const response = await apiClient.post<ApiResponse<Partner>>('/partners', partner);
    return response.data.data!;
  },

  // Update partner
  update: async (id: number, partner: PartnerUpdateDto): Promise<Partner> => {
    const response = await apiClient.put<ApiResponse<Partner>>(`/partners/${id}`, partner);
    return response.data.data!;
  },

  // Delete partner
  delete: async (id: number): Promise<boolean> => {
    await apiClient.delete(`/partners/${id}`);
    return true;
  },

  // Get partner combo for dropdowns
  getCombo: async (): Promise<PartnerCombo[]> => {
    const response = await apiClient.get<ApiResponse<PartnerCombo[]>>('/partners/combo');
    return response.data.data || [];
  },
};