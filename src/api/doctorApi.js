import api from "./axios";

export const fetchDoctors = async () => {
  const res = await api.get("/doctors");
  return res.data;
};

export const createDoctor = async (doctor) => {
  const res = await api.post("/doctors", doctor);
  return res.data;
};