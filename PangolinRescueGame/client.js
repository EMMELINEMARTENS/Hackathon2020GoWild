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
  const leftpanel = new Surface(600,300, Surface.SurfaceShape.Flat);
  leftpanel.setAngle(0,0)

  r360.renderToSurface(
    r360.createRoot('Leftpanel', {}),
    leftpanel
  )


  const rightpanel = new Surface(300,600, Surface.SurfaceShape.Flat);
  rightpanel.setAngle(-0.5,0)

  r360.renderToSurface(
    r360.createRoot('Rightpanel', {}),
    rightpanel
  )
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('rainforest.jpeg'));
}

window.React360 = {init};
