import { FaUserDoctor } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";
import { FaDiagnoses } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { LuReceiptText } from "react-icons/lu";
import { PiHeartbeat } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { TbMassage } from "react-icons/tb";
import { LuAmbulance } from "react-icons/lu";
import { PiHospitalLight } from "react-icons/pi";

export const services = [
    {
        id: 1,
        icon: PiHeartbeat,
        title: "Kardiologiya",
        description: "Kardiologiya şöbəsində ürək sit amet, consectetur adipiscing elit, sed do eiusmod",
        image: "/urolog.webp",
        updatedAt: new Date().toISOString(),



    },
    {
        id: 2,
        icon: LuBrain,
        title: "Nevrologiya",
        image: "/urolog.webp",
        updatedAt: new Date().toISOString(),
        description: "Nevrologiya şöbəsində nevroloji xəstəliklər müayinə və müalicə olunur. Nevroloji xəstəliklərin dəqiq diaqnostikası aparılır.",

    },
    {
        id: 3,
        icon: IoEyeOutline,
        title: "Oftalmologiya",
        updatedAt: new Date().toISOString(),
        image: "/urolog.webp",
        description: "Oftalmologiya göz xəstəliklərinin erkən mərhələlərdə aşkar edilməsi, müalicələri həyata keçirilir.",

    },
    {
        id: 4,
        icon: FaUserDoctor,
        title: "Endokrinologiya",
        updatedAt: new Date().toISOString(),
        description: "Endokrinoloji xəstəliklərin müayinə və müalicəsi, fəsadlaşmalarının diaqnostika və profilaktikası həyata keçirilir.",

    },
    {
        id: 5,
        icon: TbDental,
        title: "Stomatologiya",
        updatedAt: new Date().toISOString(),

        description: "Dişlərin, diş ətinin, diş-çənə sisteminin, ağız boşluğu toxumalarının, profilaktikası və müalicəsi ilə məşgul olan tibb sahəsidir.",

    },
    {
        id: 6,
        icon: TbMassage,
        title: "Fizioterapiya",

        description: "Zədə, azalma göstərən funksional hərəkətləri geri qazandırma məqsədli edilən elektrik cərəyanı xəstələrin müalicəsinə verilən addır.",

    },
    {
        id: 7,
        icon: LuAmbulance,
        title: "Təcili yardım",
        updatedAt: new Date().toISOString(),

        description: "Təcili tibbi yardım şöbəmiz müasir avadanlıqlarla təchiz olunmuşdur, diaqnostik-müalicəvi prosedurlar operativ və keyfiyyətlə həyata keçirilir.",

    },
    {
        id: 8,
        icon: PiHospitalLight,
        updatedAt: new Date().toISOString(),
        title: "Reanimasiya",
        description: "Reanimasiyada süni tənəffüs aparatına ehtiyacı olan və xüsusi baxım tələb olunan xəstələr yatırılır.",

    },
];
