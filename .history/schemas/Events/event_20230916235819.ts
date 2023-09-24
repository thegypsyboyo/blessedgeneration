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
      name: 'amountDonated',
      title: 'Amount Donated',
      type: 'string',
      description: "give the exact amount because it is being used somewhere in our code",
    }),
    defineField({
      name: 'amountTargeted',
      title: 'Target Amount',
      type: 'string',
      description: "Give the target amount you want to achieve.",
    }),
    defineField({
      name: 'estimatePercentage',
      title: 'Percetage Estimate',
      type: 'number',
      description: "Give the percentage in number of how much we have raised to reach the Target Amount",
    }),
    defineField({
        name: 'category',
        type: 'document',
        title: 'Category',
        description: 'PLEASE CHOOSE A CATEGORY FROM WHICH THE ITEM WILL BE GROUPED INTO. YOU HAVE TO CHOOSE!',
      }),
      defineField({
        name: 'body',
        title: 'Body',
        type: 'blockContent',
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