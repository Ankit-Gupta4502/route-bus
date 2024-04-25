const Sequelize = require("sequelize");

const sequelize=new Sequelize("route_bus","root","12345678",{
  dialect:"mysql",
  host:"localhost",
  port:3306,
});

sequelize
  .authenticate()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

module.exports = sequelize;
