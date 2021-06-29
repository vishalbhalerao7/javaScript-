function Product(name, brand, price) {
  this.name = name;
  this.brand = brand;
  this.price = Number(price);
}

const p1 = new Product("Iphone", "Apple", 50000);
const p2 = new Product("Galaxy", "Samsung", 40000);
const p3 = new Product("Lumia", "Nokia", 35000);
const p4 = new Product("Gseries", "Motorola", 20000);
const p5 = new Product("Note11", "LG", 45000);
const p6 = new Product("K18", "Lenovo", 48000);

//TODO: Create array and push object in 'productList' Array

const productList = [];

productList.push(p1);
productList.push(p2);
productList.push(p3);
productList.push(p4);
productList.push(p5);
productList.push(p6);

console.log(productList);

// copy the  productList array  into productListView array.
console.log("---productListView array -----");

const productListView = new Array(...productList);
console.log(productListView);

// 1]- Try printing the object properties of every product in the format: <name> from <brand> is priced at INR <price></price>

for (let i = 0; i < productListView.length; i++) {
  const data = `${productListView[i].name} from ${productListView[i].brand} is priced at INR ${productListView[i].price}`;
  console.log(data);
}

// 2] - Try Sorting the data based on price (try both ascending and descending)
// Ascending

console.log("------ ascending ------");
const objSortPriceAscending = [...productListView];
objSortPriceAscending.sort(function (a, b) {
  return a.price - b.price;
});
console.log(objSortPriceAscending);

// decending
console.log("---------decending--------'");
const objSortPriceDecending = [...productListView];
objSortPriceDecending.sort(function (c, d) {
  return d.price - c.price;
});
console.log(objSortPriceDecending);

// 3]- Try Sorting the data based on first letter of the name property (try both ascending and descending)

console.log(
  "------ ascending data based on first letter of name property------"
);

const nameSortAscending = [...productListView];
nameSortAscending.sort(function (a, b) {
  const nA = a.name.toLowerCase();
  const nB = b.name.toLowerCase();

  if (nA < nB) return -1;
  else if (nA > nB) return 1;
  return 0;
});

console.log(nameSortAscending);

console.log(
  "---------decending  data based on first letter of name property--------'"
);

const nameSortdescending = [...productListView];
nameSortdescending.sort(function (a, b) {
  const nA = a.name.toLowerCase();
  const nB = b.name.toLowerCase();

  if (nA > nB) return -1;
  else if (nA < nB) return 1;
  return 0;
});

console.log(nameSortdescending);

// // 4] Try filtering the data using name property and a search string

console.log("---filter the data---");

let filterData = [];
for (let i = 0; i < productListView.length; i++) {
  if (productListView[i].name == "Iphone") {
    filterData.push(productListView[i]);
  }
}
console.log(filterData);

// // 5] Add a function which converts the data (Product Array) in a string format in the following format.:
// // properties of an object should be separated by comma and each product should be separated by a pipe (|)
// // ex: iphone,apple,50000|s3,samsung,35000

console.log("-----Whole Product data in single string-----");

let productArray = [];
const productFormat = () => {
  for (let i = 0; i < productListView.length; i++) {
    productArray.push(
      `${productListView[i].name},${productListView[i].brand}, ${productListView[i].price} `
    );
  }
  return productArray;
};
productFormat();
console.log(productArray.join("|"));
