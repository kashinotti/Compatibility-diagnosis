const result = document.getElementById('resultButton');
const announce = document.getElementById('announce');
let manName = document.getElementById('man');
let womanName = document.getElementById('woman');
let randomNumber = Math.floor( Math.random() * 100 );
console.log(manName);
console.log(womanName);


function resultAnnouncement() {
  if(randomNumber == 0) {
    announce.insertAdjacentHTML('beforeend',
    `<p class="percent">お似合い度は<span class="randomNumber">${randomNumber}%</span></p>`
    );
    announce.insertAdjacentHTML('beforeend',
    '<p class="dissolution">すまん！！解散！！！！！</p>'
    );
  } else if(randomNumber <= 20) {
    announce.insertAdjacentHTML('beforeend',
    `<p class="percent">お似合い度は<span class="randomNumber">${randomNumber}%</span></p>`
    );
    announce.insertAdjacentHTML('beforeend',
    '<img src="img/1~20.jpg">'
    );
    announce.insertAdjacentHTML('beforeend',
    '<p>今日は終電で帰りましょう</p>'
    );
  } else if(randomNumber >= 21 && randomNumber <= 40) {
    announce.insertAdjacentHTML('beforeend',
    `<p class="percent">お似合い度は<span class="randomNumber">${randomNumber}%</span></p>`
    );
    announce.insertAdjacentHTML('beforeend',
    '<img src="img/21~40.jpg">'
    );
    announce.insertAdjacentHTML('beforeend',
    '<p>まずは飲みに行ってお互いを知りましょう！</p><p>LINE教えて！！</p>'
    );
  } else if(randomNumber >= 41 && randomNumber <= 60) {
    announce.insertAdjacentHTML('beforeend',
    `<p class="percent">お似合い度は<span class="randomNumber">${randomNumber}%</span></p>`
    );
    announce.insertAdjacentHTML('beforeend',
    '<img src="img/41~60.jpg">'
    );
    announce.insertAdjacentHTML('beforeend',
    '<p>まずは飲みに行ってお互いを知りましょう！</p><p>LINE教えて！！</p>'
    );
  } else if(randomNumber >= 61 && randomNumber <= 80) {
    announce.insertAdjacentHTML('beforeend',
    `<p class="percent">お似合い度は<span class="randomNumber">${randomNumber}%</span></p>`
    );
    announce.insertAdjacentHTML('beforeend',
    '<img src="img/61~80.jpg">'
    );
    announce.insertAdjacentHTML('beforeend',
    '<p>実質100%ってことで良いと思います。</p><p>LINE教えて！！</p>'
    );
  } else if(randomNumber >= 81 && randomNumber <= 99) {
    announce.insertAdjacentHTML('beforeend',
    `<p class="percent">お似合い度は<span class="randomNumber">${randomNumber}%</span></p>`
    );
    announce.insertAdjacentHTML('beforeend',
    '<img src="img/81~100.jpg">'
    );
    announce.insertAdjacentHTML('beforeend',
    '<p>お付き合いを前提に結婚してください！！！</p>'
    );
  }
    result.remove();
}

function checkForm() {
  //2つのフォームに値が入力されていば結果発表ボタンを有効にする
  //値が入力されていないまたは削除された場合は結果発表ボタンを無効にする
  if(manName.value.length != 0 && womanName.value.length != 0) {
    result.disabled = false;
  } else {
    result.disabled = true;
  }
}

manName.addEventListener("keyup", checkForm);
womanName.addEventListener("keyup", checkForm);
result.addEventListener("click", resultAnnouncement);