import { Sequelize } from "sequelize";

const db = new Sequelize("RECOVER_YOUR_DATA ", "root", "", {
    host: "35.239.47.213",
    dialect: "mysql"
})

export default db;
