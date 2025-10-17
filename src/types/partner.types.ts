// DIREKTNO KOPIRANO iz postojećeg React Native koda - 100% kompatibilno
export interface Partner {
  idPartner: number;
  sifraPartner: string;
  nazivPartnera: string;
  adresa?: string;
  idMesto: number;
  nazivMesta?: string;
  pib: string;
  telefon?: string;
  fax?: string;
  idReferent?: number;
  nazivReferenta?: string;
  napomena?: string;
  kontakt?: string;
  idStatus: number;
  nazivStatusa?: string;
  idDrzava?: number;
  nazivDrzave?: string;
  rabat: number;
  kasa: number;
  idNacinPlacanja?: number;
  nazivNacinaPlacanja?: string;
  idCenovnaGrupa?: number;
  konto?: string;
  idPartnerGlavni?: number;
  nazivPartneraGlavnog?: string;
  pdvBroj?: string;
  maticniBroj?: string;
  sifraSort?: string;
  idVrstaPartnera: number;
  nazivVrstePartnera?: string;
  proizvodjac?: number;
  brojUgovora?: string;
  datumUgovora?: Date;
  kredit: number;
  datumOtvaranja?: Date;
  njihovaSifraZaNas?: string;
  bezZabrane?: number;
  tolerancijaValute?: number;
  odlozenoPlacanje?: boolean;
  kategorijaKupca?: string;
  staraSifra?: string;
}

export interface PartnerCreateDto {
  sifraPartner: string;
  nazivPartnera: string;
  adresa?: string;
  idMesto: number;
  pib: string;
  telefon?: string;
  fax?: string;
  idReferent?: number;
  napomena?: string;
  kontakt?: string;
  idStatus?: number;
  idDrzava?: number;
  rabat?: number;
  kasa?: number;
  idNacinPlacanja?: number;
  idCenovnaGrupa?: number;
  konto?: string;
  idPartnerGlavni?: number;
  pdvBroj?: string;
  maticniBroj?: string;
  sifraSort?: string;
  idVrstaPartnera: number;
  proizvodjac?: number;
  brojUgovora?: string;
  datumUgovora?: Date;
  kredit?: number;
  datumOtvaranja?: Date;
  njihovaSifraZaNas?: string;
  bezZabrane?: number;
  tolerancijaValute?: number;
  odlozenoPlacanje?: boolean;
  kategorijaKupca?: string;
  staraSifra?: string;
}

export interface PartnerUpdateDto extends PartnerCreateDto {
  idPartner: number;
}

export interface PartnerCombo {
  idPartner: number;
  sifraPartner: string;
  nazivPartnera: string;
  nazivMesta?: string;
  idStatus: number;
  nazivStatusa?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: string[];
}

// Lookup items za dropdowns
export interface LookupItem {
  id: number;
  naziv: string;
}