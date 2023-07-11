export const splitTime = (time) => {
    try {
        const splitTime = time.split(":");
        const splitTimeInt = [parseInt(splitTime[0]),  parseInt(splitTime[1])];
        return {
            hour: (splitTimeInt[0] > 12) ? splitTimeInt[0] - 12 : splitTimeInt[0],
            minutes: splitTimeInt[1],
            type: (splitTimeInt[0] >= 12) ? "pm" : "am"
        }
    } catch (err) {
        return {
            hour: "null",
            minutes: "null",
            type: "null"
        }
    }
}

export const daysText = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']; 