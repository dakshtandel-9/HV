import ProductPage from '../../../components/ProductPage';

export default function ProductDetailPage({ params }) {
  return <ProductPage productId={parseInt(params.id)} />;
}

export function generateStaticParams() {
  // Generate static params for known products
  return [
    { id: '1' },
    // Add more product IDs as needed
  ];
}