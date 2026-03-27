export default {
  name: 'tech',
  title: 'Tech',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'id-project',
      type:'number'
    },
    {
      name: 'name',
      title: 'Name Tech',
      type: 'string',
    },
		{
      name: 'area',
      title: 'Area tecnica',
      type: 'string',
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
  ],
}