import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import Products from '@/app/components/Products'
import ProductList from '@/app/components/ProductList'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
