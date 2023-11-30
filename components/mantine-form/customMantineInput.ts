export default class CustomInputMantine {

    public label: string;
    public placeHolder: string;
    public valueKey: string;
    public typeInputForm: string;
    public initialDate?: Date;
    public allowDecimal?: boolean;
    public maxValue?: number;
    public listItems?: Array<string>;
    public minDate?: Date;


    constructor(label: string, placeHolder: string, valueKey: string, typeInputForm: string, initialDate?: Date, allowDecimal: boolean = true, maxValue: number = 99, listItems?: Array<string>, minDate?:Date) {
        this.label = label;
        this.placeHolder = placeHolder;
        this.valueKey = valueKey;
        this.typeInputForm = typeInputForm;
        this.initialDate = initialDate;
        this.allowDecimal = allowDecimal;
        this.maxValue = maxValue;
        this.listItems = listItems;
        this.minDate = minDate;
    }
}

export const typeInputForm = {
    TEXT: "TEXT",
    NUMBER: "NUMBER",
    PASSWORD: "PASSWORD",
    DATEPICKER: "DATEPICKER",
    DATETIME: "DATETIME",
    SELECTITEMS: "SELECTITEMS"
}