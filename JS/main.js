var quoteContent=
[
    {quote:"“Be yourself; everyone else is already taken.”",
    author:"Oscar Wilde",},
    {quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author:"Marilyn Monroe"},
    {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author:"Albert Einstein"},
    {quote:"“So many books, so little time.”",
    author:"Frank Zappa"},
    {quote:"“A room without books is like a body without a soul.”",
    author:"Marcus Tullius Cicero"},
    {quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    author:"Bernard M. Baruch"},
    {quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    author:"Dr. Seuss"},
    {quote:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    author:"J.K. Rowling, Harry Potter and the Goblet of Fire"}
];
//   <!-- PaulaSoliman94.develop@gmail.com -->
//   <!-- 01221521221 -->
function newqoute(){
    var randomQuote= quoteContent[Math.floor(Math.random()*quoteContent.length)]
    var dailyQuote= randomQuote.quote;
    var quoteAuthor= randomQuote.author;
    document.getElementById('qoute-content').innerHTML= dailyQuote;
    document.getElementById('qoute-author').innerHTML= "-"+ quoteAuthor+"-";
}








