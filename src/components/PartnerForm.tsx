import React, { useState, useEffect } from 'react';
// Import basic DynUI components and their prop types
// Temporarily removing DynUI components in favor of basic HTML while we fix type issues
import { usePartnerStore } from '../stores/partnerStore';
import type { Partner, PartnerCreateDto, PartnerUpdateDto } from '../types/partner.types';

interface PartnerFormProps {
  partnerId?: number | undefined;
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

  type FormState = {
    // Required fields
    sifraPartner: string;
    nazivPartnera: string;
    adresa: string;
    idMesto: number;
    pib: string;
    telefon: string;
    fax: string;
    napomena: string;
    kontakt: string;
    idStatus: number;
    idDrzava: number;
    rabat: number;
    kasa: number;
    konto: string;
    pdvBroj: string;
    maticniBroj: string;
    sifraSort: string;
    idVrstaPartnera: number;
    brojUgovora: string;
    kredit: number;
    njihovaSifraZaNas: string;
    bezZabrane: number;
    odlozenoPlacanje: boolean;
    kategorijaKupca: string;
    staraSifra: string;

    // Optional fields with explicit undefined
    idPartner?: number | undefined;
    idReferent?: number | undefined;
    idNacinPlacanja?: number | undefined;
    idCenovnaGrupa?: number | undefined;
    idPartnerGlavni?: number | undefined;
    proizvodjac?: number | undefined;
    datumUgovora?: string | undefined;
    datumOtvaranja?: string | undefined;
    tolerancijaValute?: number | undefined;
  };

  const [formData, setFormData] = useState<FormState>({
    // Required fields
    sifraPartner: '',
    nazivPartnera: '',
    adresa: '',
    idMesto: 1,
    pib: '',
    telefon: '',
    fax: '',
    napomena: '',
    kontakt: '',
    idStatus: 1,
    idDrzava: 1,
    rabat: 0,
    kasa: 0,
    konto: '',
    pdvBroj: '',
    maticniBroj: '',
    sifraSort: '',
    idVrstaPartnera: 1,
    brojUgovora: '',
    kredit: 0,
    njihovaSifraZaNas: '',
    bezZabrane: 0,
    odlozenoPlacanje: false,
    kategorijaKupca: '',
    staraSifra: '',
    
    // Optional fields
    idPartner: undefined,
    idReferent: undefined,
    idNacinPlacanja: undefined,
    idCenovnaGrupa: undefined,
    idPartnerGlavni: undefined,
    proizvodjac: undefined,
    datumUgovora: undefined,
    datumOtvaranja: undefined,
    tolerancijaValute: undefined
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
      // Prepare form data from selected partner
      const formData: FormState = {
        // Required fields
        sifraPartner: selectedPartner.sifraPartner,
        nazivPartnera: selectedPartner.nazivPartnera,
        adresa: selectedPartner.adresa || '',
        idMesto: selectedPartner.idMesto,
        pib: selectedPartner.pib,
        telefon: selectedPartner.telefon || '',
        fax: selectedPartner.fax || '',
        napomena: selectedPartner.napomena || '',
        kontakt: selectedPartner.kontakt || '',
        idStatus: selectedPartner.idStatus,
        idDrzava: selectedPartner.idDrzava || 1,
        rabat: selectedPartner.rabat,
        kasa: selectedPartner.kasa,
        konto: selectedPartner.konto || '',
        pdvBroj: selectedPartner.pdvBroj || '',
        maticniBroj: selectedPartner.maticniBroj || '',
        sifraSort: selectedPartner.sifraSort || '',
        idVrstaPartnera: selectedPartner.idVrstaPartnera,
        brojUgovora: selectedPartner.brojUgovora || '',
        kredit: selectedPartner.kredit,
        njihovaSifraZaNas: selectedPartner.njihovaSifraZaNas || '',
        bezZabrane: selectedPartner.bezZabrane || 0,
        odlozenoPlacanje: selectedPartner.odlozenoPlacanje || false,
        kategorijaKupca: selectedPartner.kategorijaKupca || '',
        staraSifra: selectedPartner.staraSifra || '',

        // Optional fields
        idPartner: selectedPartner.idPartner,
        idReferent: selectedPartner.idReferent,
        idNacinPlacanja: selectedPartner.idNacinPlacanja,
        idCenovnaGrupa: selectedPartner.idCenovnaGrupa,
        idPartnerGlavni: selectedPartner.idPartnerGlavni,
        proizvodjac: selectedPartner.proizvodjac,
        datumUgovora: selectedPartner.datumUgovora ? new Date(selectedPartner.datumUgovora).toISOString().split('T')[0] : undefined,
        datumOtvaranja: selectedPartner.datumOtvaranja ? new Date(selectedPartner.datumOtvaranja).toISOString().split('T')[0] : undefined,
        tolerancijaValute: selectedPartner.tolerancijaValute
      };

      setFormData(formData);
    }
  }, [selectedPartner, isEditMode]);  // Type-safe field change handler
  const handleInputChange = (field: keyof PartnerCreateDto) => 
    (value: any) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    try {
      clearError();
      let saved: Partner;

      const commonData = {
        // Required fields
        sifraPartner: formData.sifraPartner,
        nazivPartnera: formData.nazivPartnera,
        adresa: formData.adresa,
        idMesto: formData.idMesto,
        pib: formData.pib,
        telefon: formData.telefon,
        fax: formData.fax,
        napomena: formData.napomena,
        kontakt: formData.kontakt,
        idStatus: formData.idStatus,
        idDrzava: formData.idDrzava,
        rabat: formData.rabat,
        kasa: formData.kasa,
        konto: formData.konto,
        pdvBroj: formData.pdvBroj,
        maticniBroj: formData.maticniBroj,
        sifraSort: formData.sifraSort,
        idVrstaPartnera: formData.idVrstaPartnera,
        brojUgovora: formData.brojUgovora,
        kredit: formData.kredit,
        njihovaSifraZaNas: formData.njihovaSifraZaNas,
        bezZabrane: formData.bezZabrane,
        odlozenoPlacanje: formData.odlozenoPlacanje,
        kategorijaKupca: formData.kategorijaKupca,
        staraSifra: formData.staraSifra,

        // Convert optional fields to required format
        idReferent: formData.idReferent ?? 0,
        idNacinPlacanja: formData.idNacinPlacanja ?? 0,
        idCenovnaGrupa: formData.idCenovnaGrupa ?? 0,
        idPartnerGlavni: formData.idPartnerGlavni ?? 0,
        proizvodjac: formData.proizvodjac ?? 0,
        tolerancijaValute: formData.tolerancijaValute ?? 0,
        datumUgovora: formData.datumUgovora ? new Date(formData.datumUgovora) : null,
        datumOtvaranja: formData.datumOtvaranja ? new Date(formData.datumOtvaranja) : null
      };

      if (isEditMode && partnerId) {
        saved = await updatePartner(partnerId, {
          ...commonData,
          idPartner: partnerId
        });
      } else {
        saved = await createPartner(commonData);
      }
      
      onSave?.(saved);
    } catch {
      // Error je u store-u
    }
  };

  const breadcrumbs = [
    { title: 'Početna', href: '/' },
    { title: 'Partneri', href: '/partneri' },
    { title: isEditMode ? 'Izmeni partnera' : 'Novi partner' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          {isEditMode ? 'Izmeni partnera' : 'Novi partner'}
        </h1>
        <nav className="mt-2">
          <ol className="list-none p-0 inline-flex">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                {crumb.href ? (
                  <a href={crumb.href} className="text-blue-600 hover:text-blue-800">
                    {crumb.title}
                  </a>
                ) : (
                  <span className="text-gray-500">{crumb.title}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {loading && <div className="text-center py-4">Loading...</div>}
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  onClick={clearError}
                  className="inline-flex rounded-md p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <span className="sr-only">Dismiss</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-8">
        {/* === OSNOVNI PODACI === */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-medium px-2">Osnovni podaci</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sifraPartner" className="block text-sm font-medium text-gray-700">
                Šifra partnera <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="sifraPartner"
                name="sifraPartner"
                required
                maxLength={20}
                value={formData.sifraPartner}
                onChange={(e) => handleInputChange('sifraPartner')(e.target.value)}
                placeholder="npr. P001, PARTNER-123"
                pattern="[A-Z0-9\-_/]+"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">Jedinstveni kod partnera u sistemu</p>
            </div>

            <div>
              <label htmlFor="nazivPartnera" className="block text-sm font-medium text-gray-700">
                Naziv partnera <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nazivPartnera"
                name="nazivPartnera"
                required
                minLength={2}
                maxLength={100}
                value={formData.nazivPartnera}
                onChange={(e) => handleInputChange('nazivPartnera')(e.target.value)}
                placeholder="Unesite naziv partnera"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="adresa" className="block text-sm font-medium text-gray-700">
                Adresa
              </label>
              <input
                type="text"
                id="adresa"
                name="adresa"
                maxLength={100}
                value={formData.adresa}
                onChange={(e) => handleInputChange('adresa')(e.target.value)}
                placeholder="Unesite adresu"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="idMesto" className="block text-sm font-medium text-gray-700">
                Mesto <span className="text-red-500">*</span>
              </label>
              <select
                id="idMesto"
                name="idMesto"
                required
                value={formData.idMesto}
                onChange={(e) => handleInputChange('idMesto')(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value={1}>Beograd</option>
                <option value={2}>Novi Sad</option>
                <option value={3}>Niš</option>
                <option value={4}>Kragujevac</option>
                <option value={5}>Subotica</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* === KONTAKT PODACI === */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-medium px-2">Kontakt podaci</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pib" className="block text-sm font-medium text-gray-700">
                PIB <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pib"
                name="pib"
                required
                maxLength={20}
                pattern="[0-9]{9}"
                value={formData.pib}
                onChange={(e) => handleInputChange('pib')(e.target.value)}
                placeholder="123456789"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">Poreski identifikacioni broj (9 cifara)</p>
            </div>
            
            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">
                Telefon
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                maxLength={30}
                value={formData.telefon}
                onChange={(e) => handleInputChange('telefon')(e.target.value)}
                placeholder="+381 11 123 4567"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="fax" className="block text-sm font-medium text-gray-700">
                FAX
              </label>
              <input
                type="tel"
                id="fax"
                name="fax"
                maxLength={30}
                value={formData.fax}
                onChange={(e) => handleInputChange('fax')(e.target.value)}
                placeholder="+381 11 123 4568"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>
            
            <div>
              <label htmlFor="kontakt" className="block text-sm font-medium text-gray-700">
                Kontakt osoba
              </label>
              <input
                type="text"
                id="kontakt"
                name="kontakt"
                maxLength={100}
                value={formData.kontakt}
                onChange={(e) => handleInputChange('kontakt')(e.target.value)}
                placeholder="Ime i prezime kontakt osobe"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
            </div>
          </div>
        </fieldset>

        {/* === POSLOVNI PODACI === */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-medium px-2">Poslovni podaci</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="idStatus" className="block text-sm font-medium text-gray-700">
                Status <span className="text-red-500">*</span>
              </label>
              <select
                id="idStatus"
                name="idStatus"
                required
                value={formData.idStatus}
                onChange={(e) => handleInputChange('idStatus')(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value={1}>Aktivan</option>
                <option value={2}>Neaktivan</option>
                <option value={3}>Blokiran</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="idVrstaPartnera" className="block text-sm font-medium text-gray-700">
                Vrsta partnera <span className="text-red-500">*</span>
              </label>
              <select
                id="idVrstaPartnera"
                name="idVrstaPartnera"
                required
                value={formData.idVrstaPartnera}
                onChange={(e) => handleInputChange('idVrstaPartnera')(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              >
                <option value={1}>Dobavljač</option>
                <option value={2}>Kupac</option>
                <option value={3}>Prevoznik</option>
                <option value={4}>Uslužni partner</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="rabat" className="block text-sm font-medium text-gray-700">
                Rabat (%)
              </label>
              <input
                type="number"
                id="rabat"
                name="rabat"
                min={0}
                max={100}
                step={0.1}
                value={formData.rabat}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value >= 0 && value <= 100) {
                    handleInputChange('rabat')(value);
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">Standardni rabat za partnera (0-100%)</p>
            </div>
            
            <div>
              <label htmlFor="kasa" className="block text-sm font-medium text-gray-700">
                Kasa (%)
              </label>
              <input
                type="number"
                id="kasa"
                name="kasa"
                min={0}
                step={0.01}
                value={formData.kasa}
                onChange={(e) => handleInputChange('kasa')(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">Procenat kase za partnera</p>
            </div>
          </div>
        </fieldset>

        {/* === DODATNI PODACI === */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-medium px-2">Dodatni podaci</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="pdvBroj" className="block text-sm font-medium text-gray-700">
                PDV broj
              </label>
              <input
                type="text"
                id="pdvBroj"
                name="pdvBroj"
                maxLength={20}
                value={formData.pdvBroj}
                onChange={(e) => handleInputChange('pdvBroj')(e.target.value)}
                placeholder="RS123456789"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">Broj za PDV (ako je obveznik)</p>
            </div>
            
            <div>
              <label htmlFor="maticniBroj" className="block text-sm font-medium text-gray-700">
                Matični broj
              </label>
              <input
                type="text"
                id="maticniBroj"
                name="maticniBroj"
                maxLength={20}
                pattern="[0-9]{8}"
                value={formData.maticniBroj}
                onChange={(e) => handleInputChange('maticniBroj')(e.target.value)}
                placeholder="12345678"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">Matični broj privrednog subjekta (8 cifara)</p>
            </div>
            
            <div>
              <label htmlFor="konto" className="block text-sm font-medium text-gray-700">
                Konto
              </label>
              <input
                type="text"
                id="konto"
                name="konto"
                maxLength={10}
                value={formData.konto}
                onChange={(e) => handleInputChange('konto')(e.target.value)}
                placeholder="4301"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
              />
              <p className="mt-1 text-sm text-gray-500">Kontni broj u kontnom planu</p>
            </div>
            
            {/* Kredit - currency input sa RSD formatting */}
            <div>
              <label htmlFor="kredit" className="block text-sm font-medium text-gray-700">
                Kredit limit
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="kredit"
                  id="kredit"
                  min={0}
                  step={0.01}
                  value={formData.kredit}
                  onChange={(e) => handleInputChange('kredit')(parseFloat(e.target.value))}
                  className="px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">Maksimalni kredit za partnera u RSD</p>
            </div>
          </div>
        </fieldset>

        {/* === NAPOMENA === */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-medium px-2">Napomena</legend>
          <div>
            <textarea
              name="napomena"
              id="napomena"
              rows={4}
              maxLength={500}
              value={formData.napomena}
              onChange={(e) => handleInputChange('napomena')(e.target.value)}
              placeholder="Dodatne informacije o partneru, uslovi saradnje, kontakt detalji..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm resize-y"
            />
            <p className="mt-2 text-sm text-gray-500">Opcionalne napomene i komentari (maksimalno 500 karaktera)</p>
          </div>
        </fieldset>

        {/* === FORM ACTIONS === */}
        <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
          <button
            type="button"
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md shadow-sm text-sm"
            onClick={onCancel}
            disabled={loading}
          >
            Otkaži
          </button>
          
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm text-sm disabled:opacity-50"
            disabled={loading || !formData.sifraPartner || !formData.nazivPartnera || !formData.pib}
          >
            {isEditMode ? 'Ažuriraj partnera' : 'Kreiraj partnera'}
          </button>
        </div>
      </form>
    </div>
  );
};
