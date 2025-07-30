import { CarBlueprint } from "./car_blueprints.mjs";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6TDI",
  "Diesel",
  "Diesel auto"
);
dieselCar.logCarProperties();

// ? Můžeme vytvořit další objekt ze třídy, který bude fungovat nezávisle na dieselCar
const petrolCar = new CarBlueprint("Modrá", "1.2TSI", "Benzín", "Ropák");
// ? petrolCar i dieselCar má svoje vlastnosti (properities) a fungují nezávisle
dieselCar.logCarProperties();
petrolCar.logCarProperties();
// ? Změníme barvu petrolCar, dielesCar zůstane nezměněný
petrolCar.color = "Bílá";
dieselCar.logCarProperties(); // Červená barva
dieselCar.logCarProperties(); // Bílá barva
