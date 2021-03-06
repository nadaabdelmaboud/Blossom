const Plant = require("../db/queries/plant.queries");
const Bouquet = require("../db/queries/bouquet.queries");
const User = require("../db/queries/user.queries");
const Order = require("../db/queries/order.queries");
const OrderValidation = require("../validation/order.validation");
const MongooseValidation = require("../validation/mongoose.validation");
const error = require("../validation/error");

const OrderService = {
  async addItem(userId, item) {
    const isValid = await MongooseValidation.validateID(userId);
    if (!isValid)
      return { data: false, err: await error("Invalid User ID", 400) };
    const isUserFound = await User.findUserById(userId);
    if (!isUserFound)
      return { data: false, err: await error("Invalid User ID", 404) };
    const isOrderVaild = await OrderValidation.validateItem(item);
    if (isOrderVaild.error)
      return { data: false, err: await error(isOrderVaild.error.message, 400) };
    const idPlant = await Plant.getPlantById(item.bouquetId, {name:1,price:1,images:1});
    const idBouquet = await Bouquet.getBouquetById(item.bouquetId,{name:1,price:1,images:1});
    if (!idPlant && !idBouquet) {
      return {
        data: false,
        err: await error("No availabel bouquet/plant ID", 400),
      };
    }
    if (item.orderType == "plant") {
      const UpdatePlant = await Plant.updatePlantCount(
        1,
        item.bouquetId,
        item.amount
      );
      if (!UpdatePlant)
        return { data: false, err: await error("Plant not available", 500) };
      if (UpdatePlant.status == 0) return { data: UpdatePlant, err: "" };
    }
    if (item.orderType == "bouquet") {
      const UpdateBouquet = await Bouquet.updateBouquetCount(
        1,
        item.bouquetId,
        item.amount
      );
      if (!UpdateBouquet)
        return { data: false, err: await error("Bouquet not available", 500) };
      if (UpdateBouquet.status == 0)
        return {data: UpdateBouquet, err: ""};
    }
    const ExtraInfo = (item.orderType == "plant") ? idPlant : idBouquet;
    const userObject = await Order.addItem(userId, item, ExtraInfo);
    if (!userObject)
      return { data: false, err: await error("Problem Adding Item", 500) };
    return { data: userObject, err: "" };
  },
  async getOrderItems(userId) {
    const isValid = await MongooseValidation.validateID(userId);
    if (!isValid)
      return { data: false, err: await error("Invalid User ID", 400) };
    const isUserFound = await User.findUserById(userId);
    if (!isUserFound)
      return { data: false, err: await error("Invalid User ID", 404) };
    const orderObject = await Order.getOrderItems(userId);
    if (!orderObject)
      return { data: false, err: await error("Problem Adding Item", 500) };
    const OrderItems = await Order.formateItems(orderObject.UserData);
    return { data: OrderItems, err: "" };
  },
  async deleteItem(userId, itemId) {
    const isUserIdValid = await MongooseValidation.validateID(userId);
    if (!isUserIdValid)
      return { data: false, err: await error("Invalid User ID", 400) };
    const isItemIdValid = await MongooseValidation.validateID(itemId);
    if (!isItemIdValid)
      return { data: false, err: await error("Invalid Item ID", 400) };
    const isUserFound = await User.findUserById(userId);
    if (!isUserFound)
      return { data: false, err: await error("User Not Found", 404) };
    const idPlant = await Plant.getPlantById(itemId, { _id: 1 });
    const idBouquet = await Bouquet.getBouquetById(itemId);
    if (!idPlant && !idBouquet) {
      return {
        data: false,
        err: await error("No availabel bouquet/plant ID", 400),
      };
    }
    const itemObject = await Order.deleteItem(userId, itemId);
    if (!itemObject)
      return { data: false, err: await error("Problem Deleting Item", 500) };
    const UpdatePlant = await Plant.updatePlantCount(
      0,
      itemId,
      itemObject.amount
    );
    const UpdateBouquet = await Bouquet.updateBouquetCount(
      0,
      itemId,
      itemObject.amount
    );
    if (!UpdatePlant && !UpdateBouquet)
      return {
        data: false,
        err: await error("Problem Updating The Item Count", 500),
      };
    return { data: itemObject.result, err: "" };
  },
  

};
module.exports = OrderService;
