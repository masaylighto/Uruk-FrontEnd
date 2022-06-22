

const Translation = {
    GetPageTranslations:"translations/GetPageTranslations?page_name={0}&language={1}",  
    GetLanguages:"translations/GetLanguages"
}

const ContactOptions = {
    Get:"Contacts/Get?language={0}"
}

const ContributionGuideLines = {
    Get:"ContributionGuideLine/Get?language={0}"
}
const Contributors = {
    GetContributors:"contributors/GetContributors?language={0}"
}
const WebsiteLink={
    GetLinks:"website_link/GetLinks?language={0}"
}
const Projects={
    GetProjects:"projects/GetProjects?language={0}&Take={1}&Skip={2}"
}
const ProjectsMember={
    GetMember:"project_members/GetMembers?language={0}"
}

const FormatLink = function (Link,...Paramters)
{   

    let newLink=process.env.REACT_APP_SERVER+Link  
    let index=0;   
    for (const paramter of Paramters) {
        newLink=newLink.replace(`{${index}}`,paramter)
        index++
    }  

    return newLink;

}
export {ProjectsMember,Translation,Contributors,WebsiteLink,Projects,ContactOptions,ContributionGuideLines,FormatLink}