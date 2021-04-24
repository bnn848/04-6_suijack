'use strict';
{
  // numの中身を並び替え
  const num = [1, 1, 2, 2, 3, 3, 4, 4];
    for (let i = num.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [num[j], num[i]] = [num[i], num[j]];
    }

  let j = 0; // 2枚までの選択制限
  let k = 0; // 4組み揃えたら終了

  function createCard() {
    // cardを作り、テキストをnumにする
    for (let i = 0; i < 8; i++) {
      const container = document.getElementById('container');
      const card = document.createElement('div');
      card.number = num[i];

      // clickイベントを埋め込む
      card.addEventListener('click', () => {
        if (card.classList.contains('visible')) {
          return;
        }

        card.classList.add('visible');
        card.innerHTML = num[i];
        j++;
        console.log(`j: ${j}`);

        if (j === 2) {
          // checkNum();
          if (!search) {
            // 2枚が異なる場合 => カードを戻す
            setTimeout(() => {
              card.classList.remove('visible'); // !!! cardのうち選択した2枚のみ
            },500);
          } else {
            // 2枚が一致する場合 => 要素を見えなくする !!! 1枚目に対してもやりたい
              setTimeout(() => {
                card.setAttribute('visibility', 'hidden');
              },500);
              k++;
              console.log(`k: ${k}`);
              if (k === 4) {
                console.log('終了');
                setTimeout(() => {
                  location.reload();
                },1000);
              }
          }
          j = 0; // 再度2枚選べる
        }
      });
      container.appendChild(card);
    }
  }

  createCard();
  console.log(num);

  // ==============================================
  // ** visibleなcardのnumberを照合 **
  // ==============================================
  function search() {
    // ?
  }


}

/* 
同じクラスを持つ要素の取得と値の比較方法
*/