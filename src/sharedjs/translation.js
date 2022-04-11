//Connection Info
const Server="http://127.0.0.1:8000/";
const TranslationUrl=Server+"GetPageTranslations"
//Global Variable That will hold the translated Value For all pages
let HomePage=new {Title,Desc,ReadMoreBtn,};

//Get HomePage Translated Text
(function GetHomePageTranslation(){


    fetch(TranslationUrl,{method:"POST",body:"Home"}).then(Result => Result.json()).then(Result=>console.log(Result))

})()

export default HomePage