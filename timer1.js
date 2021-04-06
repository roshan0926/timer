let arg = process.argv
arg = arg.slice(2)
  if (arg <= 0 || arg !== Number) {
    return ''
  } else {arg.forEach((time) => {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    })
};