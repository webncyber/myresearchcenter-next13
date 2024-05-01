export function gqlGetTopNav(){
    const gql =  `
    {
        listSiteSettings(where:{defaultSettings_not:false}){
          data{
            navigations
            {        
              topNavigation
              {
                title
                svgData{          
                    icon
                }
                linkUrl
                linkTitle
                linkTarget
              }
      
              
            }
            
          }
        }
      }
      `
  
  return gql;
  
  }
  
  export function gqlGetFooterNav(){
    const gql =  `
    {
        listSiteSettings(where:{defaultSettings_not:false}){
          data{
            navigations
            {        
              footerNavigation
              {
                title
                svgData{          
                  icon
                }
                linkUrl
                linkTitle
                linkTarget
              }
      
              
            }
            
          }
        }
      }
      `
  return gql;
  
  }
  

  export function gqlGetSocialLinks(){
    const gql =  `
    {
        listSiteSettings(where:{defaultSettings_not:false}){
          data{
            socialMedia
            {        
              socialLinks
              {
                title
                svgData{          
                    icon
                }
                linkUrl
                linkTitle
                linkTarget
              }
      
              
            }
            
          }
        }
      }
      `
  return gql;
  
  
  }
  

  export function gqlSiteBackgroundColor(){
    const gql =  `
    {
      listSiteSettings(where:{defaultSettings_not:false}){
        data{
         siteBackgroundColor{
          title
          code
        }
        }
      }
    }

      `
  return gql;
  
  
  }