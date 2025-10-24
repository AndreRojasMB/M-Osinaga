import type { RouteObject } from 'react-router';

import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { AuthLayout } from 'src/layouts/auth';
import { DashboardLayout } from 'src/layouts/dashboard';

// ----------------------------------------------------------------------

export const HomePage = lazy(() => import('src/pages/homepage'));
export const DashboardPage = lazy(() => import('src/pages/dashboard'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const CatalogPage = lazy(() => import('src/pages/catalog'));
export const ProductDetailPage = lazy(() => import('src/pages/product-detail'));
export const ServicesPage = lazy(() => import('src/pages/services'));
export const ServiceDetailPage = lazy(() => import('src/pages/service-detail'));

const renderFallback = () => (
  <Box
    sx={{
      display: 'flex',
      flex: '1 1 auto',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export const routesSection: RouteObject[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={renderFallback()}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: 'servicios',
    element: (
      <Suspense fallback={renderFallback()}>
        <ServicesPage />
      </Suspense>
    ),
  },
  {
    path: 'servicios/:serviceId',
    element: (
      <Suspense fallback={renderFallback()}>
        <ServiceDetailPage />
      </Suspense>
    ),
  },
  {
    path: 'catalogo/:productId',
    element: (
      <Suspense fallback={renderFallback()}>
        <ProductDetailPage />
      </Suspense>
    ),
  },
  {
    path: 'catalogo',
    element: (
      <Suspense fallback={renderFallback()}>
        <CatalogPage />
      </Suspense>
    ),
  },
  {
    path: 'dashboard',
    element: (
      <DashboardLayout>
        <Suspense fallback={renderFallback()}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'user', element: <UserPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'blog', element: <BlogPage /> },
    ],
  },
  {
    path: 'sign-in',
    element: (
      <AuthLayout>
        <SignInPage />
      </AuthLayout>
    ),
  },
  {
    path: '404',
    element: <Page404 />,
  },
  { path: '*', element: <Page404 /> },
];