const btn = document.getElementById("btn"); //추첨버튼
const numEnter = document.getElementById("number");
const re = document.getElementById("result"); //추첨 결과 태그 요소선택
const regiBtn = document.getElementById("regiBtn"); //1~n개 까지의 번호 설정
const pBtn = document.getElementById("peopleBtn"); //뽑을 추첨번호 개수등록버튼
let arr = []; // 추첨버튼 클릭 시 배열에 담아서 출력
let num = []; //총 전체 추첨번호 1~n개까지
let i = 1; //배열에 1~n 번호까지 배열에 넣습니다(카운트)
let idx = 1; //인덱스
let k = 0; // 추첨버튼 클릭 시에 하나씩 추첨번호 출력(arr배열의 인덱스)
let people = 0; // 추럼 수를 담는 변수;

// 1~n개의 수를 설정합니다.
regiBtn.addEventListener("click", () => {
  i = 1;
  const limit = document.getElementById("limitNumber");
  num = Array(Number(limit.value));
  if (num.length === 0) {
    alert("숫자를 입력해주세요");
  } else {
    createNumber(num);
    console.log(num);
    alert("등록완료");
  }
});
// 추첨 수를 설정합니다.
pBtn.addEventListener("click", () => {
  people = Number(document.getElementById("limitPeople").value);
  if (people === 0 || people > 8) {
    people = 0;
    alert("추첨수를 입력해주세요(최대 8까지 입력가능)");
    return;
  }
  if (num.length === 0) {
    alert("숫자부터 입력해주세요.");
  } else {
    if (num.length >= people) {
      re.style.width = 35 * people + "px";
      alert("등록완료");
    } else {
      alert("추첨수가 최대숫자보다 많습니다.");
    }
  }
});
const createNumber = (num) => {
  num.fill(0).map((val, idx) => {
    num[idx] = i++;
    // const number = document.createElement("div");
    // numEnter.append(number);
    // number.classList.add("num", num[idx]);
    // number.textContent = num[idx];
  });
  // for (let j = 1; j < num.length; j++) {
  //   let size = document.getElementsByClassName("num")[j];
  //   size.style.display = "none";
  // }
};

//추첨 버튼 클릭할 때마다 추첨번호 하나씩 출력됩니다.
btn.addEventListener("click", callback);

function callback() {
  function time() {
    let result = Math.floor(Math.random() * num.length) + 1;
    if (arr.includes(result)) {
      time(); //똑같은 랜덤값이 나오면 다시 함수 호출하여 숫자를 비교합니다.
    } else {
      arr.push(result);
      const resultTag = document.createElement("div");
      re.append(resultTag);
      resultTag.classList.add("resultNumber");
      resultTag.textContent = arr[k++];
    }
  }
  if (arr.length < people) {
    setTimeout(time, 1000);
    document.querySelector(".number_wrap").style.display = "block";
    setTimeout(() => {
      document.querySelector(".number_wrap").style.display = "none";
    }, 3000);
  } else if (people === 0) {
    alert("숫자와 추첨 수를 입력해주세요!!");
  }

  /*
   클로저문제를 해결하고 추첨 수 만큼 순서대로 1초마다 
   추첨번호를 출력 되도록 만들었습니다.
  */
  // for (let j = 1; j < 9; j++) {
  // (function (a) {
  //   setTimeout(function time() {
  //     let result = Math.floor(Math.random() * num.length) + 1;
  //     if (arr.includes(result)) {
  //       time();
  //     } else {
  //       arr.push(result);
  //       const resultTag = document.createElement("div");
  //       re.append(resultTag);
  //       resultTag.classList.add("resultNumber");
  //       resultTag.textContent = arr[j - 1];
  //     }
  //   }, 1000 * a);
  // })(j);
  // btn.disabled = true;
  // }
}
