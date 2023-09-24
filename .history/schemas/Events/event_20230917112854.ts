import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'event',
  title: 'Events',
  type: 'document',

  fields: [
    defineField( {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Please give a short title of the Cause Item',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{type: 'reference', to: {type: 'authorinfo'}}],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Please give a short brief description of the Cause item',
      validation: (Rule) => Rule.max(200),
      type: 'string',
    }),
    defineField({
        name: 'slug',
        title: 'slug',
        type: 'slug',
        description: 'DONT FORGET TO GIVE THE SLUG AS IT IS THE URL FOR THIS POST. YOU CAN GENERATE AUTOMATICALLY FROM THE TITLE',
        options: {
            source: 'title',
            maxLength: 100,
        }
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'time',
      title: 'Start time',
      type: 'string',
      description: "give the exact amount because it is being used somewhere in our code",
    }),
    defineField({
      name: 'timeStamp',
      title: 'Count Down',
      type: 'string',
      description: "Please give the countdown in this format!: 2023-09-04T09:00:00",
    }),
    defineField({
        name: 'category',
        title: 'Category',
        type: 'string',
      }),
    defineField({
        name: 'location',
        title: 'Loation',
        type: 'string',
      }),
    defineField({
        name: 'ticketCost',
        title: 'Ticket Cost',
        type: 'string',
      }),
    defineField({
        name: 'venue',
        title: 'Venue',
        type: 'string',
      }),
    defineField({
        name: 'organizer',
        title: 'Organizer',
        type: 'string',
      }),
    defineField({
        name: 'phone',
        title: 'Phone',
        type: 'string',
      }),
    defineField({
        name: 'status',
        title: 'Status',
        type: 'string',
      }),
    defineField({
        name: 'startDate',
        title: 'Start Date',
        type: 'string',
      }),
    defineField({
        name: 'endDate',
        title: 'End Date',
        type: 'string',
      }),
      defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      }),
      defineField({
        name: "eventPhotos",
        title: "Event Photos",
        description: "Provide images here",
        type: "array",
        of:[{type: "reference", to: {type: "imageArray"}}]
    }),
      defineField({
        name: "tags",
        title: "Tags",
        type: 'array',
        of: [{type: 'reference', to: {type: 'tag'}}],
        // readOnly: true,
  
      }),
      defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
        // readOnly: true,   
      }),
    ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    }
  }
})