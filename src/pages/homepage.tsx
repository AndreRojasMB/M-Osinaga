import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { HomepageView } from 'src/sections/overview/view/homepage-view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{`${CONFIG.appName}`}</title>
      </Helmet>

      <HomepageView />
    </>
  );
}