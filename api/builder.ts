import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { IForecast, TransanctionDetails } from "@/types";

export const builder =createBuilder({
    transaction:{
        latest:{
            fetch:()=>API.get<TransanctionDetails>('/transactions/latest')
        }
    },
    supplies:{
        forecast:{
            fetch:()=>API.get<IForecast>(`/supplies/forecast`)}
    }
})