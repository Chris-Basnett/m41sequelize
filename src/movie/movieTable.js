const {DataTypes} = require('sequelize')
const {sequeliize} = require("../db/connection")

const Movie = sequeliize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not sprcified"
    }
})

module.exports = Movie