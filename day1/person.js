// Royal Family Tree

const queen = {
    firstName: 'Elizabeth',
    lastName: 'Windsor',
}

const duke = {
    firstName: 'Philip',
    lastName: 'Windsor',
}

const charles = {
    firstName: 'Charles',
    lastName: 'Windsor',
    parents: [queen, duke]
};

const diana = {
    firstName: 'Diana',
    lastName: 'Spencer',
};

const william = {
    firstName: 'William',
    lastName: 'Windsor',
    parents: [charles, diana],
  };

module.exports={william, diana, charles, queen, duke}