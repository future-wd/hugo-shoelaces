const autoprefixer = require('autoprefixer');
// const purgecss = require('@fullhuman/postcss-purgecss');
// const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    // purgecss({
    //   content: [
    //     './layouts/**/*.html',
    //     './content/**/*.md',
    //     './assets/js/**/*.js',
    //   ],
    //   // keyframes: true
    //   //variables: false,
    //   safelist: {
    //     standard: [
    //       /^.hugo-img/, 
    //       /^.js/,
    //       ':root',
    //       'table',
    //       'thead',
    //       'tbody',
    //       'tr',
    //       'th',
    //       'td',
    //       'h3',
    //       ...whitelister([
    //         // './assets/scss/components/_buttons.scss',
    //         //'./assets/scss/components/_code.scss',
        
    //         // './assets/scss/components/_syntax.scss',
    //       ]),
    //     ],
    //     deep: [],
    //     greedy: [],
    //     keyframes: [],
    //     variables: [],
    //   },
    // }),
  ],
}
