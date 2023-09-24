import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'ria',
  title: 'Ria Fennema & Festas',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Give a brief description of About Us',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      description: 'Give an image we can use',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'body',
        title: 'Body',
        description: 'Here you can be creative and add every information you want',
        type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
})
