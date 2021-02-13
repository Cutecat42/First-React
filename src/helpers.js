const choice = (items) => {
    const rand = Math.floor(Math.random()*items.length);
    return items[rand];
};

const remove = (items, item) => {
    const i = items.indexOf(item);
    if (i === -1) {
        return undefined
    };
    items.splice(i,1);
    return items;
};

export {choice, remove};