const { DataTypes } = require('sequelize');
const sequelize = require('../../util/database');
const OwnerDetails = require('./OwnerDetails');

const BankDetails = sequelize.define('BankDetails', {
  accountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bankName: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  IFSCCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ownerDetailsId:{
    type:DataTypes.INTEGER,
    model:OwnerDetails,
    key:"id"
  }
},
{
  timestamps: true,
}
);

BankDetails.sync();
OwnerDetails.hasOne(BankDetails,{
  foreignKey:"ownerDetailsId"
  });
BankDetails.belongsTo(OwnerDetails)
module.exports = BankDetails;
