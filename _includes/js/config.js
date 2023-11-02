var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
}});

var siteConfig = {
  version: 2,
  routes: {
    enabledRoutes: ['occurrenceSeach'],
  },
  occurrence: {
    mapSettings: {
      lat: 0,
      lng: 25,
      zoom: 3.3
    },
    // You probably need help to configure the scope - so just ask
    // for his demo site we only show Fungi (taxonKey=5). It use the predicate structure known from GBIF download API. 
    // See https://www.gbif.org/developer/occurrence (long page without enough anchors - search for "Occurrence Download Predicates")
    // The format is however slightly different, in that is use camelCase for keys instead of CONSTANT_CASE. 
    rootPredicate: { type: 'and', predicates: [
      {
        type: 'in', 
        key: 'taxonKey',
        values: ["2442153", "9789983"]
      },
      {
        type: 'within', 
        key: 'geometry',
        value: "POLYGON((-0.18665 40.83074,-9.2998 38.13469,-20.00752 29.403,-22.16137 18.44407,-20.41689 7.80871,-11.47535 -0.69968,2.52026 -0.30892,5.40963 -19.69613,16.86683 -40.85831,31.92463 -40.82522,49.00448 -32.94433,60.49218 -21.50211,58.19205 5.80734,53.79236 14.91222,43.74521 18.18718,36.05452 33.9283,17.40904 40.48391,4.69168 41.57712,-0.18665 40.83074))"
      }
    ] }, 
    occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'] // what tabs should be shown
    // see https://hp-theme.gbif-staging.org/data-exploration-config for more options
  }
};

// example of a language specific route overwrite
// if (pageLang === 'da')  {
//   siteConfig.routes.occurrenceSearch.route = '/observationer/sog';
// }