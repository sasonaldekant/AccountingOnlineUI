import React, { useState, useEffect } from 'react';
import { 
  DynPage, 
  DynFieldContainer, 
  DynInput, 
  DynSelect, 
  DynButton,
  DynTextArea
} from './DynUI';
import { usePartnerStore } from '../stores/partnerStore';
import type { Partner, PartnerCreateDto, PartnerUpdateDto } from '../types/partner.types';

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
    rabat: 0,           // % - koristićemo number input
    kasa: 0,            // % - koristićemo number input  
    idNacinPlacanja: undefined,
    idCenovnaGrupa: undefined,
    konto: '',
    idPartnerGlavni: undefined as number | undefined,
    pdvBroj: '',
    maticniBroj: '',
    sifraSort: '',
    idVrstaPartnera: 1,
    proizvodjac: undefined as number | undefined,
    brojUgovora: '',
    datumUgovora: undefined,
    kredit: 0,          // RSD - koristićemo currency input
    datumOtvaranja: undefined,
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
  }, [partnerId, loadPartnerById]);

  useEffect(() => {
    if (selectedPartner && isEditMode) {
      setFormData(prev => ({
        ...prev,
        ...selectedPartner
      }));
    }
  }, [selectedPartner, isEditMode]);

  // Type-safe field change handler
  const handleInputChange = (field: keyof PartnerCreateDto) => 
    (value: any) => setFormData(prev => ({ ...prev, [field]: value }));

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
      
      onSave?.(savedPartner);
    } catch {
      // Error je u store-u
    }
  };

  const breadcrumbs = [
    { label: 'Početna', href: '/' },
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
        
        {/* === OSNOVNI PODACI === */}
        <DynFieldContainer title="Osnovni podaci">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DynInput
              name="sifraPartner"
              label="Šifra partnera"
              type="text"
              required
              maxLength={20}
              value={formData.sifraPartner}
              onChange={handleInputChange('sifraPartner')}
              validation={[
                { type: 'required', message: 'Šifra partnera je obavezna' },
                { type: 'pattern', value: '^[A-Z0-9\\-_/]+$', message: 'Dozvoljeni su velika slova, brojevi i -_/' }
              ]}
              placeholder="npr. P001, PARTNER-123"
              help="Jedinstveni kod partnera u sistemu"
            />
            
            <DynInput
              name="nazivPartnera"
              label="Naziv partnera"
              type="text"
              required
              maxLength={100}
              value={formData.nazivPartnera}
              onChange={handleInputChange('nazivPartnera')}
              validation={[
                { type: 'required', message: 'Naziv partnera je obavezan' },
                { type: 'minLength', value: 2, message: 'Minimum 2 karaktera' }
              ]}
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
              validation={[
                { type: 'required', message: 'Mesto je obavezno' }
              ]}
            />
          </div>
        </DynFieldContainer>

        {/* === KONTAKT PODACI === */}
        <DynFieldContainer title="Kontakt podaci">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DynInput
              name="pib"
              label="PIB"
              type="text"
              required
              maxLength={20}
              value={formData.pib}
              onChange={handleInputChange('pib')}
              validation={[
                { type: 'required', message: 'PIB je obavezan' },
                { type: 'pattern', value: '^[0-9]{9}$', message: 'PIB mora imati tačno 9 cifara' }
              ]}
              placeholder="123456789"
              help="Poreski identifikacioni broj (9 cifara)"
            />
            
            <DynInput
              name="telefon"
              label="Telefon"
              type="tel"
              maxLength={30}
              value={formData.telefon}
              onChange={handleInputChange('telefon')}
              placeholder="+381 11 123 4567"
            />
            
            <DynInput
              name="fax"
              label="FAX"
              type="tel"
              maxLength={30}
              value={formData.fax}
              onChange={handleInputChange('fax')}
              placeholder="+381 11 123 4568"
            />
            
            <DynInput
              name="kontakt"
              label="Kontakt osoba"
              type="text"
              maxLength={100}
              value={formData.kontakt}
              onChange={handleInputChange('kontakt')}
              placeholder="Ime i prezime kontakt osobe"
            />
          </div>
        </DynFieldContainer>

        {/* === POSLOVNI PODACI === */}
        <DynFieldContainer title="Poslovni podaci">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            
            {/* Rabat - number input sa spin buttons i procenat validacija */}
            <DynInput
              name="rabat"
              label="Rabat (%)"
              type="number"
              min={0}
              max={100}
              step={0.1}
              showSpinButtons
              value={formData.rabat}
              onChange={handleInputChange('rabat')}
              validation={[
                { type: 'custom', message: 'Rabat mora biti između 0 i 100%', 
                  validator: (value) => value >= 0 && value <= 100 }
              ]}
              help="Standardni rabat za partnera (0-100%)"
            />
            
            {/* Kasa - number input sa spin buttons */}
            <DynInput
              name="kasa"
              label="Kasa (%)"
              type="number"
              min={0}
              step={0.01}
              showSpinButtons
              value={formData.kasa}
              onChange={handleInputChange('kasa')}
              help="Procenat kase za partnera"
            />
          </div>
        </DynFieldContainer>

        {/* === DODATNI PODACI === */}
        <DynFieldContainer title="Dodatni podaci">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DynInput
              name="pdvBroj"
              label="PDV broj"
              type="text"
              maxLength={20}
              value={formData.pdvBroj}
              onChange={handleInputChange('pdvBroj')}
              placeholder="RS123456789"
              help="Broj za PDV (ako je obveznik)"
            />
            
            <DynInput
              name="maticniBroj"
              label="Matični broj"
              type="text"
              maxLength={20}
              value={formData.maticniBroj}
              onChange={handleInputChange('maticniBroj')}
              validation={[
                { type: 'pattern', value: '^[0-9]{8}$', message: 'Matični broj mora imati tačno 8 cifara' }
              ]}
              placeholder="12345678"
              help="Matični broj privrednog subjekta (8 cifara)"
            />
            
            <DynInput
              name="konto"
              label="Konto"
              type="text"
              maxLength={10}
              value={formData.konto}
              onChange={handleInputChange('konto')}
              placeholder="4301"
              help="Kontni broj u kontnom planu"
            />
            
            {/* Kredit - currency input sa RSD formatting */}
            <DynInput
              name="kredit"
              label="Kredit limit"
              type="currency"
              currencyConfig={{
                currency: 'RSD',
                precision: 2,
                thousandSeparator: '.',
                decimalSeparator: ',',
                showCurrencySymbol: true,
                currencyPosition: 'after',
                autoFormat: true,
                allowNegative: false
              }}
              value={formData.kredit}
              onChange={handleInputChange('kredit')}
              help="Maksimalni kredit za partnera u RSD"
            />
          </div>
        </DynFieldContainer>

        {/* === NAPOMENA === */}
        <DynFieldContainer title="Napomena">
          <DynTextArea
            name="napomena"
            label="Napomena"
            rows={4}
            maxLength={500}
            showCharacterCount
            resize="vertical"
            autoResize={false}
            value={formData.napomena}
            onChange={handleInputChange('napomena')}
            placeholder="Dodatne informacije o partneru, uslovi saradnje, kontakt detalji..."
            help="Opcionalne napomene i komentari (maksimalno 500 karaktera)"
          />

        {/* === FORM ACTIONS === */}
        <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
          <DynButton
            variant="secondary"
            onClick={onCancel}
            disabled={loading}
            type="button"
          >
            Otkaži
          </DynButton>
          
          <DynButton
            type="submit"
            variant="primary"
            loading={loading}
            disabled={!formData.sifraPartner || !formData.nazivPartnera || !formData.pib}
          >
            {isEditMode ? 'Ažuriraj partnera' : 'Kreiraj partnera'}
          </DynButton>
        </div>
      </form>
    </DynPage>
  );
};
