class LogHelper {

    static LogD(content) {
        const isLogD = true;
        if (isLogD) {
            console.log("check: " + content);
        }
    }

    static LogE(content) {
        const isLogE = true;
        if (isLogE) {
            console.log("check error:" + ": " + content);
        }
    }
}