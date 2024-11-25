function countCode(str) {
  str = str.toLowerCase();

  let count = 0;

  for (let i = 0; i < str.length - 3; i++) {
    if (str[i] === "c" && str[i + 1] === "o" && str[i + 3] === "e") {
      count++;
    }
  }
  console.log(count);
  return count;
}

countCode("aaacodebbb");
countCode("codexxcode");
countCode("cozexxcope");
countCode("cozfxxcope");
countCode("xxcozeyycop");
countCode("cozcop");
countCode("abcxyz");
countCode("code");
countCode("ode");
countCode("c");
countCode("");
countCode("AAcodeBBcoleCCccoreDD");
countCode("AAcodeBBcoleCCccorfDD");
countCode("coAcodeBcoleccoreDD");
