class Article {
    #comments = [];

    #likes = [];
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error("You can't like the same article twice!");
        }
        if (username === this.creator) {
            throw new Error("You can't like your own articles!");
        }

        this.#likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    get likes() {
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this.#likes.length === 1) {
            return `${this.#likes[0]} likes this article!`;
        }

        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this article!`;
    }

    dislike(username) {
        const indexOf = this.#likes.indexOf(username);
        if (indexOf >= 0) {
            this.#likes.splice(indexOf, 1);
            return `${username} disliked ${this.title}`;
        }
        throw new Error("You can't dislike this article!");
    }

    comment(username, content, id) {
        let comment = this.#comments.find(e => e.Id === id);
        // console.log(this.#comments);
        if (id === undefined || comment === undefined) {
            let n = this.#comments.map(e => e.Id);
            let id = n.length > 0 ? Math.max(...n) + 1 : 1;
            let comment =
                {Id: id, Username: username, Content: content, Replies: []};

            this.#comments.push(comment);
            return `${username} commented on ${this.title}`;
        } else {
            let reply = {Username: username, Content: content};
            let id = comment.Replies.length;
            reply.Id = `${comment.Id}.${id + 1}`;
            // console.log(th)
            comment.Replies.push(reply);
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        let output = [];
        output.push(`Title: ${this.title}`);
        output.push(`Creator: ${this.creator}`);
        output.push(`Likes: ${this.#likes.length}`);
        output.push(`Comments:`);
        let sorting = {
            username: (a, b) =>
                a.Username.localeCompare(b.Username),
            asc: (a, b) =>
                a.Id - b.Id,
            desc: (a, b) =>
                b.Id - a.Id
        };

        let sorted;

        sorted = this.#comments.map(e => {
            e.Replies.sort(sorting[sortingType]);
            return e;
        }).sort(sorting[sortingType]);

        sorted.forEach(function (element) {
            output.push(`-- ${element.Id}. ${element.Username}: ${element.Content}`);
            element.Replies.forEach(function (reply) {
                output.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`);
            });
        });
        return output.join('\n');
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
// console.log(art.comment("SAmmy", "Reply@", 2));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
// console.log()
art.like('1');
art.like('12');
console.log(art.likes);
