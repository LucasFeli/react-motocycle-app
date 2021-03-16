import axios from "axios";

const motocycleApi = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true,
});

export const getMotocycles =()=> motocycleApi.get("/motocycles");

export const getMotocycle =(motocycleId)=> motocycleApi.get(`/motocycles/${motocycleId}`);

export const createMotocycle =(body,file)=> motocycleApi.post("/motocycles/create", body, file);

export const updateMotocycle =(motocycleId, body)=> motocycleApi.patch(`/motocycles/${motocycleId}`, body);

export const deleteMotocycle =(motocycleId)=> motocycleApi.delete(`/motocycles/${motocycleId}`);
