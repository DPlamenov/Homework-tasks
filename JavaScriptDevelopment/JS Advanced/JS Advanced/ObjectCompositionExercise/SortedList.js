function solve() {
    let collection = [];

    let object = {
        add(element) {
            collection.push(element);
            sort(collection);
        },
        remove(index) {
            if (index >= 0 && index < collection.length) {
                collection.splice(index, 1);
            }
        },
        get(index) {
            if (index >= 0 && index < collection.length) {
                return collection[index];
            }
        }
    };

    function sort(collection) {
        return collection.sort((a, b) => {
            return a - b;
        });
    }

    Object.defineProperty(object, 'size', {
        get() {
            return collection.length;
        }
    });

    return object;
}