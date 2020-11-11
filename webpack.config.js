class Plugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('Plugin', (compilation, callback) => {
      console.log();
      console.log(Array.from(compilation.fileDependencies));
      console.log();

      callback();
    });
  }
}

module.exports = {
  plugins: [new Plugin()]
};
