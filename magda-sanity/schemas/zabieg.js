export default {
  name: 'zabieg',
  title: 'Zabieg',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'set',
      title: 'Pakiet?',
      type: 'boolean',
    },
    {
      name: 'pricelist',
      title: 'Kategoria cennika',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'cennik' } }],
    },
    {
      name: 'image',
      title: 'Zdjecie',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Krotki opis zabiegu do zdjecia',
      type: 'blockContent',
    },
    {
      name: 'bodyLong',
      title: 'Długi opis zabiegu',
      type: 'blockContent',
    },
  ],
}
