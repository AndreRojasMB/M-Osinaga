import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ServicesView } from 'src/sections/services/view/services-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Servicios - ${CONFIG.appName}`}</title>
      </Helmet>

      <ServicesView />
    </>
  );
}