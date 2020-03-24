'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  cors: { // 跨域用
    enable: true,
    package: 'egg-cors',
  },
};
