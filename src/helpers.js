const choice = (items) => {
    const rand = Math.floor(Math.random()*items.length);
    return items[rand];
};

// const remove = (props) => {
//     return test
// };

export {choice};