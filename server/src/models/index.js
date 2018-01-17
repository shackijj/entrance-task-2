const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  const User = sequelize.define('User', {
    login: Sequelize.STRING,
    avatarUrl: Sequelize.STRING
  })

  const Room = sequelize.define('Room', {
    title: Sequelize.STRING,
    capacity: Sequelize.SMALLINT
  })

  const Event = sequelize.define('Event', {
    title: Sequelize.STRING,
    dateStart: Sequelize.DATE,
    dateEnd: Sequelize.DATE
  })

  const Floor = sequelize.define('Floor', {
    floor: Sequelize.TINYINT
  })

  Event.belongsToMany(User, {through: 'Events_Users'})
  User.belongsToMany(Event, {through: 'Events_Users'})
  Event.belongsTo(Room)

  Room.belongsTo(Floor)
  User.belongsTo(Floor)

  return {
    Room, Event, User, Floor
  }
}
