// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  r360.renderToLocation(r360.createRoot('Pangolin', r360.getDefaultLocation()));

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('PangolinRescueGame', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('rainforest.jpeg'));
}

window.React360 = {init};
