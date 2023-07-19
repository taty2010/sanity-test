import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType ({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    {
      name: 'source',
      title: 'From',
      type: 'string',
    },
    {
      name: 'destination',
      title: 'To',
      type: 'string',
    },
    {
      name: 'permanent',
      title: 'Permanent',
      type: 'boolean',
      initialValue: () => true,
    },
  ],
});