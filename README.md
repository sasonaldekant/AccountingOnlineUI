# AccountingOnlineUI - ERP Frontend

**ERP Accounting Online - DYN-UI React Web Frontend za Partner Management**

🏆 **Milestone 2 Implementation:** DYN-UI Integration & JSON-First Core

---

## 🚀 Features

- **Partner Management** sa DYN-UI komponentama (Mock implementation)
- **JSON-First Development** pattern za rapid prototyping  
- **TypeScript** type safety sa 37 polja exact match
- **Zustand** state management sa optimistic updates
- **Axios** API integration sa error handling
- **Responsive Design** sa Tailwind CSS
- **Enterprise UI** komponente ready for production

## 📋 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/sasonaldekant/AccountingOnlineUI.git
cd AccountingOnlineUI
git checkout feature/milestone2-dyn-ui-components
npm install
```

### 2. Environment Configuration
```bash
# Create .env file
echo "REACT_APP_API_URL=https://localhost:7000/api" > .env
```

### 3. Development
```bash
npm start
# App runs on http://localhost:3000
```

### 4. Build Production
```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── DynUI/           # Mock DYN-UI komponente (TODO: Add to repo)
│   │   └── index.tsx
│   └── PartnerForm.tsx  # Partner create/edit form
├── screens/
│   └── PartnerListScreen.tsx  # Partner grid view (TODO: Add to repo)
├── services/
│   └── partnerApi.ts    # API client za backend
├── stores/
│   └── partnerStore.ts  # Zustand state management  
├── types/
│   └── partner.types.ts # TypeScript interfaces
└── App.tsx              # Main app component (TODO: Add to repo)
```

## 🎯 Milestone 2 Implementation Status

### ✅ **Implemented Files:**
- **partner.types.ts** - TypeScript interfaces (37 fields)
- **partnerApi.ts** - API service sa Axios
- **partnerStore.ts** - Zustand state management
- **PartnerForm.tsx** - DYN-UI form component

### 🔄 **TODO Files:**
- **DynUI/index.tsx** - Mock DYN-UI komponente
- **PartnerListScreen.tsx** - Partner grid view
- **App.tsx** - Main app sa navigation
- **package.json** - Update dependencies

---

## 🔌 Backend Integration

### Prerequisites
1. **AccountingOnline** backend running sa JSON Repository
2. **API endpoints** dostupni na `https://localhost:7000/api`
3. **CORS** konfigurisan za React development server

### API Endpoints
- `GET /api/partners` - Lista svih partnera  
- `GET /api/partners/{id}` - Partner po ID
- `POST /api/partners` - Kreiranje partnera
- `PUT /api/partners/{id}` - Ažuriranje partnera  
- `DELETE /api/partners/{id}` - Brisanje partnera
- `GET /api/partners/combo` - Dropdown data

---

## 🎨 DYN-UI Components

### Mock Implementation (In Progress)
- **DynPage** - Page wrapper sa breadcrumbs
- **DynGrid** - Data table sa sorting/filtering
- **DynInput** - Input komponente sa validation
- **DynSelect** - Dropdown komponente
- **DynButton** - Button variants
- **DynFieldContainer** - Form section grouping

### Production Migration
Zameni mock komponente sa pravim `@dyn-ui/react` library:

```tsx
// Mock (Current)
import { DynPage, DynInput, DynGrid } from '../components/DynUI';

// Production (Future)
import { DynPage, DynInput, DynGrid } from '@dyn-ui/react';
```

---

## 🔄 Database Compliance

### 100% Field Mapping
Svi Partner polja su **exact match** sa tblPartner SQL schema (37 polja).

---

## 📋 Next Steps

1. **Complete remaining files** - DynUI components, PartnerListScreen, App.tsx
2. **Backend Integration Testing** - Connect sa JSON Repository API
3. **Pull Request Creation** - Za merge u main branch
4. **Milestone 3 Preparation** - Enhanced Grid & Document Workflow

---

## 🔗 Related Links

- **Backend**: AccountingOnline - .NET API sa JSON Repository
- **Specification**: ERP V3 DYN-UI Specifikacija
- **Database Schema**: tblPartner SQL definicija

---

**🏆 Milestone 2 Status: 🔄 IN PROGRESS**  
**🗓️ Deadline: 07.11.2025**  
**🚀 Ready for: Complete Implementation**