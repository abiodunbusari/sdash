import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";
import { TransanctionDetails } from "@/types";

export const builder =createBuilder({
    transaction:{
        latest:{
            fetch:()=>API.get<TransanctionDetails>('/transactions/latest')
        }
    }
})