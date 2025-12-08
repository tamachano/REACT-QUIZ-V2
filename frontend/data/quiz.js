import MouthOfTruth from "../assets/images/MouthOfTruth.jpg"
import Venezia from"../assets/images/Venezia.jpg"
import Firenze from"../assets/images/Firenze.jpg"
import Sicily from"../assets/images/Sicily.jpg"
import TreviFountain from"../assets/images/TreviFountain.jpg"


// const quizData = [
export default [
    {
        key:"MouthOfTruth",
        image:MouthOfTruth,
        question: "この写真の場所はどこでしょう？",
        options:["ローマ","ナポリ","フィレンツェ", "トリノ"],
        answerIndex: 0,
        hint:"〇〇〇の休日"
    },{
        key:"Venezia",
        image:Venezia,
        question: "この写真の場所はどこでしょう？",
        options:["ミラノ","ベネチア","ローマ", "フィレンツェ"],
        answerIndex: 1,
        hint:"ゴンドラが名物の水の都、ディズニーシーのゴンドラの名前の由来にもなってるよ！",
    },{
        key:"Firenze",
        image:Firenze,
        question: "この写真の場所はどこでしょう？",
        options:["ボローニャ","ローマ","フィレンツェ", "ナポリ"],
        answerIndex: 2,
        hint:"ルネサンス美術の中心地と呼ばれているよ🎨",
    },{
        key:"Sicily",
        image:Sicily,
        question: "この写真の場所はどこでしょう？",
        options:["カプリ","ナポリ","サレルノ", "シチリア"],
        answerIndex: 3,
        hint:"映画『インディ・ジョーンズと運命のダイヤル』に登場",
    },{
        key:"TreviFountain",
        image:TreviFountain, 
        question: "この写真の場所はどこでしょう？",
        options:["ベネチア","フィレンツェ","ローマ", "ナポリ"],
        answerIndex: 2,
        hint:"これは「トレビの泉」だよ。ちなみに1問目と同じ場所だから、よーく思い出してね！"
    }
];

// export default quizData;