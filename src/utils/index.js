export const createSelectOptions = (data, defaultLabel, labelKey) => {
  return [
    { value: null, label: defaultLabel },
    ...data.map((item) => ({
      value: item.id,
      label: item[labelKey],
    })),
  ];
};