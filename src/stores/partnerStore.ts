import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Partner, PartnerCreateDto, PartnerUpdateDto, PartnerCombo } from '../types/partner.types';
import { partnerApi } from '../services/partnerApi';

interface PartnerState {
  // State
  partners: Partner[];
  selectedPartner: Partner | null;
  partnerCombo: PartnerCombo[];
  loading: boolean;
  error: string | null;

  // Actions
  loadPartners: () => Promise<void>;
  loadPartnerById: (id: number) => Promise<void>;
  loadPartnerCombo: () => Promise<void>;
  createPartner: (partner: PartnerCreateDto) => Promise<Partner>;
  updatePartner: (id: number, partner: PartnerUpdateDto) => Promise<Partner>;
  deletePartner: (id: number) => Promise<void>;
  setSelectedPartner: (partner: Partner | null) => void;
  clearError: () => void;
}

export const usePartnerStore = create<PartnerState>()(
  devtools(
    (set, get) => ({
      // Initial state
      partners: [],
      selectedPartner: null,
      partnerCombo: [],
      loading: false,
      error: null,

      // Load all partners
      loadPartners: async () => {
        set({ loading: true, error: null });
        try {
          const partners = await partnerApi.getAll();
          set({ partners, loading: false });
        } catch (error: any) {
          set({ error: error.message || 'Gre\u0161ka pri u\u010ditavanju partnera', loading: false });
        }
      },

      // Load partner by ID
      loadPartnerById: async (id: number) => {
        set({ loading: true, error: null });
        try {
          const partner = await partnerApi.getById(id);
          set({ selectedPartner: partner, loading: false });
        } catch (error: any) {
          set({ error: error.message || 'Gre\u0161ka pri u\u010ditavanju partnera', loading: false });
        }
      },

      // Load partner combo
      loadPartnerCombo: async () => {
        try {
          const partnerCombo = await partnerApi.getCombo();
          set({ partnerCombo });
        } catch (error: any) {
          set({ error: error.message || 'Gre\u0161ka pri u\u010ditavanju combo podataka' });
        }
      },

      // Create partner
      createPartner: async (partnerData: PartnerCreateDto) => {
        set({ loading: true, error: null });
        try {
          const newPartner = await partnerApi.create(partnerData);
          const { partners } = get();
          set({ 
            partners: [...partners, newPartner], 
            loading: false,
            selectedPartner: newPartner
          });
          return newPartner;
        } catch (error: any) {
          const errorMessage = error.response?.data?.message || 'Gre\u0161ka pri kreiranju partnera';
          set({ error: errorMessage, loading: false });
          throw new Error(errorMessage);
        }
      },

      // Update partner
      updatePartner: async (id: number, partnerData: PartnerUpdateDto) => {
        set({ loading: true, error: null });
        try {
          const updatedPartner = await partnerApi.update(id, partnerData);
          const { partners } = get();
          const updatedPartners = partners.map(p => 
            p.idPartner === id ? updatedPartner : p
          );
          set({ 
            partners: updatedPartners, 
            loading: false,
            selectedPartner: updatedPartner
          });
          return updatedPartner;
        } catch (error: any) {
          const errorMessage = error.response?.data?.message || 'Gre\u0161ka pri a\u017euriranju partnera';
          set({ error: errorMessage, loading: false });
          throw new Error(errorMessage);
        }
      },

      // Delete partner
      deletePartner: async (id: number) => {
        set({ loading: true, error: null });
        try {
          await partnerApi.delete(id);
          const { partners } = get();
          const filteredPartners = partners.filter(p => p.idPartner !== id);
          set({ 
            partners: filteredPartners, 
            loading: false,
            selectedPartner: null
          });
        } catch (error: any) {
          const errorMessage = error.response?.data?.message || 'Gre\u0161ka pri brisanju partnera';
          set({ error: errorMessage, loading: false });
          throw new Error(errorMessage);
        }
      },

      // Set selected partner
      setSelectedPartner: (partner: Partner | null) => {
        set({ selectedPartner: partner });
      },

      // Clear error
      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'partner-store',
    }
  )
);