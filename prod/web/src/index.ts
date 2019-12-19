import { User } from './models/User';

// const user = new User({ name: 'Steve', age: 11 });

// console.log(user.get('name'));

// user.on('change', () => {
//   console.log('change');
// });

// user.set({ name: 'new name' });

const user = new User({ id: 1, name: 'newer name', age: 0 });

user.on('save', () => {
  console.log(user);
});

user.save();
