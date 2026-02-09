import TimeSlots from '../../components/Timeslots/Timeslots';

const Step2Time = ({ selectedDate, selectedTimeSlot, onSelectTimeSlot }) => {
  return (
    <TimeSlots
      selectedDate={selectedDate}
      selectedTimeSlot={selectedTimeSlot}
      onSelectTimeSlot={onSelectTimeSlot}
      showDateBadge={true}
      showPreview={true}
    />
  );
};

export default Step2Time;