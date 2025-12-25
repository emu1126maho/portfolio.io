

console.log('hello');
// 1,body要素を取得する
// 2、ハンバーガーボタンの要素を取得する
// 3、ハンバーガーボタンにクリックのイベントリスナーを追加
// 4、ハンバーガーボタンがクリックされたら、
// body要素にopenのクラスをつけ外しする


// 1,
let bodyElement = document.querySelector('body');
// 2,document.getElementById('取得したい要素のid属性の値');
let hamBtn = document.getElementById('hamBtn');
// console.log(bodyElement,hamBtn);

// 3,
// 要素.addEventListener('イベントの種類',function(){
//     4,イベントが起きた時に実行する処理;
// });
hamBtn.addEventListener('click',function(){
    // 4,togggleはクラスをつけ外しする
    bodyElement.classList.toggle('open');
});


// スライドショー

// const swiper = new Swiper('.swiper',
//     {
//         direction: 'horizontal',
//         loop: true,
//         autoplay: {
//             delay: 1000, //ミリ秒
//             disableOnInterraction: false,
//         },
//         // effect: 'fade',
//         pagination: {
//             el: '.swiper-pagination', //ページネーションを有効化
//         },
//         navigation: {
//             // 次へ前へボタン
//             nextEl: '.swiper-button-next', 
//             prevEl: '.swiper-button-prev',
//         },
//         scrollbar: {
//             // スクロールバー
//             el: '.swiper-scrollbar',
//         },
//     }
// );


const swiper = new Swiper(".swiper", 
{
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 2000, //ミリ秒
    disableOnInterraction: false,
    },

    // ページネーションが必要なら追加
    pagination: {
    el: ".swiper-pagination"
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2",

    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
    },
    // ナビボタンが必要なら追加
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
    },
    // breakpoints: {
    //     0: { // モバイル（〜767px）
    //     slidesPerView: 1,
    //     direction: "vertical",
    //     effect: "slide",
    //     centeredSlides: false,
    //     coverflowEffect: {},
    // },
    //     768: { // PC（768px〜）
    //     slidesPerView: 2,
    //     direction: "horizontal",
    //     effect: "coverflow",
    //     centeredSlides: true,
    //     coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true
    //     }
    // }
    // }
    });

    // ===============================
// 上へボタン　スクロール停止で出現 → アニメ開始
// ===============================
document.addEventListener('DOMContentLoaded', function() {
    const footerButton = document.getElementById('footerButton');
    let scrollTimeout;

    // 初期状態：完全非表示
    footerButton.classList.add('hidden');

    window.addEventListener('scroll', function() {

        // -------------------------
        // ページトップなら 非表示 & アニメリセット
        // -------------------------
        if (window.scrollY === 0) {
            footerButton.classList.add('hidden');
            footerButton.classList.remove('appear');
            return;
        }
        // スクロール中は非表示
        footerButton.classList.add('hidden');
        footerButton.classList.remove('appear');

        // 前回の停止タイマーをクリア
        clearTimeout(scrollTimeout);
        // -------------------------
        // スクロール停止判定
        // -------------------------
        scrollTimeout = setTimeout(function() {
            if (window.scrollY === 0) return;
            // ふわっと表示（opacity制御）
            footerButton.classList.remove('hidden');
            // 300ms後にアニメ開始（CSSの遅延と同期）
            setTimeout(() => {
                footerButton.classList.add('appear');
            }, 300);
        }, 300); // 停止判定：300ms
    });
});

$(".water").ripples();


