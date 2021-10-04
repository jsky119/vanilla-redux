import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//reducer가 return하는 것은 app의 state가 됨
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

//store에서 변화를 감지하기 위해 subscribe를 사용
countStore.subscribe(onChange);

//reducer에게 action을 보낼 땐 dispatch를 사용
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" }); //action은 object여야만 하며 type이 있어야 한다
};
add.addEventListener("click", handleAdd);

minus.addEventListener("click", () => countStore.dispatch({ type: "MINUS" }));
