function input_type(value) {
    const num = Number(value)
    if (value.trim().length > 0) {
        if (isNaN(value)) {
            return 'String';
        } else {
            if (Number.isInteger(num)) {
                return 'Integer';
            } else {
                return 'floot';
            }
        }
    } else {
        return "string"
    }
}