import ProductPage from '../../../components/ProductPage';

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  return <ProductPage productId={parseInt(id)} />;
}

export function generateStaticParams() {
  // Generate static params for known products
  return [
    { id: '1' },
    // Add more product IDs as needed
  ];
}