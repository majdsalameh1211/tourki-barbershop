import ClientForm from '../../components/ClientForm/ClientForm';

const Step3ClientInfo = ({
  clientName,
  clientPhone,
  hasWhatsApp,
  onUpdateName,
  onUpdatePhone,
  onUpdateWhatsApp
}) => {
  return (
    <ClientForm
      clientName={clientName}
      clientPhone={clientPhone}
      hasWhatsApp={hasWhatsApp}
      onUpdateName={onUpdateName}
      onUpdatePhone={onUpdatePhone}
      onUpdateWhatsApp={onUpdateWhatsApp}
    />
  );
};

export default Step3ClientInfo;