
// Request Information
let apiEndpoints="http://127.0.0.1:8111/translations/GetPageTranslations?";
let language="En"



//Get HomePage Translated Text
async function GetHomePageTranslation(){

   let Data= await fetch(apiEndpoints+`page_name=Home&language=${language}`).then(Result=>Result.json())
   console.log(Data);
   
}

