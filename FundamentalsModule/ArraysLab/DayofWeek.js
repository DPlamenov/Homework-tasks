function f(day) {
    let dayOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (Number(day) >= 1 && Number(day) <= 7) {
        console.log(dayOfWeek[day - 1]);
    }else{
        console.log("Invalid day!");
    }
}