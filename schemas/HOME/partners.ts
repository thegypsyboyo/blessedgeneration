import {defineField, defineType} from "sanity"

export default defineType({
    name: "partners",
    title: "Our Partners",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image Array",
            description: "Provide images here",
            type: "array",
            of:[{type: "reference", to: {type: "imageArray"}}]
        }),
        defineField({
            name: "subtitle",
            title: "Subtitle",
            description: "our partners",
            validation: (Rule) => Rule.max(200),
            type: "string",

        }),
        defineField({
            name: "title",
            title:"Title",
            description: "give brief title here ",
            type: "string",
            validation: (Rule) => Rule.max(45),
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "Give a description here",
            type: "string"
        }),
        
    ],
    preview: {
        select: {
            title: 'subtitle',
            // media: 'image',
        }
    }
}) 