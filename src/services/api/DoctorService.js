// /app/services/api/DoctorService.js
import axiosClient from "./axiosClient";

class DoctorService {
    constructor() {
        this.basePath = "/doctors";
    }

    getAll() {
        return axiosClient.get(this.basePath);
    }
}

export const doctorService = new DoctorService();
