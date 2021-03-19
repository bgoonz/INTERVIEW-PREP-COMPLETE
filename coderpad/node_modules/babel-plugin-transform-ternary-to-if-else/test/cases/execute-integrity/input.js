let current = 0;

const run = (index) => {
  if (index !== current) {
    throw new Error(`index[${index}] not equal to current[${current}]`);
  }

  current += 1;

  return index;
}

var output =
  (
    run(0),
    run(1) ? run(2) : run(false)
  ) ?
  run(3) :
  run(false);

var expected = 3;

if (expected !== output) {
  throw new Error(`output[${output}] not equal to expected[${expected}]`);
}
