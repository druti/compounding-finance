function compound({ investment, rate = 0.05 }) {
    const difference = investment * rate;
    const result = investment + difference;

    return {
      difference,
      result,
    };
}


function calcCompound({ investment, target, rate = 0.05, unit = 'years', max }) {
    if (typeof investment === 'string') {
      investment = Number(investment);
    }

    if (typeof max === 'string') {
      max = Number(max);
    }

    let index = 0;

    while (index <= max) {
        const { difference, result } = compound({ investment, rate });

        console.log(`${index} ${unit}: ${investment} ${difference >= 0 ? `+ ${difference}` : `- ${-1 * difference}`} = ${result}`);

        investment = result;

        index = index + 1;
    }
}

const args = process.argv.reduce((args, arg) => {
  const key = arg.split('=')[0];
  const value = arg.split('=')[1];
  args[key] = value;
  return args;
}, {});

calcCompound({
  ...{
    investment: 1000000,
    target: 0,
    rate: 0.5,
    max: 50,
  },
  ...args,
});
