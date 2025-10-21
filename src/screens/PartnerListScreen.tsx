import React, { useEffect, useState } from 'react';
import { DynPage, DynGrid, DynButton, DynInput } from '../components/DynUI';
import { usePartnerStore } from '../stores/partnerStore';
import { Partner } from '../types/partner.types';

interface PartnerListScreenProps {
  onPartnerEdit?: (partner: Partner) => void;
  onPartnerCreate?: () => void;
}

export const PartnerListScreen: React.FC<PartnerListScreenProps> = ({ 
  onPartnerEdit, 
  onPartnerCreate 
}) => {
  const {
    partners,
    loading,
    error,
    loadPartners,
    deletePartner,
    clearError
  } = usePartnerStore();

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadPartners();
  }, []);

  const filteredPartners = partners.filter(partner =>
    partner.nazivPartnera.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.sifraPartner.toLowerCase().includes(searchQuery.toLowerCase()) ||
    partner.pib.includes(searchQuery)
  );

  const handleEdit = (partner: Partner) => {
    onPartnerEdit?.(partner);
  };

  const handleDelete = async (partner: Partner) => {
    if (window.confirm(`Da li ste sigurni da želite da obrišete partnera "${partner.nazivPartnera}"?`)) {
      try {
        await deletePartner(partner.idPartner);
      } catch (error) {
        // Error handled by store
      }
    }
  };

  const columns = [
    {
      key: 'sifraPartner',
      title: 'Šifra',
      width: 100,
      sortable: true,
    },
    {
      key: 'nazivPartnera',
      title: 'Naziv partnera',
      width: 250,
      sortable: true,
    },
    {
      key: 'nazivMesta',
      title: 'Mesto',
      width: 120,
      sortable: true,
    },
    {
      key: 'pib',
      title: 'PIB',
      width: 120,
      sortable: true,
    },
    {
      key: 'telefon',
      title: 'Telefon',
      width: 130,
    },
    {
      key: 'nazivVrstePartnera',
      title: 'Vrsta partnera',
      width: 130,
      sortable: true,
    },
    {
      key: 'nazivStatusa',
      title: 'Status',
      width: 100,
      sortable: true,
      render: (value: string) => (
        <span className={`px-2 py-1 rounded text-xs ${
          value === 'Aktivan' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'actions',
      title: 'Akcije',
      width: 120,
      render: (_: any, partner: Partner) => (
        <div className="flex space-x-2">
          <button
            className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm"
            onClick={() => handleEdit(partner)}
          >
            Izmeni
          </button>
          <button
            className="px-3 py-1 text-xs bg-red-100 hover:bg-red-200 text-red-800 rounded-md shadow-sm"
            onClick={() => handleDelete(partner)}
          >
            Obriši
          </button>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Partneri</h1>
            <div className="mt-1 text-sm text-gray-500">
              <a href="/" className="hover:text-primary-600">Početna</a>
              <span className="mx-2">/</span>
              <span>Partneri</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Pretraži partnere..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <button
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md shadow-sm text-sm"
              onClick={onPartnerCreate}
            >
              + Novi Partner
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
        </div>
      ) : filteredPartners.length === 0 ? (
        <div className="flex justify-center items-center h-64 text-gray-500">
          {searchQuery 
            ? "Nema partnera koji odgovaraju pretrazi" 
            : "Nema dodanih partnera"}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Šifra</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Naziv partnera</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mesto</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PIB</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefon</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vrsta partnera</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Akcije</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPartners.map((partner) => (
                  <tr key={partner.idPartner} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partner.sifraPartner}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partner.nazivPartnera}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partner.nazivMesta}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partner.pib}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partner.telefon}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{partner.nazivVrstePartnera}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded text-xs ${
                        partner.nazivStatusa === 'Aktivan' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {partner.nazivStatusa}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm"
                          onClick={() => handleEdit(partner)}
                        >
                          Izmeni
                        </button>
                        <button
                          className="px-3 py-1 text-xs bg-red-100 hover:bg-red-200 text-red-800 rounded-md shadow-sm"
                          onClick={() => handleDelete(partner)}
                        >
                          Obriši
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};