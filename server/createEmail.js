// this webpack file would create the email buildQueries

// gather HTML template, gather CSS, and gather <Email/> Component
// piece it together, and spit out HTML file

// similar to what /public folder does

// something like this:

const STYLE_TAG = '%STYLE%';
const CONTENT_TAG = '%CONTENT%';

function createEmail(data) {
  return Promise.all([
    getFile('../src/Assets/Styles/Styles.css'),
    getFile('./email.html'),
  ]).then(([style, template]) => {
    //   grabs Email.js file with passed in data
    const emailElement = React.createElement(Email, { data });
    const content = ReactDOMServer.renderToStaticMarkup(emailElement);
    //  converts it to html

    let emailHTML = template;

    emailHTML = emailHTML.replace(CONTENT_TAG, content);
    emailHTML = emailHTML.replace(STYLE_TAG, style);

    return emailHTML;
  });
}
