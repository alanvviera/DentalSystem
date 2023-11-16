export default class CustomInputMantine{
    constructor(label,placeHolder,valueKey,typeInputForm,initialDate){
        this.label = label;
        this.placeHolder= placeHolder;
        this.valueKey= valueKey;
        this.typeInputForm = typeInputForm;
        this.initialDate = initialDate;
    }
}

export const typeInputForm = {
    TEXT: "TEXT",
    NUMBER: "NUMBER",
    PASSWORD: "PASSWORD",
    DATEPICKER: "DATEPICKER",
    DATETIME: "DATETIME"
}