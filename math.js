const add = (a, m) => {
    return a + m;
};
const sub = (a, m) => {
    return a - m;
};
const multi = (a, m) => {
    return a * m;
};


// First way to export custom module 
// module.exports = add;

//second way to export custom module
module.exports={add,sub,multi}
