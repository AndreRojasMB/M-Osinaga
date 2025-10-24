import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ProductDetailView } from 'src/sections/catalog/view/product-detail-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Producto - ${CONFIG.appName}`}</title>
      </Helmet>

      <ProductDetailView />
    </>
  );
}