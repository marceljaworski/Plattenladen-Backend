import { faker } from "@faker-js/faker";
import Product from "./models/Product.js";
import "./lib/mongoose.js";
import { argv } from "process";

const createProduct = async () => {
    const product = new Product({
        title: faker.title(),
        artist: faker.name.fullName(),
        year: faker.year(),
        picture: faker.imageUrl(1234, 2345),
        price: faker.commerce.price()
       
    });
    await product.save();
}
const createProducts = async (count = 20) => {
    for (let i = 0; i < count; i++) {
        console.log(`creating photo:`, i + 1);
        await createProduct();
    }
};
try {
    if (!argv.includes("doNotDelete")) {
        console.log("deleting all records...");
        await deleteProducts();
        console.log("done.");
    }
    console.log("creating new records...");
    const count = argv[2] === "doNotDelete" ? undefined : argv[2];
    await createProducts(count);
    console.log("done.");
    console.log("seeding finished. happy coding!");
    process.exit(0);
} catch (error) {
    console.error(error);
    process.exit(1);
}