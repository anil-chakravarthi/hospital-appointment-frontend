import api from "./axios";

// GET all patients
export const fetchPatients = async () => {
  const response = await api.get("/patients");
  return response.data;
};

// CREATE new patient
export const createPatient = async (patientData) => {
  const response = await api.post("/patients", patientData);
  return response.data;
};