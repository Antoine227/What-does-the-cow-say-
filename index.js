import cowsay from "cowsay";
import dotenv from "dotenv";

dotenv.config();

console.log(cowsay.say({
    text : `${process.env.NAME} de la ${process.env.CAMPUS} a bien galéré pour cette quête.`,
    e : "><",
    T : "U"
}));