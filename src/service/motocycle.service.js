import axios from "axios";

const motocycleApi = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true,
});

export const getMotocycles =()=> motocycleApi.get("/motocycles");

export const getMotocycle =(motocycleId)=> motocycleApi.get(`/motocycles/${motocycleId}`);

export const createMotocycle =(body)=> motocycleApi.post("/motocycles/create", body);

export const uploadFileService =(file)=>motocycleApi.post("/motocycles/upload", file)

export const updateMotocycle =(motocycleId, body)=> motocycleApi.put(`/motocycles/${motocycleId}`, body);

export const deleteMotocycle =(motocycleId)=> motocycleApi.delete(`/motocycles/${motocycleId}`);
