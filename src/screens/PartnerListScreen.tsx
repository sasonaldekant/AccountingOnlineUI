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
          <DynButton
            size="sm"
            variant="secondary"
            onClick={() => handleEdit(partner)}
          >
            Izmeni
          </DynButton>
          <DynButton
            size="sm"
            variant="danger"
            onClick={() => handleDelete(partner)}
          >
            Obriši
          </DynButton>
        </div>
      )
    }
  ];

  const breadcrumbs = [
    { label: 'Početna', href: '/' },
    { label: 'Partneri' }
  ];

  const headerActions = (
    <div className="flex items-center space-x-4">
      <DynInput
        placeholder="Pretraži partnere..."
        value={searchQuery}
        onChange={setSearchQuery}
        className="w-64"
      />
      <DynButton
        variant="primary"
        onClick={onPartnerCreate}
      >
        + Novi Partner
      </DynButton>
    </div>
  );

  return (
    <DynPage
      title="Partneri"
      breadcrumbs={breadcrumbs}
      headerActions={headerActions}
      loading={loading}
      error={error}
      onErrorDismiss={clearError}
    >
      <DynGrid
        data={filteredPartners}
        columns={columns}
        loading={loading}
        emptyStateText={
          searchQuery 
            ? "Nema partnera koji odgovaraju pretrazi" 
            : "Nema dodanih partnera"
        }
        pagination={{
          pageSize: 25,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) => 
            `${range[0]}-${range[1]} od ${total} partnera`
        }}
        rowKey="idPartner"
        sortable
        filterable
      />
    </DynPage>
  );
};