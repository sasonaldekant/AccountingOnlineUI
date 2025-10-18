import React, { useState, useEffect } from 'react';
import { 
  DynPage, 
  DynFieldContainer, 
  DynInput, 
  DynSelect, 
  DynButton,
  DynTextArea,
  DynNumberInput
} from './DynUI';
import { usePartnerStore } from '../stores/partnerStore';
import { Partner, PartnerCreateDto, PartnerUpdateDto } from '../types/partner.types';

interface PartnerFormProps {
  partnerId?: number;
  onSave?: (partner: Partner) => void;
  onCancel?: () => void;
}

export const PartnerForm: React.FC<PartnerFormProps> = ({ partnerId, onSave, onCancel }) => {
  const {
    selectedPartner,
    loading,
    error,
    loadPartnerById,
    createPartner,
    updatePartner,
    clearError
  } = usePartnerStore();

  const [formData, setFormData] = useState<PartnerCreateDto>({
    sifraPartner: '',
    nazivPartnera: '',
    adresa: '',
    idMesto: 1,
    pib: '',
    telefon: '',
    fax: '',
    idReferent: undefined,
    napomena: '',
    kontakt: '',
    idStatus: 1,
    idDrzava: 1,
    rabat: 0,
    kasa: 0,
    idNacinPlacanja: undefined,
    idCenovnaGrupa: undefined,
    konto: '',
    idPartnerGlavni: undefined,
    pdvBroj: '',
    maticniBroj: '',
    sifraSort: '',
    idVrstaPartnera: 1,
    proizvodjac: undefined,
    brojUgovora: '',
    datumUgovora: undefined,
    kredit: 0,
    datumOtvaranja: undefined,
    njihovaSifraZaNas: '',
    bezZabrane: 0,
    tolerancijaValute: undefined,
    odlozenoPlacanje: false,
    kategorijaKupca: '',
    staraSifra: ''
  });

  const isEditMode = !!partnerId;

  useEffect(() => {
    if (partnerId) {
      loadPartnerById(partnerId);
    }
  }, [partnerId]);

  const handleInputChange = (name: string, value: any) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      clearError();
      let savedPartner: Partner;
      
      if (isEditMode && partnerId) {
        const updateDto: PartnerUpdateDto = { ...formData, idPartner: partnerId };
        savedPartner = await updatePartner(partnerId, updateDto);
      } else {
        savedPartner = await createPartner(formData);
      }
      
      onSave?.(savedPartner);
    } catch (error) {
      // Error is handled by store
    }
  };

  const breadcrumbs = [
    { label: 'Po\u010detna', href: '/' },
    { label: 'Partneri', href: '/partneri' },
    { label: isEditMode ? 'Izmeni partnera' : 'Novi partner' }
  ];

  return (
    <DynPage
      title={isEditMode ? 'Izmeni partnera' : 'Novi partner'}
      breadcrumbs={breadcrumbs}
      loading={loading}
      error={error}
      onErrorDismiss={clearError}
    >
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        {/* Osnovni podaci */}
        <DynFieldContainer title="Osnovni podaci">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DynInput
              label="\u0160ifra partnera *"
              name="sifraPartner"
              value={formData.sifraPartner}
              onChange={(value) => handleInputChange('sifraPartner', value)}
              required
              maxLength={20}
              placeholder="Unesite \u0161ifru partnera"
            />
            
            <DynInput
              label="Naziv partnera *"
              name="nazivPartnera"
              value={formData.nazivPartnera}
              onChange={(value) => handleInputChange('nazivPartnera', value)}
              required
              maxLength={100}
              placeholder="Unesite naziv partnera"
            />
            
            <DynInput
              label="Adresa"
              name="adresa"
              value={formData.adresa}
              onChange={(value) => handleInputChange('adresa', value)}
              maxLength={100}
              placeholder="Unesite adresu"
            />
            
            <DynSelect
              label="Mesto *"
              name="idMesto"
              value={formData.idMesto}
              onChange={(value) => handleInputChange('idMesto', value)}
              options={[
                { value: 1, label: 'Beograd' },
                { value: 2, label: 'Novi Sad' },
                { value: 3, label: 'Ni\u0161' },
                { value: 4, label: 'Kragujevac' },
                { value: 5, label: 'Subotica' }
              ]}
              required
            />
          </div>
        </DynFieldContainer>

        {/* Kontakt podaci */}
        <DynFieldContainer title="Kontakt podaci">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DynInput
              label="PIB *"
              name="pib"
              value={formData.pib}
              onChange={(value) => handleInputChange('pib', value)}
              required
              maxLength={20}
              placeholder="Unesite PIB"
            />
            
            <DynInput
              label="Telefon"
              name="telefon"
              value={formData.telefon}
              onChange={(value) => handleInputChange('telefon', value)}
              maxLength={30}
              placeholder="Unesite telefon"
            />
            
            <DynInput
              label="FAX"
              name="fax"
              value={formData.fax}
              onChange={(value) => handleInputChange('fax', value)}
              maxLength={30}
              placeholder="Unesite FAX"
            />
            
            <DynInput
              label="Kontakt osoba"
              name="kontakt"
              value={formData.kontakt}
              onChange={(value) => handleInputChange('kontakt', value)}
              maxLength={100}
              placeholder="Unesite kontakt osobu"
            />
          </div>
        </DynFieldContainer>

        {/* Poslovni podaci */}
        <DynFieldContainer title="Poslovni podaci">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DynSelect
              label="Status *"
              name="idStatus"
              value={formData.idStatus}
              onChange={(value) => handleInputChange('idStatus', value)}
              options={[
                { value: 1, label: 'Aktivan' },
                { value: 2, label: 'Neaktivan' },
                { value: 3, label: 'Blokiran' }
              ]}
              required
            />
            
            <DynSelect
              label="Vrsta partnera *"
              name="idVrstaPartnera"
              value={formData.idVrstaPartnera}
              onChange={(value) => handleInputChange('idVrstaPartnera', value)}
              options={[
                { value: 1, label: 'Dobavlja\u010d' },
                { value: 2, label: 'Kupac' },
                { value: 3, label: 'Prevoznik' },
                { value: 4, label: 'Uslu\u017eni partner' }
              ]}
              required
            />
            
            <DynNumberInput
              label="Rabat (%)"
              name="rabat"
              value={formData.rabat}
              onChange={(value) => handleInputChange('rabat', value)}
              min={0}
              max={100}
              step={0.1}
            />
            
            <DynNumberInput
              label="Kasa"
              name="kasa"
              value={formData.kasa}
              onChange={(value) => handleInputChange('kasa', value)}
              min={0}
              step={0.01}
            />
          </div>
        </DynFieldContainer>

        {/* Dodatni podaci */}
        <DynFieldContainer title="Dodatni podaci">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DynInput
              label="PDV Broj"
              name="pdvBroj"
              value={formData.pdvBroj}
              onChange={(value) => handleInputChange('pdvBroj', value)}
              maxLength={20}
              placeholder="Unesite PDV broj"
            />
            
            <DynInput
              label="Matični broj"
              name="maticniBroj"
              value={formData.maticniBroj}
              onChange={(value) => handleInputChange('maticniBroj', value)}
              maxLength={20}
              placeholder="Unesite matični broj"
            />
            
            <DynInput
              label="Konto"
              name="konto"
              value={formData.konto}
              onChange={(value) => handleInputChange('konto', value)}
              maxLength={10}
              placeholder="Unesite konto"
            />
            
            <DynNumberInput
              label="Kredit"
              name="kredit"
              value={formData.kredit}
              onChange={(value) => handleInputChange('kredit', value)}
              min={0}
              step={0.01}
            />
          </div>
        </DynFieldContainer>

        {/* Napomena */}
        <DynFieldContainer title="Napomena">
          <DynTextArea
            label="Napomena"
            name="napomena"
            value={formData.napomena}
            onChange={(value) => handleInputChange('napomena', value)}
            maxLength={500}
            rows={4}
            placeholder="Unesite napomenu"
          />
        </DynFieldContainer>

        {/* Form actions */}
        <div className="flex justify-end space-x-4 mt-6">
          <DynButton
            variant="secondary"
            onClick={onCancel}
            disabled={loading}
          >
            Otka\u017ei
          </DynButton>
          
          <DynButton
            type="submit"
            variant="primary"
            loading={loading}
          >
            {isEditMode ? 'A\u017euriraj' : 'Kreiraj'}
          </DynButton>
        </div>
      </form>
    </DynPage>
  );
};