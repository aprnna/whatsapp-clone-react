export const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};
export const getTimestampNow = () => {
  return new Date().toISOString();
};

export const showFormattedDateWithTime = (date) => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const inputDate = new Date(date);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const formattedDate = inputDate.toLocaleDateString("id-ID", options);
  const formattedTime = inputDate.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (inputDate.toDateString() === today.toDateString()) {
    return `Hari ini Pukul ${formattedTime}`;
  }
  if (inputDate.toDateString() === yesterday.toDateString()) {
    return `Kemarin Pukul ${formattedTime}`;
  }
  return `${formattedDate}, ${formattedTime}`;
};

export const showFormattedTime = (date) => {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(date).toLocaleTimeString("id-ID", options);
};
