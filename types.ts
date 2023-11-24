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
