import { schemaTypes } from '../../schemas';
import { _responsive } from '@sanity/ui'

export const myStructure = (S) =>
  S.list()
    .title('TREASURE TREES CONTENT STUDIO')
    .items([...S.documentTypeListItems().reverse()])
    .items([
      // Add a category for the Home Page schemas
      S.listItem()
      .title("HOME PAGE CONTENT")
      .child(
        S.list()
          .title('HOME SLIDER')
          // .items([
          //   S.documentTypeListItem("navbar")
          //     .title('NAVBAR CONTENT'),              
          //   S.documentTypeListItem("sliderInfo")
          //     .title('SLIDER CONTENT'),
          //   // S.documentTypeListItem("slider")
          //   //   .title('SLIDERS'),              
          //   S.documentTypeListItem("homeAbout")
          //     .title('HOME ABOUT'),              
          //   S.documentTypeListItem("workFlow")
          //     .title('HOW WE WORK'),              
          //   // S.documentTypeListItem("ourFeatures")
          //   //   .title('OUR FEATURES'),                          
          //   S.documentTypeListItem("countUp")
          //     .title('OUR PROGRESS'),              
          // ])
      ),
      S.listItem()
      .title("ABOUTUS PAGE CONTENT")
      .child(
        S.list()
          .title('ABOUTUS INRO')

      ),
    ]);
