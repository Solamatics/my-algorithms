//handling Promises
const stocks = {
  Fruits: ["oranges", "bananas", "lemon"],
  Flavor: ["vanilla", "strawberry", "chocolate"],
};

// let isShopOpen = true;

// const order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (isShopOpen) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("Shop is closed"));
//     }
//   });
// };

// order(2000, () => console.log(`You just ordered for ${stocks.Fruits[0]}`))
//   .then(() => {
//     return order(0000, () =>
//       console.log(`You selected ${stocks.Flavor[2]} flavor`)
//     );
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`Production has started`);
//     });
//   })
//   .catch(() => {
//     console.log(`Please go back home`);
//   })
//   .finally(() => {
//     console.log(`We have made a nice and good ice-cream`);
//   });

const toppingsChoice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which toppings do you want?"));
    }, 3000);
  });
};

async function kitchen() {
  console.log(" A ");
  console.log(" B ");
  console.log(" C ");

  await toppingsChoice();

  console.log(" D ");
  console.log(" E ");
}

kitchen();

console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others orders");
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others orders");
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking others orders");
