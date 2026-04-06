export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'id-project',
      type:'number'
    },
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'visible',
      title: 'mostrar en el portafolio',
      type: 'boolean',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true, // Esto te permite recortar la imagen desde el panel
      },
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url',
    },
    {
      name: 'linkRepository',
      title: 'Respository',
      type: 'url'
    },
    {
      name: 'year',
      title: 'Year Project',
      type: 'number',
    },
    {
      name: 'atribute',
      title: 'atribute',
      type: 'array',
      of:[{type:'string'}]
    }
  ],
}

