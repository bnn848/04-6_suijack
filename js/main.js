'use strict';
{
  const container = document.getElementById('container');
  
  // numの中身を並び替え
  const num = [1, 1, 2, 2, 3, 3, 4, 4];
  let firstCard; // 2枚目と照合するための入れ物
  let opened = 0; // 表向きカードの枚数カウント用
  let count = 0; // 組数カウント用

  
  window.onload = function load() { // ロードした時に発火
    for (let i = num.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // num[]を並べ替え
      [num[j], num[i]] = [num[i], num[j]];
    }
    
    for (let i = 0; i < 8; i++) {
      const card = document.createElement('div'); // numをdivとしてHTMLとarr[]両方で取得
      card.number = num[i];
      card.innerHTML = "";
      card.onclick = turnCard; // addEventListener('click',function());と同じことを埋め込む
      container.appendChild(card);
    }

    console.log(num); // カードの配置（答え）
  };

  let card;
  function turnCard(event) {
    card = event.target; // 各cardに対してeventをセットする

    if (card.innerHTML === "") { // カードが裏ならば...
      card.innerHTML = card.number;
      card.classList.add('open');
    } else {
      return;
    }
    
    if (opened === 0) { // 1枚目なら...
      opened++;
      firstCard = card;
      card.classList.add('first');
      console.log(`opened = ${opened}`);
    } else {
      if (firstCard.number !== card.number) { // 1枚目と2枚目の数字が異なる場合
        setTimeout(() =>{
          firstCard.className = "";
          firstCard.innerHTML = "";
          firstCard = 0;
          card.className = "";
          card.innerHTML = "";
        },500);
      } else { // 1枚目と2枚目の数字が同じ場合
        count++;
        console.log(`count = ${count}`);
        setTimeout(() => {
          card.style.visibility = "hidden";
          firstCard.style.visibility = "hidden";
        },500);
        if (count === 4) { // 4組揃ったら...
          setTimeout(() => {
            const p = document.createElement('p');
            const button = document.createElement('button');
            p.innerHTML = "Game Set";
            p.classList.add('set');
            button.innerHTML = "もう一度挑戦する";
            button.addEventListener('click',() => {
              location.reload();
            })
            const finish = document.getElementById('finish');
            finish.appendChild(p);
            finish.appendChild(button);
          },500);
        }
      }
      opened = 0;
    }

  };
}




  // ==============================================
    // ============================================
    // ** 自力 **
    // ============================================
    // ============================================


  // const container = document.getElementById('container');
  // const card =  document.querySelectorAll('div');
  // const first = document.getElementById('first');
  // const second = document.getElementById('second');

  // // numの中身を並び替え
  // const num = [1, 1, 2, 2, 3, 3, 4, 4];
  //   for (let i = num.length -1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [num[j], num[i]] = [num[i], num[j]];
  //   }

  // function createCard() {
  //   // cardを作り、テキストをnumにする
  //   for (let i = 0; i < 8; i++) {
  //     const card = document.createElement('div');
  //     card.number = num[i];
  //     container.appendChild(card);
  //   }
  // }

  // createCard();
  // console.log(num);

  // // ==============================================
  // // ** visibleなcardのnumberを照合 **
  // // ==============================================

  // let j = 0; // 2枚までの選択制限
  // let k = 0; // 4組み揃えたら終了

  // // clickイベントを埋め込む
  // card.forEach(() => {
  //   card.onclick = () => {
  //     console.log(`${card.textContent}`);
  //     if (card.getElementById('first') != null) {
  //       return;
  //     } else if (j === 0) { // 1枚目
  //       card.setAttribute('id','first');
  //       card.innerHTML = num[i];
  //       console.log(card.textContent);
  //       j++;
  //     } else if (j === 1) { // 2枚目
  //       card.setAttribute('id','second');
  //       card.innerHTML = num[i];
  
  //       // checkNum();
  //       // 2枚が異なる場合 => カードを戻す
  //       if (first.value !== second.value) {
  //         setTimeout(() => {
  //           card.classList.remove('first'); // !!! cardのうち選択した2枚のみ
  //         },500);
  //       } else {
  //         // 2枚が一致する場合 => 要素を見えなくする !!! 1枚目に対してもやりたい
  //           setTimeout(() => {
  //             card.classList.remove('first');
  //             card.classList.remove('second');
  //             card.style.visibility = 'hidden';
  //           },500);
  //           k++;
  //           console.log(`k: ${k}`);
  //           if (k === 4) {
  //             console.log('終了');
  //             setTimeout(() => {
  //               location.reload();
  //             },1000);
  //           }
  //       }
  //       j = 0; // 再度2枚選べる
  //     }
  //     console.log(`j: ${j}`);
  //   };
  // });
// }

/* 
同じクラスを持つ要素の取得と値の比較方法
classを別につける => number取得
visibilityはcss
*/