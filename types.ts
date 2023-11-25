export interface TransanctionDetails {
    message:       string;
    current_page:  number;
    page_size:     number;
    next_page_url: null;
    prev_page_url: null;
    count:         number;
    data:          Datum[];
}

export interface Datum {
    created_at: Date;
    charged_by: ChargedBy;
    charge:     Charge;     
}

export interface Charge {
    amount:   number;
    currency: Currency;
    type:     string;
}

export interface Currency {
    code: string;
    sign: string;
}

export interface ChargedBy {
    company: string;
    logo:    string;
}


export interface IForecast {
    message:       string;
    current_page:  number;
    page_size:     number;
    next_page_url: null;
    prev_page_url: null;
    count:         number;
    data:          ForecastDatum[];
}

export interface ForecastDatum {
    actual_value:     number;
    forecasted_value: number;
    name:             string;
    q1_variance:      number;
    q2_variance:      number;
    q3_variance:      number;
    q4_variance:      number;
}

export interface IOverview {
    message:       string;
    current_page:  number;
    page_size:     number;
    next_page_url: null;
    prev_page_url: null;
    count:         number;
    data:          OverviewDatum[];
}

export interface OverviewDatum {
    name:       string;
    current:    number;
    last_month: number;
}

export interface IPayoutLog {
    message:       string;
    current_page:  number;
    page_size:     number;
    next_page_url: null;
    prev_page_url: null;
    count:         number;
    data:          PayoutDatum[];
}

export interface PayoutDatum {
    date:             Date;
    salary_paid:      number;
    cash_bond_bought: number;
}

