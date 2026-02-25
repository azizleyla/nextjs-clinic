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

export type Doctor = {
  id: number;
  name: string;
  specialty?: string;
  img_url?: string;
  department_id?: number;
  branch?: DoctorBranch;
  education?: DoctorEducation[];
  experience?: DoctorExperience[];
  updatedAt: string;
};
