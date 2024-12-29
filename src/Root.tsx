import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { App } from './App';
import { TabsPage } from './components/TabsPage';
import { useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';

export const Root = () => {
  useEffect(() => {
    document.documentElement.classList.add('has-navbar-fixed-top');
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace={true} />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
