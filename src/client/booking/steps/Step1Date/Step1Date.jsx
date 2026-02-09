import Calendar from '../../components/Calendar/Calendar';

const Step1Date = ({ selectedDate, onSelectDate }) => {
  return (
    <Calendar
      selectedDate={selectedDate}
      onSelectDate={onSelectDate}
      showPreview={true}
    />
  );
};

export default Step1Date;