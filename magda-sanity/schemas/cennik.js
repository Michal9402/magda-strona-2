export default {
  name: 'cennik',
  title: 'Cennik',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa zabiegu',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Cena zabiegu',
      type: 'number',
    },
    {
      name: 'priceForSet',
      title: 'Cena pakietu',
      type: 'number',
    },
  ],
}
