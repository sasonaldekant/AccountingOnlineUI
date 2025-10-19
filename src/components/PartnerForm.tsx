import React, { useEffect, useState } from 'react';
import {
  DynPage,
  DynFieldContainer,
  DynInput,
  DynSelect,
  DynTextArea,
  DynButton
} from './DynUI';
import { usePartnerStore } from '../stores/partnerStore';
import type { Partner, PartnerUpdateDto } from '../types/partner.types';

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

  const [formData, setFormData] = useState({
    sifraPartner: '',
    nazivPartnera: '',
    adresa: '',
    idMesto: 1,
    pib: '',
    telefon: '',
    fax: '',
    idReferent: undefined as number | undefined,
    napomena: '',
    kontakt: '',
    idStatus: 1,
    idDrzava: 1,
    rabat: 0,          // %
    kasa: 0,           // %
    idNacinPlacanja: undefined as number | undefined,
    idCenovnaGrupa: undefined as number | undefined,
    konto: '',
    idPartnerGlavni: undefined as number | undefined,
    pdvBroj: '',
    maticniBroj: '',
    sifraSort: '',
    idVrstaPartnera: 1,
    proizvodjac: undefined as number | undefined,
    brojUgovora: '',
    datumUgovora: undefined as string | undefined,
    kredit: 0,         // valuta
    datumOtvaranja: undefined as string | undefined,
    njihovaSifraZaNas: '',
    bezZabrane: 0,
    tolerancijaValute: undefined as number | undefined,
    odlozenoPlacanje: false,
    kategorijaKupca: '',
    staraSifra: ''
  });

  const isEditMode = !!partnerId;

  useEffect(() => {
    if (partnerId) loadPartnerById(partnerId);
  }, [partnerId, loadPartnerById]);

  useEffect(() => {
    if (selectedPartner && isEditMode) {
      setFormData(prev => ({
        ...prev,
        ...selectedPartner,
        datumUgovora: selectedPartner.datumUgovora
          ? typeof selectedPartner.datumUgovora === 'string'
            ? selectedPartner.datumUgovora
            : (selectedPartner.datumUgovora as Date).toISOString().slice(0, 10)
          : undefined,
        datumOtvaranja: selectedPartner.datumOtvaranja
          ? typeof selectedPartner.datumOtvaranja === 'string'
            ? selectedPartner.datumOtvaranja
            : (selectedPartner.datumOtvaranja as Date).toISOString().slice(0, 10)
          : undefined
      }));
    }
  }, [selectedPartner, isEditMode]);

  const handleInputChange = (name: keyof typeof formData) =>
    (value: any) => setFormData(prev => ({ ...prev, [name]: value }));

  const handleSubmit = async () => {
    try {
      clearError();
      let saved: Partner;
      if (isEditMode && partnerId) {
        const dto: PartnerUpdateDto = {
          ...formData,
          idPartner: partnerId,
          datumUgovora: formData.datumUgovora ? new Date(formData.datumUgovora) : undefined,
          datumOtvaranja: formData.datumOtvaranja ? new Date(formData.datumOtvaranja) : undefined
        };
        saved = await updatePartner(partnerId, dto);
      } else {
        saved = await createPartner({
          ...formData,
          datumUgovora: formData.datumUgovora ? new Date(formData.datumUgovora) : undefined,
          datumOtvaranja: formData.datumOtvaranja ? new Date(formData.datumOtvaranja) : undefined
        });
      }
      onSave?.(saved);
    } catch {
      /* error je u store-u */
    }
  };

  const breadcrumbs = [
    { label: 'Početna', href: '/' },
    { label: 'Partneri', href: '/partneri' },
    { label: isEditMode ? 'Izmeni partnera' : 'Novi partner' }
  ];

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <DynPage title={isEditMode ? 'Izmeni partnera' : 'Novi partner'} breadcrumbs={breadcrumbs}>
        <DynFieldContainer title="Podaci o partneru">
          {/* Osnovni podaci */}
          <DynInput
            name="sifraPartner"
            label="Šifra partnera"
            type="text"
            required
            maxLength={20}
            value={formData.sifraPartner}
            onChange={handleInputChange('sifraPartner')}
            placeholder="Unesite šifru partnera"
          />
          <DynInput
            name="nazivPartnera"
            label="Naziv partnera"
            type="text"
            required
            maxLength={100}
            value={formData.nazivPartnera}
            onChange={handleInputChange('nazivPartnera')}
            placeholder="Unesite naziv partnera"
          />
          <DynInput
            name="adresa"
            label="Adresa"
            type="text"
            maxLength={100}
            value={formData.adresa}
            onChange={handleInputChange('adresa')}
            placeholder="Unesite adresu"
          />
          <DynSelect
            name="idMesto"
            label="Mesto"
            required
            value={formData.idMesto}
            onChange={handleInputChange('idMesto')}
            options={[
              { value: 1, label: 'Beograd' },
              { value: 2, label: 'Novi Sad' },
              { value: 3, label: 'Niš' },
              { value: 4, label: 'Kragujevac' },
              { value: 5, label: 'Subotica' }
            ]}
          />

          {/* Kontakt podaci */}
          <DynInput
            name="pib"
            label="PIB"
            type="text"
            required
            maxLength={20}
            value={formData.pib}
            onChange={handleInputChange('pib')}
            placeholder="Unesite PIB"
          />
          <DynInput
            name="telefon"
            onChange={handleInputChange('telefon')}
            placeholder="Unesite telefon"
          />
          <DynInput
            name="fax"
            label="FAX"
            type="text"
            maxLength={30}
            value={formData.fax}
            onChange={handleInputChange('fax')}
            placeholder="Unesite FAX"
          />
          <DynInput
            name="kontakt"
            label="Kontakt osoba"
            type="text"
            maxLength={100}
            value={formData.kontakt}
            onChange={handleInputChange('kontakt')}
            placeholder="Unesite kontakt osobu"
          />

          {/* Poslovni podaci */}
          <DynSelect
            name="idStatus"
            label="Status"
            required
            value={formData.idStatus}
            onChange={handleInputChange('idStatus')}
            options={[
              { value: 1, label: 'Aktivan' },
              { value: 2, label: 'Neaktivan' },
              { value: 3, label: 'Blokiran' }
            ]}
          />
          <DynSelect
            name="idVrstaPartnera"
            label="Vrsta partnera"
            required
            value={formData.idVrstaPartnera}
            onChange={handleInputChange('idVrstaPartnera')}
            options={[
              { value: 1, label: 'Dobavljač' },
              { value: 2, label: 'Kupac' },
              { value: 3, label: 'Prevoznik' },
              { value: 4, label: 'Uslužni partner' }
            ]}
          />

          {/* Rabati i kasa – broj (procenat) */}
          <DynInput
            name="rabat"
            label="Rabat (%)"
            type="number"
            value={String(formData.rabat)}
            onChange={value => handleInputChange('rabat')(Number(value))}
          />
          <DynInput
            name="kasa"
            label="Kasa (%)"
            type="number"
            value={String(formData.kasa)}
            onChange={value => handleInputChange('kasa')(Number(value))}
          />

          {/* Dodatni podaci */}
          <DynInput
            name="pdvBroj"
            label="PDV broj"
            type="text"
            maxLength={20}
            value={formData.pdvBroj}
            onChange={handleInputChange('pdvBroj')}
            placeholder="Unesite PDV broj"
          />
          <DynInput
            name="maticniBroj"
            label="Matični broj"
            type="text"
            maxLength={20}
            value={formData.maticniBroj}
            onChange={handleInputChange('maticniBroj')}
            placeholder="Unesite matični broj"
          />
          <DynInput
            name="konto"
            label="Konto"
            type="text"
            maxLength={10}
            value={formData.konto}
            onChange={handleInputChange('konto')}
            placeholder="Unesite konto"
          />

          {/* Kredit – currency */}
          <DynInput
            name="kredit"
            label="Kredit"
            type="currency"
            value={String(formData.kredit)}
            onChange={value => handleInputChange('kredit')(Number(value))}
          />

          {/* Napomena */}
          <DynTextArea
            label="Napomena"
            rows={4}
            maxLength={500}
            value={formData.napomena}
            onChange={handleInputChange('napomena')}
            placeholder="Unesite napomenu"
          />

          {/* Akcije */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end', marginTop: 16 }}>
            <DynButton variant="secondary" onClick={onCancel}>Otkaži</DynButton>
            <DynButton type="submit" variant="primary" loading={loading}>
              {isEditMode ? 'Ažuriraj' : 'Kreiraj'}
            </DynButton>
          </div>
        </DynFieldContainer>
      </DynPage>
    </form>
  );
};
