export const formatDate = (dateStr: string): string => {
    const timestamp = Date.parse(dateStr);
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US");
  };