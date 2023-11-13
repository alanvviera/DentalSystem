export default class CustomInputMantine{
    constructor(label,placeHolder,valueKey,typeInputForm,extraClassname){
        this.label = label;
        this.placeHolder= placeHolder;
        this.valueKey= valueKey;
        this.typeInputForm = typeInputForm;
        this.extraClassname = extraClassname;
    }
}

export const typeInputForm = {
    TEXT: "TEXT",
    NUMBER: "NUMBER",
    PASSWORD: "PASSWORD"
}