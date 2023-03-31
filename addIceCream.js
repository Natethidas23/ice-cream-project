
import { client, iceCreamCollection } from'./mongoConnect.js';
const addiceCream = async () => {
  const singleScoop= {
    name: "singleScoop",
    price: 20.00,
    Description: "single scoop",
  };
  try {
    await client.connect();
    const addedIceCream = await iceCreamCollection.insertOne(singleScoop);
    console.log(addedIceCream);
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
};

addiceCream()