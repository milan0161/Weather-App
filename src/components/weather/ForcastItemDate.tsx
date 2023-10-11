type ForcastItemDateProps = {
  date: string;
};

const ForcastItemDate = ({ date }: ForcastItemDateProps) => {
  const forcastDate = new Date(date).toDateString();
  return <div>{forcastDate}</div>;
};

export default ForcastItemDate;
