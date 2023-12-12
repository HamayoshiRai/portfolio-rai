$(window).on('load', function () {
    $("#splash-logo").delay(1200).fadeOut('slow'); //ロゴを1.2秒でフェードアウトする記述

    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow', function () { //ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

        $('body').addClass('appear'); //フェードアウト後bodyにappearクラス付与

    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg').on('animationend', function () {
        //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる

});





//アコーディオンをクリックした時の動作
$('.title').on('click', function () { //タイトル要素をクリックしたら
    var findElm = $(this).next(".box"); //直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle(); //アコーディオンの上下動作

    if ($(this).hasClass('close')) { //タイトル要素にクラス名closeがあれば
        $(this).removeClass('close'); //クラス名を除去し
    } else { //それ以外は
        $(this).addClass('close'); //クラス名closeを付与
    }
});





$('a[href*="#"]').click(function () { //全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
    var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
    var pos = $(elmHash).offset().top; //idの上部の距離を取得
    $('body,html').animate({
        scrollTop: pos
    }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
    return false;
});




//スクロールした際の動きを関数でまとめる
function setFadeElement() {
    var windowH = $(window).height(); //ウィンドウの高さを取得
    var scroll = $(window).scrollTop(); //スクロール値を取得

    //出現範囲の指定
    var contentsTop = Math.round($('.web-site-btn-up').offset().top); //要素までの高さを四捨五入した値で取得
    var contentsH = $('.web-site-btn-up').outerHeight(true); //要素の高さを取得


    // 2つ目の出現範囲の指定※任意
	var contentsTop2 = Math.round($('.web-site-btn-up2').offset().top);	//要素までの高さを取得
	var contentsH2 = $('.web-site-btn-up2').outerHeight(true);//要素の高さを取得
    

    //出現範囲内に入ったかどうかをチェック
    if (scroll + windowH >= contentsTop && scroll + windowH <= contentsTop + contentsH) {
        $(".page-top").addClass("UpMove"); //入っていたらUpMoveをクラス追加
        $(".page-top").removeClass("DownMove"); //DownMoveを削除
        $(".hide-btn").removeClass("hide-btn"); //hide-btnを削除 
    } //2つ目の出現範囲に入ったかどうかをチェック※任意
    else if(scroll+windowH >= contentsTop2 && scroll+windowH <= contentsTop2+contentsH2){       
    $(".page-top2").addClass("UpMove");    //入っていたらUpMoveをクラス追加
    $(".page-top2").removeClass("DownMove");   //DownMoveを削除
    }//それ以外は


    else {
        if (!$(".hide-btn").length) { //サイト表示時にDownMoveクラスを一瞬付与させないためのクラス付け。hide-btnがなければ下記の動作を行う
            $(".page-top,.page-top2").addClass("DownMove"); //DownMoveをクラス追加
            $(".page-top,.page-top2").removeClass("UpMove"); //UpMoveを削除	
        }
    }
}




// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    setFadeElement(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    setFadeElement(); /* スクロールした際の動きの関数を呼ぶ*/
});





