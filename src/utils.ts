type Truncate = (
  config: { str: string; length: number; suffix?: string }
) => string;

export const truncate: Truncate = ({ str, length, suffix = '[...]' }) => {
  if (str.length > length) {
    return str.slice(0, length).concat(suffix);
  }
  return str;
};
