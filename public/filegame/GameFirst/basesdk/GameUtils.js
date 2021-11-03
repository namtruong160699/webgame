class GameUtils {

    static isEmpty(value) {
        return (value == null || value === '' || value === undefined || value == NaN);
    }

    static getType(objCheck) {
        if (GameUtils.isEmpty(objCheck)) {
            return -1;
        } else if (typeof(objCheck) === 'number') {
            if (Number(objCheck) === objCheck && objCheck % 1 === 0) {
                return 0; //Int
            }

            return 1; //float
        } else if (typeof(objCheck) === 'string') {
            return 2;
        } else if (typeof(objCheck) === 'boolean') {
            return 3;
        } else if (Array.isArray(objCheck)) {
            return 4;
        } else if (typeof(objCheck) === 'object') {
            return 5;
        } else if (typeof(objCheck) === 'function') {
            return 6;
        }
    }

    static getTrueValue(obj) {
        if (typeof(obj) === 'object') {
            return obj["v"];
        } else {
            return obj;
        }
    }
}