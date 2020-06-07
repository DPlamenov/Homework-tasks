function solution(argument) {
    function getRating(that) {
        let upVotes = that.upvotes;
        let downVotes = that.downvotes;

        let totalVotes = upVotes + downVotes;
        let balance = upVotes - downVotes;

        if (totalVotes < 10) {
            return 'new';
        }
        if ((upVotes / totalVotes) > 0.66) {
            return 'hot';
        }
        if ((downVotes / totalVotes <= 0.66) && balance >= 0 && (upVotes > 100 || downVotes > 100)) {
            return 'controversial';
        }
        if (balance < 0 && totalVotes >= 10) {
            return 'unpopular';
        }
        return 'new';
    }

    if (argument === 'upvote') {
        this.upvotes += 1;
    } else if (argument === 'downvote') {
        this.downvotes += 1;
    } else if (argument === 'score') {
        let n = 0;
        if (this.upvotes + this.downvotes > 50) {
            n = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
        }

        return [this.upvotes + n, this.downvotes + n, this.upvotes - this.downvotes, getRating(this)];
    }
}
