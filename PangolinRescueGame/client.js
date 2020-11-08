// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });


  // Render your app content to the default cylinder surface
  // r360.renderToSurface(
  //   r360.createRoot('PangolinRescueGame', { /* initial props */ }),
  //   r360.getDefaultSurface()
  // );
  r360.renderToLocation(
    r360.createRoot('PangolinRescueGame', {}),
    r360.getDefaultLocation()
  )

  const middlepanel = new Surface(600,300, Surface.SurfaceShape.Flat);
  middlepanel.setAngle(0,0)

  r360.renderToSurface(
    r360.createRoot('Middlepanel', {}),
    middlepanel
  )


  const rightpanel = new Surface(600,300, Surface.SurfaceShape.Flat);
  rightpanel.setAngle(0.90,0)

  r360.renderToSurface(
    r360.createRoot('Rightpanel', {}),
    rightpanel
  )
  const cylinderSurface = new Surface(
    800, /* width */
    450, /* height */
    Surface.SurfaceShape.Cylinder /* shape */
  );

  r360.renderToSurface(
    r360.createRoot('Scene', { /* initial props */ }),
    cylinderSurface,
    'main'
  );
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('rainforest.jpeg'));
}

window.React360 = {init};
