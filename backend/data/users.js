import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'superman',
    email: 'superman@superman.com',
    password: bcrypt.hashSync('4991y@rzone', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
