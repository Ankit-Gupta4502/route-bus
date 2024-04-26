const Sequelize = require("sequelize");

const sequelize=new Sequelize("route-bus","root","Punam@2024",{
  dialect:"mysql",
  host:"localhost",
});

sequelize
  .authenticate()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

module.exports = sequelize;
