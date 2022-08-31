const stocks = {
  Fruits: ["oranges", "bananas", "lemon"],
  Flavor: ["vanilla", "strawberry", "chocolate"],
};

let isShopOpen = true;

const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
};

const kitchen = () => {
  try {
  } catch (error) {
    console.log("customer left", error);
  }
};
