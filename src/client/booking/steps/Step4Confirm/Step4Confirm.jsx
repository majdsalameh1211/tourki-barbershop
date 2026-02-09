import BookingSummary from '../../components/BookingSummary/BookingSummary';

const Step4Confirm = ({ bookingData }) => {
  return (
    <BookingSummary
      bookingData={bookingData}
      showInfoBox={true}
    />
  );
};

export default Step4Confirm;