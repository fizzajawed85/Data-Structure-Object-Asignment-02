"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("\n Object Assignment \n");
var Laptops = ["Laptop 1", "Laptop 2"];
var laptop1 = {
  brand: "Dell",
  model: "XPS 15 (9530)",
  year: 2023,
  bestToday: true,
  price: 2799, // US$ Price
  uses: ["Persnol", "Education", "Office"],
  lapSpecification: {
    CPU: "Intel Core i7-13700H",
    GPU: "Nvidia GeForce RTX 4070",
    RAM: "32GB",
    Storage: "1TB M.2 PCIe NVMe SSD",
    Display: "15.6-inch, 3456 x 2160 OLED Touch",
    Size: "13.6 x 9.1 x 0.7 inches",
    Weight: "4.2 pounds",
  },
};
var lapSpecification = {
  CPU: "Intel Core i7-13700H",
  GPU: "Nvidia GeForce RTX 4070",
  RAM: "32GB",
  Storage: "1TB M.2 PCIe NVMe SSD",
  Display: "15.6-inch, 3456 x 2160 OLED Touch",
  Size: "13.6 x 9.1 x 0.7 inches",
  Weight: "4.2 pounds",
};
console.log(Laptops[0]);
console.log(laptop1);
console.log(
  laptop1.brand,
  laptop1.model,
  laptop1.price,
  laptop1.year,
  laptop1.uses,
  laptop1.lapSpecification
);
console.log(laptop1.uses[0], laptop1.uses[7], laptop1.uses[2], laptop1.uses[1]);
console.log(
  laptop1.lapSpecification.CPU,
  laptop1.lapSpecification.Display,
  laptop1.lapSpecification.GPU,
  laptop1.lapSpecification.RAM,
  laptop1.lapSpecification.Weight,
  laptop1.lapSpecification.Size,
  laptop1.lapSpecification.Storage
);
console.log(lapSpecification);
var laptop2 = {
  brand: "Dell",
  model: "XPS 16 (2024)",
  year: 2024,
  bestToday: true,
  price: 3399, // US$ Price
  uses: ["Persnol", "Education", "Office"],
  lapSpecification: {
    CPU: "Intel Core Ultra 7 155H ",
    GPU: "NvidiaRTX 4070, Intel Arc (8 Xe cores, iGPU)",
    RAM: "32GB LPDDR5x",
    Storage: "1TB PCle Gen4 SSD",
    Display: "16.3-inch 4K=OLED Touch",
    Size: "14.1 x 9.4 x 0.74 inches",
    Weight: "5.03 pounds",
  },
};
var lapSpecification = {
  CPU: "Intel Core Ultra 7 155H ",
  GPU: "NvidiaRTX 4070, Intel Arc (8 Xe cores, iGPU)",
  RAM: "32GB LPDDR5x",
  Storage: "1TB PCle Gen4 SSD",
  Display: "16.3-inch 4K=OLED Touch",
  Size: "14.1 x 9.4 x 0.74 inches",
  Weight: "5.03 pounds",
};
console.log(Laptops[1]);
console.log(laptop1);
console.log(
  laptop2.brand,
  laptop2.model,
  laptop2.price,
  laptop2.year,
  laptop1.uses,
  laptop2.lapSpecification
);
console.log(laptop2.uses[0], laptop2.uses[7], laptop2.uses[2], laptop2.uses[1]);
console.log(
  laptop2.lapSpecification.CPU,
  laptop2.lapSpecification.Display,
  laptop2.lapSpecification.GPU,
  laptop2.lapSpecification.RAM,
  laptop2.lapSpecification.Weight,
  laptop2.lapSpecification.Size,
  laptop2.lapSpecification.Storage
);
console.log(lapSpecification);
console.log(Laptops);
// string, number, boolean => types
//type laptopTypes =   // types alias
var laptop = [
  {
    brand: "Dell",
    model: "XPS 16 (2024)",
    year: 2024,
    bestToday: true,
    price: 3399, // US$ Price
    uses: ["Persnol", "Education", "Office"],
    lapSpecification: {
      CPU: "Intel Core Ultra 7 155H ",
      GPU: "NvidiaRTX 4070, Intel Arc (8 Xe cores, iGPU)",
      RAM: "32GB LPDDR5x",
      Storage: "1TB PCle Gen4 SSD",
      Display: "16.3-inch 4K=OLED Touch",
      Size: "14.1 x 9.4 x 0.74 inches",
      Weight: "5.03 pounds",
    },
  },
  {
    brand: "Dell",
    model: "XPS 15 (9530)",
    year: 2023,
    bestToday: true,
    price: 2799, // US$ Price
    uses: ["Persnol", "Education", "Office"],
    lapSpecification: {
      CPU: "Intel Core i7-13700H",
      GPU: "Nvidia GeForce RTX 4070",
      RAM: "32GB",
      Storage: "1TB M.2 PCIe NVMe SSD",
      Display: "15.6-inch, 3456 x 2160 OLED Touch",
      Size: "13.6 x 9.1 x 0.7 inches",
      Weight: "4.2 pounds",
    },
  },
];
console.log(laptop);
console.log(laptop[0], laptop[1], laptop[7]);
