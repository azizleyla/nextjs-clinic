import type { IconType } from "react-icons";
import { FaEye } from "react-icons/fa";
import {
  FaHeartPulse,
  FaBrain,
  FaTooth,
  FaHospital,
  FaHandHoldingMedical,
  FaTruckMedical,
  FaStethoscope,
  FaBaby,
  FaSyringe,
  FaNotesMedical,
  FaBriefcaseMedical,
  FaUserNurse,
} from "react-icons/fa6";

/**
 * Semantik ikon açarı → react-icons komponenti.
 *
 * DB-də `departments.icon_name` yalnız bu açarlardan birini saxlayır (məs.
 * "cardiology"). Açar dəsti backend (`departments.constants.js`) və admin panel
 * (`clinic-admin-front/.../icons.tsx`) ilə EYNİ olmalıdır.
 *
 * Yeni şöbə tipi əlavə edəndə açarı hər üç yerə eyni adla əlavə edin.
 */
export const departmentIcons: Record<string, IconType> = {
  cardiology: FaHeartPulse,
  neurology: FaBrain,
  ophthalmology: FaEye,
  endocrinology: FaSyringe,
  dentistry: FaTooth,
  physiotherapy: FaHandHoldingMedical,
  emergency: FaTruckMedical,
  reanimation: FaBriefcaseMedical,
  urology: FaStethoscope,
  pediatrics: FaBaby,
  surgery: FaUserNurse,
  general: FaHospital,
};

/** Naməlum / köhnə / boş açar üçün heç vaxt crash etməyən default. */
export const FALLBACK_ICON: IconType = FaHospital;

export function getDepartmentIcon(key?: string | null): IconType {
  return departmentIcons[String(key ?? "").trim()] ?? FALLBACK_ICON;
}
