(function str() {
    let extension = {
        ensureStart(str) {
            let string = this.toString();
            if (!this.startsWith(str)) {
                string = str + string;
            }
            return string;
        },
        ensureEnd(str) {
            let string = this.toString();
            if (!this.endsWith(str)) {
                string += str;
            }
            return string;
        },
        isEmpty() {
            return this.toString() === '';
        },
        truncate(n) {
            let string = this.toString();
            if (n <= 3) {
                return '.'.repeat(n);
            }
            if (this.toString().length <= n) {
                return string;
            } else {
                let lastIndex = string
                    .substr(0, n - 2)
                    .lastIndexOf(' ');
                if (lastIndex !== -1) {
                    return string
                        .substr(0, lastIndex) + '...';
                } else {
                    return string
                        .substr(0, n - 3) + '...';
                }
            }
        }
    };
    Object.assign(String.prototype, extension);
    String.format = function (string, ...params) {
        params.forEach((el, i) => {
            string = string.replace(`{${i}}`, el);
        });

        return string;
    };
})();
