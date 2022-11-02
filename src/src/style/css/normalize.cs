@media screen and (max-width: 768px) {
  .app {
    margin: 0 20px auto;
  }
  .title {
    margin: 44px 0 32px 1px !important;
  }
  .item {
    height: 96px;
    margin-bottom: 16px !important;
  }
  .result {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    column-gap: 0px;
    row-gap: 29px;
  }
  .result-btn {
    justify-content: center;
    align-items: center;
  }
  .btn {
    height: 60px;
  }
}
@media screen and (max-width: 250px) {
  input {
    font-size: calc(5px + 3vw) !important;
  }
  span {
    font-size: calc(5px + 3vw) !important;
  }
  span h3 {
    font-size: calc(5px + 3vw) !important;
  }
}
@media screen and (min-width: 768px) and (max-width: 1120px) {
  .app {
    margin: 64px 36px auto;
  }
  .title {
    margin: 0px 0 46px 0 !important;
  }
  .result {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 85px;
    row-gap: 44px;
  }
  .item:last-child {
    margin-bottom: 37px;
  }
  .item:not(:last-child) {
    margin-bottom: 30px;
  }
  .btn {
    width: 345px !important;
  }
}
@media screen and (min-width: 1120px) and (max-width: 1440px) {
  .app {
    margin: 213px 48px;
  }
  .title {
    margin-bottom: 32px !important;
    max-width: 753px;
  }
  .container, .result {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .container {
    margin-bottom: 54px;
  }
  .result {
    margin-bottom: 213px;
  }
  .item {
    min-width: 320px;
    width: 33.3333333333%;
  }
  .item:not(:first-child) {
    margin-left: 32px;
  }
  .btn {
    min-width: 320px;
  }
}
@media screen and (min-width: 1440px) {
  .app {
    margin: 213px 48px;
  }
  .title {
    margin-bottom: 32px !important;
    max-width: 753px;
  }
  .container, .result {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .result {
    margin-bottom: 213px;
  }
  .item {
    min-width: 320px;
    width: 33.3333333333%;
  }
  .item:not(:first-child) {
    margin-left: 32px;
  }
}
:root {
  --white: #FFFFFF;
  --main: #FF9514;
  --black: #000000;
  --black-text: #111111;
  --gray-text-small: #575757;
  --gray-text-big: #333333;
  --gray-main: #F3F3F4;
  --gray-fee: #e0e0e0;
  --disabled: rgba(255, 149, 20, 0.4);
}

@font-face {
  font-weight: 400;
  font-family: "Gilroy";
  src: url("../fonts/Gilroy-Medium.ttf");
}
@font-face {
  font-weight: 400;
  font-family: "Nekst";
  src: url("../fonts/Nekst-Black.ttf");
}
body {
  margin: 0;
  font-family: "Nekst", "Gilroy";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

h1,
h3,
input {
  font-family: "Nekst";
  font-weight: bold;
  margin: 0;
  padding: 0;
  color: var(--gray-text-small);
}

p {
  font-family: "Gilroy";
  font-style: normal;
  color: var(--gray-text-small);
  font-weight: 400;
  margin: 0;
  padding: 0;
}

.sum {
  color: var(--gray-text-big);
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 54px;
    line-height: 90%;
    color: var(--black-text);
  }
  h3,
input {
    font-size: 30px;
    line-height: 36px;
  }
  p {
    font-size: 16px;
    line-height: 20px;
  }
  .result-text {
    line-height: 24px;
    margin-bottom: 8px;
  }
  .wrapper-normal {
    margin-top: 24px;
    position: relative;
  }
  .inp-normal {
    box-sizing: border-box;
    height: 68px;
    width: 100%;
    background: var(--gray-main);
    border: 0px;
    border-radius: 16px;
    padding-left: 24px;
  }
  .wrapper-normal span {
    position: absolute;
    top: 16px;
    right: 24px;
  }
}
@media screen and (max-width: 768px) {
  h1 {
    font-size: 34px;
    font-weight: bold;
    line-height: 30.6px;
    color: var(--black-text);
  }
  h3, input {
    font-size: 22px;
    line-height: 20px;
  }
  p {
    font-size: 14px;
    line-height: 19.4px;
  }
  .result-text {
    margin-bottom: 2px;
  }
  .wrapper-normal {
    margin-top: 8px;
    position: relative;
  }
  .inp-normal {
    box-sizing: border-box;
    height: 60px;
    width: 100%;
    background: var(--gray-main);
    border: 0px;
    border-radius: 16px;
    padding-left: 20px;
  }
  .wrapper-normal span {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
.result-item h1 {
  color: --gray-text-big;
}

.description {
  visibility: hidden;
}

.btn {
  height: 68px;
  background: var(--main);
  border: 0px;
  border-radius: 40px;
  cursor: pointer;
}
.btn h3 {
  color: var(--white);
}
.btn:hover {
  background: var(--black-text);
}
.btn:active {
  background: var(--gray-text-small);
}
.btn:disabled {
  background: var(--disabled);
}

.item {
  margin: auto;
  height: 119px;
}

.fee-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  border-radius: 16px;
  background-color: var(--gray-main);
}
.fee-container h3 {
  padding-left: 24px;
  text-overflow: clip;
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
  left: 24px;
  right: 24px;
  top: 65px;
}

.wrapper {
  position: relative;
  padding: 7px 7px 7px 0;
  height: 54px;
  width: 70px;
}

.fee-field {
  height: 24px;
  width: 33px !important;
  padding: 15px 17px 15px 15px !important;
  font-size: 20px;
  border-radius: 16px !important;
  border: 0px;
  background: var(--gray-fee) !important;
}

.wrapper span {
  position: absolute;
  left: 37px;
  top: 22px;
  font-size: 20px;
}

input[type=number]:focus {
  outline: none;
  background-color: var(--white);
}

.fee-field:focus {
  outline: none;
  background-color: var(--white);
}

input[type=range]::-webkit-slider-runnable-track {
  display: block;
  box-sizing: border-box;
  height: 2px;
  background: #FF9514;
}

input[type=range]::-webkit-slider-thumb {
  background: #FF9514;
  color: #FF9514;
  width: 50px;
  height: 20px;
  margin-top: -9px;
  border-radius: 50%;
}

input[type=range]::-moz-range-track {
  height: 2px;
  background: #FF9514;
}

input[type=range]::-moz-range-thumb {
  background: #FF9514;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
}

/*# sourceMappingURL=normalize.cs.map */
