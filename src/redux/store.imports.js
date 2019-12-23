
const reducersFolder = require.context("./reducers", false, /\.js|\.ts/);
const getFileName = filePath => filePath.replace(/\.js|\.ts|\.\//g, "");


const reducers = reducersFolder.keys().reduce((obj, filePath) => {
    const file = reducersFolder(filePath);
    if (!file.reducer) throw new Error(`${filePath} missing reducer`);
    const name = getFileName(filePath);
    return { ...obj, [name]: file.reducer };
}, {});

export default { reducers };

