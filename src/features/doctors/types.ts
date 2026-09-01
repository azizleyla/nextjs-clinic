export type DoctorEducation = {
  years: string;
  place: string;
  position?: string;
};

export type DoctorExperience = {
  years: string;
  place?: string;
  position?: string;
};

export type DoctorBranch = {
  phone?: string[];
  short_name?: string;
};

/** Bir iş günü: day = mon..sun, from/to = "09:00" formatı. */
export type DoctorWorkHour = {
  day: string;
  from: string;
  to: string;
};

export type Doctor = {
  id: number;
  name: string;
  specialty?: string;
  img_url?: string;
  department_id?: number;
  branch?: DoctorBranch;
  education?: DoctorEducation[];
  experience?: DoctorExperience[];
  work_hours?: DoctorWorkHour[];
  updatedAt: string;
};
