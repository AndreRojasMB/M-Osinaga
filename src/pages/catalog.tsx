import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { CatalogView } from 'src/sections/catalog/view/catalog-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Catálogo - ${CONFIG.appName}`}</title>
      </Helmet>

      <CatalogView />
    </>
  );
}