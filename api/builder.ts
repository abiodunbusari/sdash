import { createBuilder } from "@ibnlanre/portal";
import { API } from "./axios-config";

export const builder =createBuilder({
    transaction:{
        latest:{
            fetch:()=>API.get('/transactions/latest')
        }
    }
})