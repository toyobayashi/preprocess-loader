// #define TEST_MACRO 99
#define SUB
#undef SUB
#ifdef TEST_MACRO
  #if defined(SUB)
  const result = true
  #else
  const result = false
  #endif
#endif

#if TEST_MACRO < 90
  console.log('defined(TEST_MACRO)')
#elif TEST_MACRO === ''
  console.log("TEST_MACRO === ''")
#else
  console.log(false)
#endif
const bbb = 3
#include "file2.js"