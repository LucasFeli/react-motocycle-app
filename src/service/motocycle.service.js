import axios from "axios";

const motocycleApi = axios.create({
  baseURL: "http://localhost:4000/",
  withCredentials: true,
});

export const getMotocycles =()=> motocycleApi.get("/motocycle");

export const getMotocycle =(motocycleId)=> motocycleApi.get(`/motocycle/${motocycleId}`);

export const createMotocycle =(body)=> motocycleApi.post(`/motocycle/${motocycleId}`, body);

export const updateMotocycle =(motocycleId, body)=> motocycleApi.patch(`/motocycle/${motocycleId}`, body);

export const deleteMotocycle =()=> motocycleApi.delete(`/motocycle/${motocycleId}`);
