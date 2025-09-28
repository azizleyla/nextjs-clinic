export const menuItems = [
    { title: "Ana səhifə", href: "/" },
    { title: "Haqqımızda", href: "/about" },
    {
        title: "Şöbələr",
        href: "/services",
        children: [
            { title: "Ümumi cərrahiyə", href: "" },
            { title: "Kardiologiya", href: "" },
            { title: "Laboratoriya", href: "" },
            { title: "Nevrologiya", href: "" },
        ],
    },
    { title: "Həkimlər", href: "/doctors" },
    { title: "Bloq", href: "/blogs" },
    { title: "Əlaqə", href: "/contact" },
];
