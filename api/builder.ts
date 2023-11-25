import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { IForecast, IOverview, TransanctionDetails } from "@/types";

export const builder =createBuilder({
    transactions:{
        latest:{
            fetch:()=>API.get<TransanctionDetails>('/transactions/latest')
        },
        overview:{
            fetch:()=>API.get<IOverview>('/transactions/overview')
        }
    },
    supplies:{
        forecast:{
            fetch:()=>API.get<IForecast>(`/supplies/forecast`)}
    }
})