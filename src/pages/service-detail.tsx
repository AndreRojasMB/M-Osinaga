import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { ServiceDetailView } from 'src/sections/services/view/services-detail-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`Servicio - ${CONFIG.appName}`}</title>
      </Helmet>

      <ServiceDetailView />
    </>
  );
}