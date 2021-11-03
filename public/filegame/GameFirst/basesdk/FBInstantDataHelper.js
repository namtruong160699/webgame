class FBInstantDataHelper {


    static getAllData(keys, arrValue, cbLoaded, cbLoadFailed) {

        const arrKey = Array.from(keys);
        FBInstant.player
            .getDataAsync(arrKey)
            .then(function(data) {
                let arrKeysUnSave = [];
                let arrValsUnSave = [];

                let saveData = false;

                for (let i = 0; i < arrKey.length; ++i) {
                    if (!GameUtils.isEmpty(data[arrKey[i]])) {
                        LogHelper.LogD("FBInstantDataHelper getAllData data[" + i + "]=" + data[arrKey[i]]);
                        arrValue[i] = data[arrKey[i]];
                    } else {
                        LogHelper.LogD("FBInstantDataHelper getAllData key=" + arrKey[i] + " data=empty");
                        arrKeysUnSave.push(arrKey[i]);
                        arrValsUnSave.push(arrValue[i]);

                        saveData = true;
                    }
                }

                if (cbLoaded != null) {
                    cbLoaded(arrValue);

                    if (saveData) {
                        FBInstantDataHelper.setAllData(arrKeysUnSave, arrValsUnSave, null);
                    }
                }
            })
            .catch(function(err) {
                LogHelper.LogD("FBInstantDataHelper getAllData err=" + err.message);
                FBInstantDataHelper.setAllData(arrKey, arrValue, null);
                if (cbLoadFailed != null) {
                    cbLoadFailed();
                }
            });
    }

    static setAllData(keys, values, cbSetOk) {
        LogHelper.LogD("FBInstantDataHelper setAllData keys=" + keys + " _ values=" + values);

        if (Array.isArray(keys) && Array.isArray(values) && keys.length == values.length && keys.length > 0) {

            // const arrDat = new Map();
            let strKey = "";
            let objData = {};

            for (let j = 0; j < keys.length; ++j) {
                LogHelper.LogD("FBInstantDataHelper setAllData keys=" + keys[j] + " values=" + values[j]);
                strKey = keys[j];

                objData[strKey] = GameUtils.getTrueValue(values[j]);
            }



            if (GameUtils.isEmpty(this.isSaving)) {
                this.arrKeyQueue = [];
                this.arrValueQueue = [];
                this.isSaving = false;
            }

            if (this.isSaving) {
                this.arrKeyQueue.concat(keys);
                this.arrValueQueue.concat(values);
                return;
            }

            this.arrKeyQueue.splice(0, this.arrKeyQueue.length);
            this.arrValueQueue.splice(0, this.arrValueQueue.length);
            this.isSaving = true;
            // const objDat = Object.fromEntries(arrDat);
            FBInstant.player
                .setDataAsync(objData)
                .then(FBInstant.player.flushDataAsync)
                .then(function() {
                    LogHelper.LogD("FBInstantDataHelper setAllData successful");
                    FBInstantDataHelper.isSaving = false;
                    if (cbSetOk != null) {
                        cbSetOk();
                    }
                    FBInstantDataHelper.checkDataQueue();
                });
        }

    }

    static checkDataQueue() {
        if (this.arrKeyQueue.length > 0 && this.arrValueQueue.length > 0) {
            this.setAllData(this.arrKeyQueue, this.arrValueQueue, null);
        }
    }

}