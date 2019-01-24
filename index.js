const amount = 100;
for (let i=1; i<=amount;i++) {
  if (i%3 == 0 && i%5 == 0) {
    console.log('IceCream');
  } else if (i%3 == 0) {
    console.log('Ice');
  } else if (i%5 == 0) {
    console.log('Cream');
  } else {
    console.log(i);
  }
}
