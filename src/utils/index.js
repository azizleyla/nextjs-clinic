export const createSelectOptions = (data, defaultLabel, labelKey, locale) => {
  return [
    { value: null, label: defaultLabel },
    ...data.map((item) => ({
      value: item.id,
      label: locale ? item[labelKey][locale] : item[labelKey],
    })),
  ];
};