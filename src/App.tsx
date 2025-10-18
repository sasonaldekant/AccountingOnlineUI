import React, { useState } from 'react';
import { PartnerListScreen } from './screens/PartnerListScreen';
import { PartnerForm } from './components/PartnerForm';
import { Partner } from './types/partner.types';

const App: React.FC = () => {
  const [selectedPartnerId, setSelectedPartnerId] = useState<number | undefined>();
  const [currentView, setCurrentView] = useState<'list' | 'form' | 'edit'>('list');

  const handlePartnerCreate = () => {
    setSelectedPartnerId(undefined);
    setCurrentView('form');
  };

  const handlePartnerEdit = (partner: Partner) => {
    setSelectedPartnerId(partner.idPartner);
    setCurrentView('edit');
  };

  const handlePartnerSave = () => {
    setCurrentView('list');
    setSelectedPartnerId(undefined);
  };

  const handleCancel = () => {
    setCurrentView('list');
    setSelectedPartnerId(undefined);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'list' && (
        <PartnerListScreen
          onPartnerCreate={handlePartnerCreate}
          onPartnerEdit={handlePartnerEdit}
        />
      )}

      {(currentView === 'form' || currentView === 'edit') && (
        <PartnerForm
          partnerId={selectedPartnerId}
          onSave={handlePartnerSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default App;