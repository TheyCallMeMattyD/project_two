module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  Item.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Item.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Item;
};
