export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'id-curso',
      type:'number'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'institute',
      title: 'Institute',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year graduation',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}