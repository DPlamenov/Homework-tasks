function solve(input) {
    if (!input.dizziness) {
        return input;
    }

    input.dizziness = false;

    input.levelOfHydrated += (0.1 * input.weight * input.experience);
    return input;
}

console.log(solve({
        weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true
    })
)
;