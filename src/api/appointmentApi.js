import api from "./axios";

// GET all appointments
export const fetchAppointments = async () => {
  const response = await api.get("/appointments");
  return response.data;
};

// CREATE new appointment
export const createAppointment = async (appointmentData) => {
  const response = await api.post("/appointments", appointmentData);
  return response.data;
};