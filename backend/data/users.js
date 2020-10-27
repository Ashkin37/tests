import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Superman',
    email: 'superman@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Batman',
    email: 'batman@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Joker',
    email: 'joker@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
