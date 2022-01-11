function time(hours, minutes) {
    console.log(`It is ${hours}:${minutes}`);
}

function counter(num, times) {
    num += times;
    console.log(num);
}

module.exports = {
    time,
    counter
}
