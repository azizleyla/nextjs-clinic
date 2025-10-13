// utils/slug.js
export function generateSlug(title) {
    const map = {
        ə: "e",
        Ə: "e",
        ı: "i",
        İ: "i",
        ö: "o",
        Ö: "o",
        ü: "u",
        Ü: "u",
        ş: "s",
        Ş: "s",
        ç: "c",
        Ç: "c",
        ğ: "g",
        Ğ: "g",
    };

    return title
        .split("")
        .map((char) => map[char] || char) // hər Azərbaycan hərfini dəyiş
        .join("")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-") // boşluqları və xüsusi simvolları "-" ilə əvəzlə
        .replace(/(^-|-$)/g, "");    // başlanğıc və sondakı "-" işarəsini sil
}
