#include "file.js"
#include "file2.js"

#define MY_MACRO
#define MY_MACRO_VALUE 1
#define MY_MACRO_VALUE_MULTILINE \
  do {\
    console.log(1)\
  } while (0)

#ifdef MY_MACRO
%{MY_MACRO_VALUE_MULTILINE}
  #if MY_MACRO_VALUE == 1
  console.log(5)
  #endif
#else
console.log(3)
#endif

#if defined(MY_MACRO)
console.log(4)
#endif

#if MY_MACRO_VALUE > 0
console.log(6)
#endif

console.log(%{TEST_MACRO})
