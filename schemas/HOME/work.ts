import {defineField, defineType} from "sanity"

export default defineType({
    name: "work",
    title: "What we do",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            validation: (Rule) => Rule.max(100),
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            description: "Give a bries description here ",
            validation: (Rule) => Rule.max(230),
            type: "string",
        })
    ],
    preview : {
        select: {
            title: "title"
        },
    },
})