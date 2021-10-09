class FreqMap {
  constructor() {
    this.map = {};
  }

  insert(key) {
    if (!this.map[key]) this.map[key] = 1;
    else this.map[key]++;
    return key;
  }

  inorder() {
    return Object.keys(this.map)
      .map((str) => parseInt(str))
      .sort();
  }

  search(key) {
    return this.map[key] != undefined;
  }

  delete(key) {
    if (this.map[key] > 1) this.map[key]--;
    else delete this.map[key];
    return key;
  }
}

module.exports = FreqMap;
