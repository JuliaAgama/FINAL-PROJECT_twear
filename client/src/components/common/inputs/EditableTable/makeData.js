import namor from 'namor';

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    };
    return arr;
};

const newRow = () => (
    {
        rowTitlesHead: namor.generate({ words: 1, numbers: 0 }),
        white: Math.floor(Math.random() * 30),
        red: Math.floor(Math.random() * 100),
        blue: Math.floor(Math.random() * 100),
        green: Math.floor(Math.random() * 100),
    }
);

export default (...lens) => {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
        return {
            ...newRow(),
            subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
        }
        })
    }
    return makeDataLevel()
};
