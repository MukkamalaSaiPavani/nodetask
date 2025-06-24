const bcrypt = require('bcrypt');

const hash = "$2b$10$frQRANUYxhdNQExMjkZC0.LlqI081aQJAukNIxFdeLRsQfc9LRUOS"; 

bcrypt.compare("124", hash).then(isMatch => {
  console.log(isMatch);
});
