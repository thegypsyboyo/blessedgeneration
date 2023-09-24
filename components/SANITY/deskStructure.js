import { schemaTypes } from '../../schemas';
import { _responsive } from '@sanity/ui'

export const myStructure = (S) =>
  S.list()
    .title('Blessed Generation Studio')
    .items([...S.documentTypeListItems().reverse()])
    .items([
      // Add a category for the Home Page schemas
      S.listItem()
      .title("Home Page")
      .child(
        S.list()
          .title('Home Conent')
          .items([
            S.documentTypeListItem("navbar")
              .title('Navbar Content'),              
            S.documentTypeListItem("sliderInfo")
              .title('Slider Content'),
            // S.documentTypeListItem("slider")
            //   .title('SLIDERS'),              
            S.documentTypeListItem("homeAbout")
              .title('Home About'),              
            S.documentTypeListItem("partners")
              .title('Our Partners'),              
            S.documentTypeListItem("mystory")
              .title('My Story'),              
            // S.documentTypeListItem("workFlow")
            //   .title('HOW WE WORK'),              
            // S.documentTypeListItem("ourFeatures")
            //   .title('OUR FEATURES'),                          
            S.documentTypeListItem("achievements")
              .title('Our Achievement'),              
            S.documentTypeListItem("testimonials")
              .title('Testimonials'),              
          ])
      ),
      S.listItem()
      .title("About Us")
      .child(
        S.list()
          .title('Abouts')
          .items([
            // S.documentTypeListItem("aboutusHeader")
            // .title('THE HEADER PAGE'),           
            S.documentTypeListItem("aboutusIntro")
              .title('ABOUTUS INTRO'),              
            S.documentTypeListItem("ria")
              .title('About Ria'),
            S.documentTypeListItem("bg")
              .title('About BG Kenya'),
            // S.documentTypeListItem("aboutHistory")
            //   .title('ABOUTUS HISTORY'),
            S.documentTypeListItem("aboutusMission")
              .title('MISSION & VISSION'),              
            S.documentTypeListItem("aboutusVideo")
              .title('ABOUTUS VIDEO'),              
          ])
      ),
      S.listItem()
      .title("Meet the Team")
      .child(
        S.list()
          .title('Our Team')
          .items([
            // S.documentTypeListItem("teamHeader")
            //   .title('THE HEADER PAGE'),              
            S.documentTypeListItem("team")
              .title('The Team'),              
            // S.documentTypeListItem("involvement")
            //   .title('COLLABORATION & TEAM'),                          
            // S.documentTypeListItem("teamDetail")
            //   .title('MORE INFO ON EACH TEAM MEMBER'),                          
          ])
      ),
      
      S.listItem()
      .title('Blog Page ')
      // .icon(() => '📄')
      .child(
        S.list()
          .title('Blog Content')
          .items([
            // S.documentTypeListItem("blogHeader")
            // .title('THE HEADER PAGE'),     
            S.documentTypeListItem("post")
              .title('Blog Post Content'),
              // .icon(() => '🏠'),
            // S.documentTypeListItem("authorinfo")
            //   .title('AUTHOR INFO'),
              // .icon(() => '🌅'),
            // S.documentTypeListItem("socialmedia")
            //   .title('SOCIAL MEDIA'),
              // .icon(() => '🌅'),
            // S.documentTypeListItem("category")
            //   .title('CATEGORY'),
              // .icon(() => '🛍️'),
            // S.documentTypeListItem("tag")
            //   .title('TAGS'),
            // S.documentTypeListItem("postTag")
            //   .title('POST TAG'),         
            // S.documentTypeListItem("singlePostInformation")
            //   .title('DATA ABOUT EACH POST'),         
              // .icon(() => '🛍️'),
            // Add other Home Page schemas here
            // ...
          ])
          
      ),
      S.listItem()
      .title("OUR WORK PAGE")
      .child(
        S.list()
          .title('OUR WORK')
          .items([
            S.documentTypeListItem("serviceHeader")
            .title('THE HEADER PAGE'),     
            S.documentTypeListItem("service")
              .title('OUR WORK'),
            S.documentTypeListItem("serviceUs")
              .title('WORK INFO'),

            // S.documentTypeListItem("allData")
            // .title("OUR WORK DETAILS")
            // Add other Home Page schemas here
            // ...
          ])
          
      ),
      S.listItem()
      .title("PORTFOLIO PAGE")
      .child(
        S.list()
          .title('PORTFOLIO ITEMS')
          .items([
            S.documentTypeListItem("portfolioHeader")
            .title('THE HEADER PAGE'),     
            S.documentTypeListItem("portfolio")
              .title('PORTFOLIO INFO'),
            // S.documentTypeListItem("singlePortfolioData")
            //   .title('PORTFOLIO DETAILS'),
              // .icon(() => '🛍️'),
            // Add other Home Page schemas here
            // ...
          ])
          
      ),
      S.listItem()
      .title("DONATION PAGE")
      .child(
        S.list()
          .title('CAUSES ITEMS')
          .items([
            S.documentTypeListItem("donationHeader")
            .title('THE HEADER PAGE'),     
            S.documentTypeListItem("cause")
              .title('CAUSE INFO'),
          ])   
      ),
      S.listItem()
      .title("Our Projects")
      .child(
        S.list()
          .title('Projects')
          .items([
            S.documentTypeListItem("project")
            .title('The Projects'),     
          ])   
      ),
      S.listItem()
      .title("Events")
      .child(
        S.list()
          .title('Events')
          .items([
            S.documentTypeListItem("event")
            .title('The Events'),     
          ])   
      ),

      S.listItem()
      .title("CONTACT PAGE")
      .child(
        S.list()
          .title('CONTACT INFORMATION')
          .items([
            S.documentTypeListItem("contactHeader")
            .title('THE HEADER PAGE'),     
            S.documentTypeListItem("contactInfo")
              .title('CONTACT INFORMATION '),
            S.documentTypeListItem("contactMap")
              .title('HOW TO REACH US'),
          ])
          
      ),
    
      S.listItem()
      .title("FAQ")
      .child(
        S.list()
          .title('Faq')
          .items([
            S.documentTypeListItem("faq")
              .title('FAQ'),
          ])
          
      ),
    

    ]);
