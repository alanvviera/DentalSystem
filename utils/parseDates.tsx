const dateToString = (date: Date) => {
    const dateToUtc: Date = convertDateToUTC(date);
    const dateStr: string =
        ("00" + dateToUtc.getDate()).slice(-2) + "/" +
        ("00" + (dateToUtc.getMonth() + 1)).slice(-2) + "/" +
        dateToUtc.getFullYear() + " " +
        ("00" + dateToUtc.getHours()).slice(-2) + ":" +
        ("00" + dateToUtc.getMinutes()).slice(-2)
    // + ":" + ("00" + date.getSeconds()).slice(-2);

    return dateStr;
}

const dateToStringWithoutTime = (date: Date) => {
    const dateToUtc: Date = convertDateToUTC(date);
    const dateStr: string =
        ("00" + dateToUtc.getDate()).slice(-2) + "/" +
        ("00" + (dateToUtc.getMonth() + 1)).slice(-2) + "/" +
        dateToUtc.getFullYear()
    // + ":" + ("00" + date.getSeconds()).slice(-2);

    return dateStr;
}

const dateToStringWithOnlyTime = (date: Date) => {
    const dateToUtc: Date = convertDateToUTC(date);
    const dateStr: string =
    ("00" + dateToUtc.getHours()).slice(-2) + ":" +
    ("00" + dateToUtc.getMinutes()).slice(-2)
    // + ":" + ("00" + date.getSeconds()).slice(-2);

    return dateStr;
}



function convertDateToUTC(date: Date) { return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()); }

export {
    dateToString,
    dateToStringWithoutTime,
    dateToStringWithOnlyTime
}