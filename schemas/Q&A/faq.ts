import { defineField, defineType } from 'sanity';

export default defineType ({
  name: 'faq',
  title: 'FQAs',
  type: 'document',

  fields: [
    defineField({
        name: "question",
        title: "Question",
        type: "string"
      }),
      defineField({
        name: 'category',
        type: 'array',
        title: 'Category',
        description: 'PLEASE CHOOSE A CATEGORY FROM WHICH THE ITEM WILL BE GROUPED INTO. YOU HAVE TO CHOOSE!',
        of: [{ type: 'string' }],
        options: {
          list: [
            { title: 'All', value: 'All' },
            { title: 'General Faq', value: 'General Faq' },
            { title: 'Charity Faq', value: 'Charity Faq' },
            { title: 'Donation Faq', value: 'Donation Faq' },
          ],
        },
      }),
    defineField({
        name: "answer",
        title: "Answer",
        type: "string"
    }),
  ],

  preview: {
    select: {
      title: 'question',
      media: ""
    }
  }
})