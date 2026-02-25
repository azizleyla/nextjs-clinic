import { Doctor } from "@/features/doctors/types";

export const doctors:Doctor[] = [
    {
        id: 1,
        name: "Dr. John Doe",
        specialty: "Ümumi cərrah",
        img_url: "images/doctor1.jpg",
        updatedAt: new Date().toISOString(),
        experience: [
            { years: "2013-2023-cü il", place: "Mərkəzi Gömrük Hospitalı", position: "Anesteziya və ICU üzrə mütəxəssis" },
            { years: "2000-2009-cu il", place: "Tibb Mərkəzi", position: "Baş həkim" },
            { years: "2009-2013-cü il", place: "Şahzadə Abdulrahman Al-Sudairy Mərkəzi Xəstəxanası", position: "Anesteziya və ICU üzrə mütəxəssis" },
            { years: "", place: "Baku Medical Plaza Mərkəz filialı", position: "Baş həkim" },
        ],
        education: [
            {
                years: "2004 - 2010",
                place: "İstanbul Universiteti İstanbul Tibb Fakültəsi",
            },
            {
                years: "2011 - 2015",
                place:
                    "İstanbul Universiteti İstanbul Tibb Fakültesi İç Xəstəlikləri Uzmanlığı",
            },
            {
                years: "2013 - 2014",
                place: "Cleveland Clinic Endokrinologiya Kafedrası Elmi işçi",
            },
            {
                years: "2016 - 2019",
                place:
                    "Bezmi Aləm Vakıf Universiteti Tibbi Onkologiya Yan Dal Uzmanlığı",
            },
        ],

    },
    {
        id: 2,
        name: "Dr. Jane Smith",
        specialty: "Dermatoloq",
        img_url: "images/doctor2.jpg",
        updatedAt: new Date().toISOString(),

    },
    {
        id: 3,
        name: "Dr. Mike Brown",
        specialty: "Kardioloq",
        img_url: "images/doctor3.jpg",
        updatedAt: new Date().toISOString(),

    },
    {
        id: 4,
        name: "Dr. Mike Brown",
        specialty: "Kardioloq",
        img_url: "images/doctor1.jpg",
        updatedAt: new Date().toISOString(),

    },
    {
        id: 5,
        name: "Dr. Mike Brown",
        specialty: "Kardioloq",
        img_url: "images/doctor3.jpg",
        updatedAt: new Date().toISOString(),

    },
    {
        id: 6,
        name: "Dr. Mike Brown",
        specialty: "Kardioloq",
        img_url: "images/doctor2.jpg",
        updatedAt: new Date().toISOString(),

    },
];

