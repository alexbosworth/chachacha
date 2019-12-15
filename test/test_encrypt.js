const {test} = require('tap');

const encrypt = require('./../encrypt');

const tests = [
  {
    args: {
      associated: '90578e247e98674e661013da3c5c1ca6a8c8f48c90b485c0dfa1494e23d56d72',
      key: '908b166535c01a935cf1e130a5fe895ab4e6f3ef8855d87e9b7581c4ab663ddc',
      nonce: '000000000100000000000000',
      plain: '034f355bdcb7cc0af728ef3cceb9615d90684bb5b2ca5f859ab0f0b704075871aa',
    },
    description: 'A plain text is encrypted',
    expected: {
      cipher: 'b9e3a702e93e3a9948c2ed6e5fd7590a6e1c3a0344cfc9d5b57357049aa22355361aa02e55a8fc28fef5bd6d71ad0c3822',
    },
  },
];

tests.forEach(({args, description, error, expected}) => {
  return test(description, ({end, equal, throws}) => {
    if (!!error) {
      throws(() => encrypt(args), new Error(error), 'Got expected error');
    } else {
      equal(encrypt(args).cipher, expected.cipher, 'Got expected encrypted');
    }

    return end();
  });
});

