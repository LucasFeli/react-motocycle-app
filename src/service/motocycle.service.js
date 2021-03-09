import axios from "axios";

const motocycleApi = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export const getMotocycles =()=> motocycleApi.get("/motocycles");

export const getMotocycle =(motocycleId)=> motocycleApi.get(`/motocycles/${motocycleId}`);

export const createMotocycle =(body)=> motocycleApi.post("/motocycles", body);

export const updateMotocycle =(motocycleId, body)=> motocycleApi.patch(`/motocycle/${motocycleId}`, body);

export const deleteMotocycle =(motocycleId)=> motocycleApi.delete(`/motocycle/${motocycleId}`);
