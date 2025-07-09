import dayjs from "dayjs";

export const fullAge = (dob: string) => {
  if (!dob) return null;

  const birthDate = dayjs(dob);
  const today = dayjs();

  const years = today.diff(birthDate, "year");
  const months = today.diff(birthDate.add(years, "year"), "month");
  const days = today.diff(
    birthDate.add(years, "year").add(months, "month"),
    "day"
  );

  let nextBday = birthDate.year(today.year());
  if (nextBday.isBefore(today)) nextBday = nextBday.add(1, "year");

  const daysToBirthday = nextBday.diff(today, "day");

  return { years, months, days, daysToBirthday };
};
