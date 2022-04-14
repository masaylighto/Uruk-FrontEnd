// the variable started with _ reperesent the api end point link
const Config ={
    Server:"http://127.0.0.1:8000/"
}
const Translation = {
    GetValue:"",
    GetPageTranslations:"",
    GetTranslation:"",
    GetLanguages:{            
        _link:"translations/GetLanguages",
        
    }
}
const Contributors = {

}
const WebsiteLink={

}
const Projects={

}

const FormatLink = function (...Link)
{   
    // this method will receive one of const anonynmous variable that reperesent the endpoint information ( above )
    // and it will receive the paramters that gonna be sent 
    // then it Create Link be adding the Server address
    // then append the endpoint path
    // then append the paramter name which will be taken from the struct the run time reflection (for in and Object key)
    // then we will add = after every paramter name then the value then we will add &
    // so the new link will be something like http:0.0.0.0/Controller/endpoint?Pram=value&param2=value
    //Creating The New Link and We Started With The Server Address cause it the first thing links start with  
    let newLink=Config.Server    
    newLink+=Link[0]._link
    if(Link.length<2){
        return newLink
    }
    newLink+="?"
    //first paramter reperesent the struct the rest reperesnt the passed value
    //the index strated from -1 cause we increased the lenght first line of the loop so when we started with -1 the index will be 0 when it reach the element
    let index=-1;
    //this weird loop for the sake of looping through all element in the anonymous type 
    for (const _ in Link[0]) {
        index++      
        let parameterName= Object.keys(Link[0])[index]      
        //to skip the first element which is the path and [0]==="_" cause we started the path element with _ 
        if(parameterName[0]==="_"){
            continue;
        }
        newLink+=parameterName+"="+Link[index]+"&"
    }
    //to remove the last & which add at the end of the final loop
    newLink= newLink.substring(0,newLink.length-1)
    return newLink;

}
export { Config ,Translation,Contributors,WebsiteLink,Projects,FormatLink}