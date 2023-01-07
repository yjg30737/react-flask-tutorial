import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

export function BasicExample() {
  return (
    <ResponsiveGridLayout
      className="layout"
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0 }}>Box 1</div>
      <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0 }}>Box 2</div>
      <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0 }}>Box 3</div>
    </ResponsiveGridLayout>
  );
}
