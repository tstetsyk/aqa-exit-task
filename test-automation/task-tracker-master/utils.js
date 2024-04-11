export function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

export function dateToTableFormat(numOfDaysToAdd) {
    // YYYY-MM-DD
    const date = new Date();

    if(numOfDaysToAdd) {
        date.setDate(date.getDate() + numOfDaysToAdd)
    }
    
    const day = date.toLocaleString('En-US', {day: "2-digit"})
    const month = date.toLocaleString('En-US', {month: "2-digit"})
    const year = date.getFullYear()

    return `${year}-${month}-${day}`
}